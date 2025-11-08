"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PostType } from "@/lib/zod";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>([]);

  async function fetchPosts() {
    const response = await fetch("/api/posts");
    const data = await response.json();

    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl text-sage-900">
            Gentle Insights
          </h1>
          <p className="text-sage-600 mt-2">
            Manage your reflections and wisdom
          </p>
        </div>
        <Link href="/admin-area/home/posts/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            New Reflection
          </Button>
        </Link>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="border-sage-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden group p-0"
          >
            {post.image && (
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white/90 text-sm italic font-serif line-clamp-2">
                    "{post.quote}"
                  </p>
                </div>
              </div>
            )}
            <CardContent className="pb-5 space-y-4">
              <div>
                <h3 className="font-serif text-xl text-sage-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-sage-600">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    {post.comments?.length ?? 0}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/admin-area/home/posts/${post.id}`}
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-sage-300 text-sage-700 hover:bg-primary hover:text-white gap-2 bg-transparent"
                  >
                    <Edit className="w-3 h-3" />
                    Edit
                  </Button>
                </Link>
                <Link href={`/reflections/${post.slug}`} target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-sage-300 text-sage-700 hover:bg-primary hover:text-white bg-transparent"
                  >
                    <Eye className="w-3 h-3" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-300 text-red-700 hover:bg-red-500 hover:text-white bg-transparent"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <Card className="border-sage-200/50 bg-white/80 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <FileText className="w-16 h-16 text-sage-300 mb-4" />
            <h3 className="font-serif text-2xl text-sage-900 mb-2">
              No reflections yet
            </h3>
            <p className="text-sage-600 mb-6 max-w-md">
              Start sharing your gentle wisdom and insights with those seeking
              peace
            </p>
            <Link href="/admin-area/home/posts/new">
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Create Your First Reflection
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
