import Link from "next/link";
import { FileText, MessageSquare, Mail, Plus, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  // Mock data - replace with real data from your database
  const stats = {
    totalPosts: 12,
    totalComments: 48,
    totalMessages: 23,
    recentPosts: 3,
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Welcome Section */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-4xl md:text-5xl text-sage-900 text-balance">
          Welcome Back
        </h1>
        <p className="text-sage-600 text-lg max-w-2xl mx-auto text-pretty">
          Your sanctuary for nurturing connections and sharing gentle wisdom
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/admin/posts/new">
          <Button className="bg-sage-600 hover:bg-sage-700 text-white gap-2">
            <Plus className="w-4 h-4" />
            New Reflection
          </Button>
        </Link>
        <Link href="/">
          <Button
            variant="outline"
            className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
          >
            View Live Site
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-sage-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-sage-700">
              Total Reflections
            </CardTitle>
            <FileText className="h-4 w-4 text-sage-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-serif text-sage-900">
              {stats.totalPosts}
            </div>
            <p className="text-xs text-sage-600 mt-1">Published insights</p>
          </CardContent>
        </Card>

        <Card className="border-sage-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-sage-700">
              Anonymous Thoughts
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-sage-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-serif text-sage-900">
              {stats.totalComments}
            </div>
            <p className="text-xs text-sage-600 mt-1">Shared reflections</p>
          </CardContent>
        </Card>

        <Card className="border-sage-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-sage-700">
              Reach Out Messages
            </CardTitle>
            <Mail className="h-4 w-4 text-sage-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-serif text-sage-900">
              {stats.totalMessages}
            </div>
            <p className="text-xs text-sage-600 mt-1">Seeking connection</p>
          </CardContent>
        </Card>

        <Card className="border-sage-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-sage-700">
              Recent Activity
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-sage-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-serif text-sage-900">
              {stats.recentPosts}
            </div>
            <p className="text-xs text-sage-600 mt-1">This week</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-sage-200/50 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-serif text-sage-900">
              Recent Reflections
            </CardTitle>
            <CardDescription className="text-sage-600">
              Your latest published insights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Mock recent posts */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-sage-50/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-sage-100 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sage-900 text-sm truncate">
                    The Art of Letting Go
                  </h4>
                  <p className="text-xs text-sage-600 mt-1">2 days ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-sage-50/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-sage-100 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sage-900 text-sm truncate">
                    Finding Peace in Uncertainty
                  </h4>
                  <p className="text-xs text-sage-600 mt-1">5 days ago</p>
                </div>
              </div>
            </div>
            <Link href="/admin/posts">
              <Button
                variant="ghost"
                className="w-full text-sage-700 hover:text-sage-900 hover:bg-sage-50"
              >
                View All Reflections
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-sage-200/50 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-serif text-sage-900">
              Recent Messages
            </CardTitle>
            <CardDescription className="text-sage-600">
              People reaching out for support
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Mock recent messages */}
            <div className="space-y-3">
              <div className="p-3 rounded-lg hover:bg-sage-50/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sage-900 text-sm">
                    Sarah M.
                  </h4>
                  <span className="text-xs text-sage-600">1 hour ago</span>
                </div>
                <p className="text-xs text-sage-600 line-clamp-2">
                  I've been struggling with anxiety and would love to talk...
                </p>
              </div>
              <div className="p-3 rounded-lg hover:bg-sage-50/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sage-900 text-sm">John D.</h4>
                  <span className="text-xs text-sage-600">3 hours ago</span>
                </div>
                <p className="text-xs text-sage-600 line-clamp-2">
                  Your reflections have been so helpful. I'd like to schedule...
                </p>
              </div>
            </div>
            <Link href="/admin/contacts">
              <Button
                variant="ghost"
                className="w-full text-sage-700 hover:text-sage-900 hover:bg-sage-50"
              >
                View All Messages
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
