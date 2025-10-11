import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-background flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('/serene-path-in-misty-forest-symbolizing-being-lost.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
        {/* Peaceful illustration */}
        <h1 className="font-serif text-5xl md:text-9xl text-white/90 animate-breathe">
          404
        </h1>

        {/* Gentle messaging */}
        <div className="space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground/90 animate-breathe">
            You've wandered off the path
          </h1>
        </div>

        {/* Calming quote */}
        <div className="py-6 px-8 bg-secondary/30 rounded-xl border border-border/50 max-w-lg mx-auto">
          <p className="text-muted-foreground italic leading-relaxed">
            "Not all who wander are lost, but if you need direction, we're here
            to help you find your way."
          </p>
        </div>

        {/* Gentle navigation options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button asChild size="lg" className="group">
            <Link href="/">
              <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Return Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group bg-transparent hover:bg-white"
          >
            <Link href="/reflections">
              <Compass className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform group-hover:text-foreground/90" />
              <p className="group-hover:text-foreground/90">
                Explore Reflections
              </p>
            </Link>
          </Button>
        </div>

        {/* Subtle help text */}
        <p className="text-sm text-white/70 pt-8">
          If you believe this page should exist, please{" "}
          <Link
            href="/#contact"
            className="text-primary hover:underline underline-offset-4"
          >
            let us know
          </Link>
        </p>
      </div>
    </div>
  );
}
