"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "For the first time in years, I don't feel like I'm drowning. This created a space where I could finally be honest about what I was carrying. I'm not \"fixed\"—I'm learning to be present with myself, and that's everything.",
    author: "Sarah M.",
  },
  {
    quote:
      'I came in skeptical and exhausted. What I found was someone who actually listened without trying to rush me to the "next step." Healing is slow, but for the first time, I feel like I\'m moving forward.',
    author: "Anonymous",
  },
  {
    quote:
      "The weight I've been carrying for decades feels lighter. Not gone—but manageable. This helped me understand that healing isn't about becoming someone new; it's about coming home to myself.",
    author: "Michael",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/soft-nature-texture-peaceful-abstract.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            You're Not Alone in This Journey
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Stories of healing
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[300px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
              >
                <div className="text-center px-4 md:px-8">
                  <div className="text-6xl md:text-7xl text-primary/20 mb-4">
                    "
                  </div>
                  <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 text-balance">
                    {testimonial.quote}
                  </blockquote>
                  <cite className="text-sm md:text-base text-foreground/60 not-italic">
                    — {testimonial.author}
                  </cite>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full hover:bg-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-foreground/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="rounded-full hover:bg-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
