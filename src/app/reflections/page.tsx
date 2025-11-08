"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { PostType } from "@/lib/zod";
import { useEffect, useState } from "react";
import { getExcerpt } from "@/lib/htmlUtils";

export default function ReflectionsPage() {
  const [reflections, setReflections] = useState<PostType[]>([]);

  async function fetchPosts() {
    const response = await fetch("/api/posts");
    const data = await response.json();
    setReflections(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto py-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
              Gentle Insights
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
              A collection of reflections on healing, growth, and the quiet
              courage it takes to keep going. Each piece is an invitation to
              pause, breathe, and reconnect with yourself.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
            {reflections.map((reflection, i) => (
              <Link key={i} href={`/reflections/${reflection.slug}`}>
                <article className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 cursor-pointer group h-full flex flex-col">
                  {reflection.image && (
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={reflection.image}
                        alt={reflection.slug}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    </div>
                  )}

                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <p className="text-xs text-foreground/50 mb-3">
                      {new Date(reflection.date).toLocaleDateString()}
                    </p>

                    <blockquote className="font-serif text-2xl italic text-foreground mb-3 leading-relaxed text-balance">
                      "{reflection.quote}"
                    </blockquote>

                    <p className="text-foreground/70 text-sm leading-relaxed text-pretty flex-1 line-clamp-3">
                      {getExcerpt(reflection.content, 150)}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
