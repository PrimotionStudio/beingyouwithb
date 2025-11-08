"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PostType } from "@/lib/zod";
import { getExcerpt } from "@/lib/htmlUtils";

export function Reflections() {
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
    <section id="reflections" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Gentle Insights
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Moments of understanding on the journey toward healing
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
          {reflections.map((reflection, index) => (
            <Link key={index} href={`/reflections/${reflection.slug}`}>
              <article className="bg-background rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300 cursor-pointer group my-12 md:my-16">
                {reflection.image && (
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={reflection.image}
                      alt={reflection.slug}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                )}

                <div className="p-8 md:p-12">
                  <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground/90 mb-6 leading-relaxed text-balance">
                    "{reflection.quote}"
                  </blockquote>

                  <p className="text-foreground/70 leading-relaxed text-pretty line-clamp-3">
                    {getExcerpt(reflection.content, 150)}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link href="/reflections">
            <Button
              variant="ghost"
              size="lg"
              className="group text-foreground/70 hover:text-foreground hover:bg-background/50"
            >
              Explore More Reflections
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
