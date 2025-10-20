"use client";
import { useEffect, useState } from "react";
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
import { SummaryType } from "@/lib/zod";
import Image from "next/image";
// @ts-ignore
import { ago } from "time-ago";

export default function AdminDashboard() {
  const [summary, setSummary] = useState<SummaryType>({
    commentCounts: 0,
    messageCounts: 0,
    postCount: 0,
    recentActivity: 0,
    recentMessages: [],
    recentPosts: [],
  });

  async function fetchSummary() {
    const response = await fetch("/api/summary");
    const data = await response.json();
    setSummary(data);
  }
  useEffect(() => {
    fetchSummary();
  }, []);

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
        <Link href="/admin-area/home/posts/new">
          <Button>
            <Plus className="w-4 h-4" />
            New Reflection
          </Button>
        </Link>
        <Link href="/">
          <Button
            variant="outline"
            className="border-sage-300 text-sage-700 hover:bg-primary bg-transparent"
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
              {summary.postCount}
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
              {summary.commentCounts}
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
              {summary.messageCounts}
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
              {summary.recentActivity}
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
            <div className="space-y-3">
              {summary.recentPosts.map((post) => (
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-sage-50/50 transition-colors">
                  {post.image && (
                    <Image
                      className="w-12 h-12 rounded-lg bg-sage-100 flex-shrink-0"
                      src={post.image}
                      height={48}
                      width={48}
                      alt={post.title}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sage-900 text-sm truncate">
                      {post.title}
                    </h4>
                    <p className="text-xs text-sage-600 mt-1">
                      {ago(post.date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/admin-area/home/posts">
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
              {summary.recentMessages.map((message) => (
                <div className="p-3 rounded-lg hover:bg-sage-50/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sage-900 text-sm">
                      {message.name}
                    </h4>
                    <span className="text-xs text-sage-600">
                      {ago(message.date)}
                    </span>
                  </div>
                  <p className="text-xs text-sage-600 line-clamp-2">
                    {message.details}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/admin-area/home/contacts">
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
