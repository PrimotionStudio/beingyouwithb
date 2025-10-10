const reflections = [
  {
    quote:
      "When the mind feels heavy, it's asking for stillness, not strength.",
    content:
      "We spend so much energy trying to control outcomes, manage perceptions, and hold everything together. But sometimes, the most powerful thing we can do is release our grip. Letting go isn't giving up—it's making space for something new to emerge. It's trusting that not everything needs to be figured out right now.",
  },
  {
    quote: "Healing happens in seasons, not schedules.",
    content:
      "We all carry invisible burdens—unspoken fears, old wounds, expectations we never asked for. These weights become so familiar that we forget we're carrying them at all. Acknowledging what you carry is the first step toward setting it down. You don't have to carry it alone.",
  },
  {
    quote: "Your feelings don't need to make sense to be valid.",
    content:
      "Sometimes we can't name what we're feeling, and that's okay. Not everything needs a label or an explanation. Emotions are complex, layered, and often contradictory. The goal isn't always to understand them perfectly—it's to allow them to exist without judgment.",
  },
];

export function Reflections() {
  return (
    <section id="reflections" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <article
              key={index}
              className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border/50"
            >
              <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground/90 mb-6 leading-relaxed text-balance">
                "{reflection.quote}"
              </blockquote>

              <p className="text-foreground/70 leading-relaxed text-pretty">
                {reflection.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
