"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, X, Check, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import IKUpload from "@/components/IKUpload";
import { PostType } from "@/lib/zod";
import { toast } from "sonner";

export default function NewPostPage() {
  const router = useRouter();
  const editorRef = useRef<HTMLDivElement>(null);
  const mediumEditorRef = useRef<any>(null);
  const autoSaveTimerRef = useRef<NodeJS.Timeout>(null);

  const [imagePreview, setImagePreview] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [showSaveIndicator, setShowSaveIndicator] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  const [post, setPost] = useState<Omit<PostType, "id" | "date" | "comments">>({
    slug: "",
    title: "",
    quote: "",
    image: "",
    content: "",
  });

  // Initialize Medium Editor
  useEffect(() => {
    // Dynamically import Medium Editor (client-side only)
    const initEditor = async () => {
      if (
        typeof window !== "undefined" &&
        editorRef.current &&
        !mediumEditorRef.current
      ) {
        const MediumEditor = (await import("medium-editor")).default;

        // Import CSS
        // await import("medium-editor/dist/css/medium-editor.css");
        // await import("medium-editor/dist/css/themes/default.css");

        mediumEditorRef.current = new MediumEditor(editorRef.current, {
          toolbar: {
            buttons: [
              "bold",
              "italic",
              "h2",
              "h3",
              "quote",
              "anchor",
              "unorderedlist",
            ],
            diffLeft: 0,
            diffTop: -10,
            static: false,
            updateOnEmptySelection: false,
          },
          placeholder: {
            text: "Write your gentle wisdom here...",
            hideOnClick: true,
          },
          paste: {
            cleanPastedHTML: true,
            forcePlainText: false,
            cleanAttrs: ["style", "dir"],
            cleanTags: ["meta"],
          },
          anchorPreview: {
            hideDelay: 300,
          },
        });

        // Listen for content changes
        editorRef.current.addEventListener("input", handleEditorChange);
      }
    };

    initEditor();

    return () => {
      if (mediumEditorRef.current) {
        mediumEditorRef.current.destroy();
      }
      if (autoSaveTimerRef.current) {
        clearTimeout(autoSaveTimerRef.current);
      }
    };
  }, []);

  // Calculate word count and reading time
  const handleEditorChange = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      const text = editorRef.current.innerText || "";
      const words = text
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0).length;

      setWordCount(words);
      setReadingTime(Math.ceil(words / 200)); // Average reading speed: 200 words/min
      setPost((prev) => ({ ...prev, content }));

      // Trigger auto-save
      triggerAutoSave();
    }
  };

  // Auto-save functionality
  const triggerAutoSave = () => {
    if (autoSaveTimerRef.current) {
      clearTimeout(autoSaveTimerRef.current);
    }

    autoSaveTimerRef.current = setTimeout(() => {
      autoSave();
    }, 2000); // Auto-save after 2 seconds of inactivity
  };

  const autoSave = async () => {
    if (!post.title) return; // Don't auto-save without a title

    setIsSaving(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSaving(false);
    setLastSaved(new Date());
    setShowSaveIndicator(true);

    // Hide indicator after 3 seconds
    setTimeout(() => {
      setShowSaveIndicator(false);
    }, 3000);
  };

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setPost({
      ...post,
      title,
      slug: generateSlug(title),
    });
    triggerAutoSave();
  };

  const handleQuoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...post, quote: e.target.value });
    triggerAutoSave();
  };

  // Form submission
  const handleSaveDraft = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("[v0] Saving draft:", post);

    setIsSaving(false);
    // router.push("/admin/posts");
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      const data = await response.json();
      if (!response.ok) throw new Error("Cannot publish post");
      router.push("/admin-area/home/posts");
    } catch (error) {
      toast.error(`Error: ${(error as Error).message}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Back Button & Page Title */}
        <div className="mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/*<Link
            href="/admin-area/home/posts"
            className="inline-flex items-center gap-2 text-sage-700 hover:text-sage-900 transition-colors duration-200 mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back</span>
          </Link>*/}

          <h1 className="font-serif text-3xl sm:text-4xl text-sage-900 mb-2">
            New Reflection
          </h1>
          <p className="text-sage-600 italic text-base sm:text-lg">
            Share your gentle wisdom with those seeking peace
          </p>
        </div>

        {/* Cover Image Upload */}
        <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <Label className="text-base font-medium text-sage-900 mb-2 block">
            Cover Image{" "}
            <span className="text-sm text-sage-500 italic font-normal">
              (Optional)
            </span>
          </Label>
          <p className="text-sm text-sage-600 mb-4">
            Choose a peaceful, calming image that reflects your message
          </p>

          {post.image ? (
            <div className="relative aspect-video rounded-xl overflow-hidden group">
              <Image
                src={post.image}
                alt="Cover preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview("");
                    setPost({ ...post, image: "" });
                  }}
                  className="p-3 bg-white/90 hover:bg-white rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-sage-900" />
                </button>
              </div>
            </div>
          ) : (
            <IKUpload setUrlAction={(img) => setPost({ ...post, image: img })}>
              {({ isDragging, isUploading }) => (
                <label
                  className={`
                     flex flex-col items-center justify-center h-64 sm:h-80
                     border-2 border-dashed rounded-xl cursor-pointer
                     transition-all duration-200 bg-cream-50/50
                     ${
                       isDragging
                         ? "border-sage-500 bg-sage-50/50 scale-[1.01]"
                         : "border-sage-300 hover:border-sage-400 hover:bg-sage-50/30"
                     }
                     ${isUploading ? "pointer-events-none opacity-60 animate-pulse" : ""}
                   `}
                >
                  <Upload className="w-12 h-12 text-sage-400 mb-3" />
                  <span className="text-base font-medium text-sage-700 mb-1">
                    {isUploading
                      ? "Uploading..."
                      : "Click to upload or drag & drop"}
                  </span>
                  <span className="text-sm text-sage-500">
                    PNG, JPG up to 10MB
                  </span>
                </label>
              )}
            </IKUpload>
          )}
        </div>

        {/* Title Input */}
        <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <Label
            htmlFor="title"
            className="text-base font-medium text-sage-900 mb-2 block"
          >
            Title
          </Label>
          <Input
            id="title"
            value={post.title}
            onChange={handleTitleChange}
            placeholder="The Art of Letting Go"
            className="h-14 text-lg font-serif border-sage-300 focus:border-sage-500 focus:ring-sage-500/20 transition-all duration-200"
            required
          />
          {post.slug && (
            <p className="text-xs text-sage-600 mt-2">
              This will be the URL:{" "}
              <span className="font-mono">
                /reflections/{post.slug || "your-slug"}
              </span>
            </p>
          )}
        </div>

        {/* Opening Quote (Optional) */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-250">
          <Label
            htmlFor="quote"
            className="text-base font-medium text-sage-900 mb-2 block"
          >
            Opening Quote{" "}
            <span className="text-sm text-sage-500 italic font-normal">
              (Optional)
            </span>
          </Label>
          <p className="text-sm text-sage-600 mb-3">
            A gentle, reflective quote that captures the essence of your message
          </p>
          <div className="relative">
            <div className="absolute left-4 top-4 text-6xl text-sage-300 font-serif leading-none">
              "
            </div>
            <Textarea
              id="quote"
              value={post.quote}
              onChange={handleQuoteChange}
              placeholder="Sometimes holding on does more damage than letting go."
              className="min-h-[100px] pl-12 pt-6 text-base font-serif italic border-sage-300 focus:border-sage-500 focus:ring-sage-500/20 bg-cream-50/50 border-l-4 border-l-terracotta-400 transition-all duration-200"
            />
          </div>
          <p className="text-xs text-sage-500 mt-2 text-right">
            Best kept under 20 words for impact
          </p>
        </div>

        {/* Reflection Content (Medium Editor) */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Label className="text-base font-medium text-sage-900 mb-2 block">
            Reflection Content
          </Label>
          <p className="text-sm text-sage-600 mb-4">
            Share your insights with warmth and compassion. Remember to include
            a gentle invitation to reach out.
          </p>

          <div
            ref={editorRef}
            className="min-h-[200px] p-8 sm:p-10 border-2 border-sage-300 rounded-xl bg-white focus-within:border-sage-500 focus-within:ring-4 focus-within:ring-sage-500/10 transition-all duration-200 prose prose-sage max-w-none font-serif"
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#2C2C2C",
            }}
          />

          {/* Word Count & Reading Time */}
          <div className="flex justify-end mt-3 text-sm text-sage-600">
            <span>
              {wordCount.toLocaleString()} words • ~{readingTime} min read
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Footer with Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-sage-200 shadow-lg z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {/* Auto-Save Indicator */}
          {showSaveIndicator && lastSaved && (
            <div className="text-center mb-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <span className="inline-flex items-center gap-2 text-sm text-sage-600">
                <Check className="w-4 h-4 text-sage-500" />
                Draft saved at{" "}
                {lastSaved.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-3">
            <Link href="/admin-area/home/posts" className="w-full sm:w-auto">
              <Button
                type="button"
                variant="ghost"
                className="w-full sm:w-auto text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-all duration-200"
              >
                Cancel
              </Button>
            </Link>

            <div className="flex gap-3 w-full sm:w-auto">
              {/*<Button
                type="button"
                onClick={handleSaveDraft}
                disabled={isSaving || !formData.title}
                variant="outline"
                className="flex-1 sm:flex-none border-2 border-sage-300 text-sage-700 hover:border-sage-400 hover:bg-sage-50 transition-all duration-200 bg-transparent"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Draft"
                )}
              </Button>*/}

              <Button
                type="button"
                onClick={handlePublish}
                disabled={isSaving || !post.title || !post.content}
                className="flex-1 sm:flex-none text-white shadow-lg shadow-sage-600/30 hover:shadow-xl hover:shadow-sage-600/40 hover:scale-[1.02] transition-all duration-200"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  "Publish"
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Medium Editor Styles */}
      <style jsx global>{`
        .medium-editor-toolbar {
          background: #ffffff !important;
          border: 1px solid #e0e0e0 !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
        }

        .medium-editor-toolbar-button {
          padding: 8px 12px !important;
          transition: all 0.2s ease !important;
        }

        .medium-editor-toolbar-button:hover {
          background: #a7c4a0 !important;
          color: #ffffff !important;
        }

        .medium-editor-toolbar-button-active {
          background: #8faf89 !important;
          color: #ffffff !important;
        }

        .medium-editor-placeholder:after {
          color: #b0b0b0 !important;
          font-style: italic !important;
        }

        /* Editor content styling */
        [contenteditable="true"] h2 {
          font-family: var(--font-serif);
          font-size: 24px;
          font-weight: 500;
          margin-top: 2em;
          margin-bottom: 0.75em;
          color: #2c2c2c;
        }

        [contenteditable="true"] h3 {
          font-family: var(--font-serif);
          font-size: 20px;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          color: #2c2c2c;
        }

        [contenteditable="true"] blockquote {
          font-family: var(--font-serif);
          font-size: 18px;
          font-style: italic;
          border-left: 3px solid #a7c4a0;
          padding-left: 24px;
          margin: 2em 0;
          color: #4a4a4a;
          background: #fdfbf7;
          padding: 16px 24px;
          border-radius: 4px;
        }

        [contenteditable="true"] a {
          color: #a7c4a0;
          text-decoration: underline;
        }

        [contenteditable="true"] a:hover {
          color: #8faf89;
        }

        [contenteditable="true"] ul {
          margin: 1.5em 0;
          padding-left: 28px;
        }

        [contenteditable="true"] li {
          margin-bottom: 0.5em;
        }

        [contenteditable="true"] p {
          margin-bottom: 1.5em;
        }
      `}</style>
    </div>
  );
}
