import Link from "next/link";
import { Plus, Edit, Trash2, Eye, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function PostsPage() {
  // Mock data - replace with real data from your database
  const posts = [
    {
      id: "1",
      title: "The Art of Letting Go",
      quote: "Sometimes holding on does more damage than letting go.",
      slug: "the-art-of-letting-go",
      image: "/peaceful-hands-releasing-flower-petals-into-water.jpg",
      date: new Date("2024-01-15"),
      commentsCount: 12,
    },
    {
      id: "2",
      title: "Finding Peace in Uncertainty",
      quote:
        "Peace is not the absence of chaos, but the presence of calm within it.",
      slug: "finding-peace-in-uncertainty",
      image: "/person-walking-on-peaceful-forest-path-with-soft-m.jpg",
      date: new Date("2024-01-10"),
      commentsCount: 8,
    },
    {
      id: "3",
      title: "The Gentle Power of Self-Compassion",
      quote: "Be gentle with yourself. You're doing the best you can.",
      slug: "the-gentle-power-of-self-compassion",
      image: "/gentle-ocean-waves-at-sunset-with-soft-pastel-colo.jpg",
      date: new Date("2024-01-05"),
      commentsCount: 15,
    },
  ];

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
        <Link href="/admin/posts/new">
          <Button className="bg-sage-600 hover:bg-sage-700 text-white gap-2">
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
            className="border-sage-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
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
            <CardContent className="p-5 space-y-4">
              <div>
                <h3 className="font-serif text-xl text-sage-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-sage-600">
                  <span>{post.date.toLocaleDateString()}</span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    {post.commentsCount}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link href={`/admin/posts/${post.id}`} className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 gap-2 bg-transparent"
                  >
                    <Edit className="w-3 h-3" />
                    Edit
                  </Button>
                </Link>
                <Link href={`/reflections/${post.slug}`} target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                  >
                    <Eye className="w-3 h-3" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
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
            <Link href="/admin/posts/new">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white gap-2">
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
