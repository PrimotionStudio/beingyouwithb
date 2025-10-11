import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/serene-misty-mountain-morning-peaceful-landscape-s.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 leading-tight text-balance">
          Find Your Balance Within
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
          Mental and Emotional wellbeing knowing that this is a safe haven -
          your feelings are valid, you matter and you are ENOUGH!
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base md:text-lg transition-all hover:scale-105"
          asChild
        >
          <Link href="#contact">Begin Your Journey</Link>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}
