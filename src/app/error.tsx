"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Home, Heart } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("[v0] Error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
        {/* Peaceful illustration */}
        <div className="relative w-full aspect-[4/3] max-w-md mx-auto mb-8">
          <img
            src="/calm-ripples-on-water-surface-symbolizing-disruption.jpg"
            alt="Calm water with gentle ripples"
            className="w-full h-full object-cover rounded-2xl opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
        </div>

        {/* Gentle messaging */}
        <div className="space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground/90 animate-breathe">
            A moment of turbulence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Even in peaceful spaces, unexpected ripples can occur. Take a
            breath—we'll help you find your calm again.
          </p>
        </div>

        {/* Calming quote */}
        <div className="py-6 px-8 bg-secondary/30 rounded-xl border border-border/50 max-w-lg mx-auto">
          <p className="text-muted-foreground italic leading-relaxed">
            "In the midst of movement and chaos, keep stillness inside of you."
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            — Deepak Chopra
          </p>
        </div>

        {/* Gentle action options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button onClick={reset} size="lg" className="group">
            <RefreshCw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group bg-transparent"
          >
            <a href="/">
              <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Return Home
            </a>
          </Button>
        </div>

        {/* Supportive message */}
        <div className="pt-8 space-y-3">
          <div className="flex items-center justify-center gap-2 text-muted-foreground/70">
            <Heart className="h-4 w-4 text-accent" />
            <p className="text-sm">You're not alone in this moment</p>
          </div>
          <p className="text-sm text-muted-foreground/70">
            If this continues, please{" "}
            <a
              href="/#contact"
              className="text-primary hover:underline underline-offset-4"
            >
              reach out to us
            </a>
            —we're here to help
          </p>
        </div>
      </div>
    </div>
  );
}
