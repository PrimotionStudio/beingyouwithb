import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const reflections = [
  {
    slug: "learning-to-let-go",
    quote:
      "When the mind feels heavy, it's asking for stillness, not strength.",
    content:
      "We spend so much energy trying to control outcomes, manage perceptions, and hold everything together. But sometimes, the most powerful thing we can do is release our grip. Letting go isn't giving up—it's making space for something new to emerge. It's trusting that not everything needs to be figured out right now.\n\nWhen we hold on too tightly, we create tension—in our bodies, our minds, our relationships. We become rigid, afraid of what might happen if we loosen our grasp. But life isn't meant to be controlled; it's meant to be experienced.\n\nLetting go is a practice, not a one-time event. It's choosing, again and again, to trust the process. To believe that you are capable of handling whatever comes next. To know that releasing control doesn't mean losing yourself—it means finding yourself.",
    image: "/peaceful-hands-releasing-flower-petals-into-water.jpg",
  },
  {
    slug: "the-weight-we-carry",
    quote: "Healing happens in seasons, not schedules.",
    content:
      "We all carry invisible burdens—unspoken fears, old wounds, expectations we never asked for. These weights become so familiar that we forget we're carrying them at all. Acknowledging what you carry is the first step toward setting it down. You don't have to carry it alone.\n\nSometimes the heaviest things we carry aren't physical at all. They're the stories we tell ourselves about who we should be, the pain we've never processed, the love we never received. These invisible weights shape how we move through the world.\n\nBut here's what I want you to know: You don't have to carry everything forever. You can set things down. You can ask for help. You can choose to lighten your load, one small release at a time.",
    image: "/person-walking-on-peaceful-forest-path-with-soft-m.jpg",
  },
  {
    slug: "when-words-feel-impossible",
    quote: "Your feelings don't need to make sense to be valid.",
    content:
      "Sometimes we can't name what we're feeling, and that's okay. Not everything needs a label or an explanation. Emotions are complex, layered, and often contradictory. The goal isn't always to understand them perfectly—it's to allow them to exist without judgment.\n\nWe live in a world that demands clarity, explanations, and neat categories. But feelings don't work that way. They're messy. They overlap. They contradict each other. And that's completely normal.\n\nYou don't need to have all the words. You don't need to explain yourself perfectly. Sometimes, it's enough to simply say: 'I'm feeling something, and I'm not sure what it is yet.' That's valid. That's honest. That's enough.",
  },
];

export function Reflections() {
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
                    {reflection.content}
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
