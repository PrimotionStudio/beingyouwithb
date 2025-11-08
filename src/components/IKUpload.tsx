"use client";
import { Progress } from "@/components/ui/progress";
import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";
import { ReactNode, useRef, useState, DragEvent } from "react";
import { toast } from "sonner";

interface UploadProps {
  setUrlAction: (url: string) => void;
  children:
    | ReactNode
    | ((props: {
        progress: number;
        isUploading: boolean;
        isDragging: boolean;
      }) => ReactNode);
  onUploadStart?: () => void;
  onUploadComplete?: (url: string) => void;
  onUploadError?: (error: Error) => void;
  accept?: string;
  maxSize?: number; // in MB
}

export default function IKUpload({
  setUrlAction,
  children,
  onUploadStart,
  onUploadComplete,
  onUploadError,
  accept = "image/*",
  maxSize = 10, // 10MB default
}: UploadProps) {
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController>(new AbortController());

  async function ImagekitAuthenticator() {
    try {
      const response = await fetch("/api/imagekit");
      if (!response.ok) throw new Error(await response.text());
      const data = await response.json();
      const { signature, expire, token, publicKey } = data;
      return { signature, expire, token, publicKey };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  const processFile = async (file: File) => {
    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      toast.error(`File size must be less than ${maxSize}MB`);
      return;
    }

    try {
      onUploadStart?.();

      const authParams = await ImagekitAuthenticator();
      if (!authParams) throw new Error("Unable to upload");

      const { signature, expire, token, publicKey } = authParams;

      // Create new abort controller for this upload
      abortControllerRef.current = new AbortController();

      const uploadResponse = await upload({
        expire,
        token,
        signature,
        publicKey,
        file,
        fileName: file.name,
        onProgress: (event) => {
          setProgress((event.loaded / event.total) * 100);
        },
        abortSignal: abortControllerRef.current.signal,
      });

      if (!uploadResponse || !uploadResponse.url)
        throw new Error("Upload failed");

      setUrlAction(uploadResponse.url);
      onUploadComplete?.(uploadResponse.url);
      setProgress(0);
      toast.success("Image uploaded successfully");
    } catch (error) {
      const err = error as
        | Error
        | ImageKitAbortError
        | ImageKitInvalidRequestError
        | ImageKitUploadNetworkError
        | ImageKitServerError;

      if (error instanceof ImageKitAbortError) {
        toast.error("Upload aborted");
      } else {
        toast.error(err.message);
      }

      onUploadError?.(err);
      setProgress(0);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    await processFile(file);

    // Reset input value so same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (!file) {
      toast.error("No file found");
      return;
    }

    // Validate file type
    if (accept && !file.type.match(accept.replace("*", ".*"))) {
      toast.error("Invalid file type");
      return;
    }

    await processFile(file);
  };

  const triggerUpload = () => {
    if (progress > 0 && progress < 100) return; // Don't trigger during upload
    fileInputRef.current?.click();
  };

  const isUploading = progress > 0 && progress < 100;

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileSelect}
        accept={accept}
      />

      <div
        onClick={triggerUpload}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="cursor-pointer"
      >
        {typeof children === "function"
          ? children({ progress, isUploading, isDragging })
          : children}
      </div>

      {isUploading && <Progress value={progress} max={100} className="mt-2" />}
    </>
  );
}
