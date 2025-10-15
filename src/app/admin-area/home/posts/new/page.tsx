"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NewPostPage() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string>("");
  const [formData, setFormData] = useState({
    title: "",
    quote: "",
    slug: "",
    image: "",
    content: "",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - save to database
    console.log("[v0] Form data:", formData);
    // router.push("/admin/posts")
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/posts">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-sage-700 hover:text-sage-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="font-serif text-3xl md:text-4xl text-sage-900">
            New Reflection
          </h1>
          <p className="text-sage-600 mt-1">
            Share your gentle wisdom with those seeking peace
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload */}
        <Card className="border-sage-200/50 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-serif text-sage-900">
              Cover Image
            </CardTitle>
            <CardDescription className="text-sage-600">
              Choose a peaceful, calming image that reflects your message
            </CardDescription>
          </CardHeader>
          <CardContent>
            {imagePreview ? (
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <Image
                  src={imagePreview || "/placeholder.svg"}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview("");
                    setFormData({ ...formData, image: "" });
                  }}
                  className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X className="w-4 h-4 text-sage-900" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center aspect-video border-2 border-dashed border-sage-300 rounded-lg hover:border-sage-400 transition-colors cursor-pointer bg-sage-50/30">
                <Upload className="w-12 h-12 text-sage-400 mb-3" />
                <span className="text-sm text-sage-600 mb-1">
                  Click to upload image
                </span>
                <span className="text-xs text-sage-500">
                  PNG, JPG up to 10MB
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </CardContent>
        </Card>

        {/* Content Fields */}
        <Card className="border-sage-200/50 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-serif text-sage-900">Content</CardTitle>
            <CardDescription className="text-sage-600">
              Write with warmth, compassion, and gentle wisdom
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sage-700">
                Title
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="The Art of Letting Go"
                className="border-sage-300 focus:border-sage-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug" className="text-sage-700">
                URL Slug
              </Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
                placeholder="the-art-of-letting-go"
                className="border-sage-300 focus:border-sage-500 font-mono text-sm"
                required
              />
              <p className="text-xs text-sage-500">
                This will be the URL: /reflections/
                {formData.slug || "your-slug"}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote" className="text-sage-700">
                Opening Quote
              </Label>
              <Textarea
                id="quote"
                value={formData.quote}
                onChange={(e) =>
                  setFormData({ ...formData, quote: e.target.value })
                }
                placeholder="Sometimes holding on does more damage than letting go."
                className="border-sage-300 focus:border-sage-500 min-h-[80px] font-serif italic"
                required
              />
              <p className="text-xs text-sage-500">
                A gentle, reflective quote that captures the essence of your
                message
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content" className="text-sage-700">
                Reflection Content
              </Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                placeholder="Write your gentle wisdom here..."
                className="border-sage-300 focus:border-sage-500 min-h-[300px]"
                required
              />
              <p className="text-xs text-sage-500">
                Share your insights with warmth and compassion. Remember to
                include a gentle invitation to reach out.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Link href="/admin/posts">
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
            >
              Cancel
            </Button>
          </Link>
          <Button
            type="submit"
            className="w-full sm:w-auto bg-sage-600 hover:bg-sage-700 text-white"
          >
            Publish Reflection
          </Button>
        </div>
      </form>
    </div>
  );
}
