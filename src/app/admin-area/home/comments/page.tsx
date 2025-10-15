import { MessageSquare, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CommentsPage() {
  // Mock data - replace with real data from your database
  const commentsByPost = [
    {
      postId: "1",
      postTitle: "The Art of Letting Go",
      postSlug: "the-art-of-letting-go",
      comments: [
        {
          id: "1",
          content:
            "This really resonated with me. I've been holding onto past hurts for too long.",
          date: new Date("2024-01-16"),
        },
        {
          id: "2",
          content:
            "Thank you for sharing this. It's exactly what I needed to hear today.",
          date: new Date("2024-01-17"),
        },
      ],
    },
    {
      postId: "2",
      postTitle: "Finding Peace in Uncertainty",
      postSlug: "finding-peace-in-uncertainty",
      comments: [
        {
          id: "3",
          content:
            "Your words brought me comfort during a difficult time. Thank you.",
          date: new Date("2024-01-12"),
        },
      ],
    },
  ];

  const totalComments = commentsByPost.reduce(
    (acc, post) => acc + post.comments.length,
    0,
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl md:text-4xl text-sage-900">
          Anonymous Reflections
        </h1>
        <p className="text-sage-600 mt-2">
          Thoughts and feelings shared by your readers
        </p>
        <p className="text-sm text-sage-500 mt-1">
          {totalComments} total{" "}
          {totalComments === 1 ? "reflection" : "reflections"}
        </p>
      </div>

      {/* Comments by Post */}
      <div className="space-y-6">
        {commentsByPost.map((post) => (
          <Card
            key={post.postId}
            className="border-sage-200/50 bg-white/80 backdrop-blur-sm"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="font-serif text-sage-900 text-xl">
                    {post.postTitle}
                  </CardTitle>
                  <CardDescription className="text-sage-600 mt-1">
                    {post.comments.length}{" "}
                    {post.comments.length === 1 ? "reflection" : "reflections"}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/reflections/${post.postSlug}`} target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-sage-300 text-sage-700 hover:bg-sage-50 gap-2 bg-transparent"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Post
                    </Button>
                  </Link>
                  <Link href={`/admin/posts/${post.postId}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                    >
                      Edit
                    </Button>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {post.comments.map((comment, index) => (
                <div key={comment.id}>
                  {index > 0 && <Separator className="my-4 bg-sage-200/50" />}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <p className="text-sage-800 leading-relaxed">
                        {comment.content}
                      </p>
                      <p className="text-xs text-sage-500">
                        {comment.date.toLocaleDateString()} at{" "}
                        {comment.date.toLocaleTimeString()}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {commentsByPost.length === 0 && (
        <Card className="border-sage-200/50 bg-white/80 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <MessageSquare className="w-16 h-16 text-sage-300 mb-4" />
            <h3 className="font-serif text-2xl text-sage-900 mb-2">
              No reflections yet
            </h3>
            <p className="text-sage-600 max-w-md">
              When readers share their thoughts on your posts, they'll appear
              here
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
