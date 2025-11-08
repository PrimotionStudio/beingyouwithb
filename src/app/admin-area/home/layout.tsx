"use client";
import type React from "react";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import { Home, FileText, MessageSquare, Mail, LogOut } from "lucide-react";
import { useUserStore } from "@/lib/userStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user, loadUserFromCookie, logout } = useUserStore();

  useEffect(() => {
    if (!user) loadUserFromCookie();
  }, [user, loadUserFromCookie]);
  return (
    <div
      className={`${playfair.variable} ${inter.variable} min-h-screen bg-gradient-to-br from-sage-50 via-cream to-sage-50/30`}
    >
      {/* Admin Header */}
      <header className="border-b border-sage-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/admin-area/home"
              className="flex items-center gap-3 group"
            >
              <Image
                src="/beingyouwithb.jpg"
                alt=""
                height={128}
                width={128}
                className="hidden rounded-lg bg-transparent mx-auto w-32"
              />
              <div>
                <h1 className="font-serif text-xl text-sage-900">
                  Admin Sanctuary
                </h1>
                <p className="text-xs text-sage-600">BeingYouWithB</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/admin-area/home"
                className="flex items-center gap-2 text-sage-700 hover:text-sage-900 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm">Dashboard</span>
              </Link>
              <Link
                href="/admin-area/home/posts"
                className="flex items-center gap-2 text-sage-700 hover:text-sage-900 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span className="text-sm">Posts</span>
              </Link>
              <Link
                href="/admin-area/home/comments"
                className="flex items-center gap-2 text-sage-700 hover:text-sage-900 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">Comments</span>
              </Link>
              <Link
                href="/admin-area/home/contacts"
                className="flex items-center gap-2 text-sage-700 hover:text-sage-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Messages</span>
              </Link>
            </nav>

            <button
              className="flex items-center gap-2 text-sage-600 hover:text-sage-900 transition-colors"
              onClick={() => {
                logout();
                router.push("/");
              }}
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm hidden md:inline">Logout</span>
            </button>
          </div>

          {/* Mobile Navigation */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 mb-10">{children}</main>

      <nav className="md:hidden flex items-center justify-around mt-4 pt-4 bg-card border-t border-sage-200/50 bottom-0 fixed w-full">
        <Link
          href="/admin-area/home"
          className="flex flex-col items-center gap-1 text-sage-700 hover:text-sage-900 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="text-xs">Dashboard</span>
        </Link>
        <Link
          href="/admin-area/home/posts"
          className="flex flex-col items-center gap-1 text-sage-700 hover:text-sage-900 transition-colors"
        >
          <FileText className="w-5 h-5" />
          <span className="text-xs">Posts</span>
        </Link>
        <Link
          href="/admin-area/home/comments"
          className="flex flex-col items-center gap-1 text-sage-700 hover:text-sage-900 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs">Comments</span>
        </Link>
        <Link
          href="/admin-area/home/contacts"
          className="flex flex-col items-center gap-1 text-sage-700 hover:text-sage-900 transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span className="text-xs">Messages</span>
        </Link>
      </nav>
    </div>
  );
}
