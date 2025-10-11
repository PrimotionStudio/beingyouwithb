import { Button } from "@/components/ui/button";

const scenarios = [
  "The weight on your chest that won't lift, no matter how much you accomplish",
  "Feeling disconnected from people you love, even when you're in the same room",
  "Waking up tired no matter how much you sleep",
  "The constant replaying of past conversations, searching for what you did wrong",
  "Feeling like you're just going through the motions—numb, not sad",
  "Snapping at people you care about, then feeling guilty afterward",
  "The sense that everyone else has it figured out except you",
  "Avoiding things that used to bring you joy because they feel like too much effort",
];

export function EmotionalTriggers() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-foreground">
            Does This Sound Familiar?
          </h2>
          <p className="text-lg text-muted-foreground">
            You might be here because...
          </p>
        </div>

        <div className="space-y-4 mb-12 mx-auto lg:max-w-1/2 px-5">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-lg text-foreground/80 leading-relaxed">
                {scenario}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6 p-8 bg-secondary/50 rounded-2xl animate-fade-in">
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            If any of these resonate, you don't have to navigate them alone.
            These feelings are your mind's way of asking for support. I'm here
            to listen without judgment and help you find your way back to peace
            and reclaim yourself.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
}
