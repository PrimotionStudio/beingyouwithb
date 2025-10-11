import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const allReflections = [
  {
    slug: "learning-to-let-go",
    quote:
      "When the mind feels heavy, it's asking for stillness, not strength.",

    content:
      "We spend so much energy trying to control outcomes, manage perceptions, and hold everything together. But sometimes, the most powerful thing we can do is release our grip.",
    image: "/peaceful-hands-releasing-flower-petals-into-water.jpg",
    date: "March 15, 2025",
  },
  {
    slug: "the-weight-we-carry",
    quote: "Healing happens in seasons, not schedules.",

    content:
      "We all carry invisible burdens—unspoken fears, old wounds, expectations we never asked for. These weights become so familiar that we forget we're carrying them at all.",
    image: "/person-walking-on-peaceful-forest-path-with-soft-m.jpg",
    date: "March 10, 2025",
  },
  {
    slug: "when-words-feel-impossible",
    quote: "Your feelings don't need to make sense to be valid.",

    content:
      "Sometimes we can't name what we're feeling, and that's okay. Not everything needs a label or an explanation.",
    image: "/gentle-ocean-waves-at-sunset-with-soft-pastel-colo.jpg",
    date: "March 5, 2025",
  },
  {
    slug: "finding-stillness",
    quote: "In the quiet, we remember who we are.",

    content:
      "The world is loud, demanding, and relentless. But within you exists a place of profound quiet—a sanctuary that no external chaos can touch.",
    image: "/serene-meditation-space-with-soft-natural-light.jpg",
    date: "February 28, 2025",
  },
  {
    slug: "permission-to-rest",
    quote: "Rest is not earned. It's required.",

    content:
      "We've been taught that rest must be deserved, that we must push ourselves to exhaustion before we're allowed to pause. This is a lie that keeps us running on empty.",
    image: "/cozy-reading-nook-with-warm-blanket-and-tea.jpg",
    date: "February 20, 2025",
  },
  {
    slug: "the-courage-to-begin",
    quote: "Starting is the hardest part, and also the bravest.",

    content:
      "Taking the first step toward healing requires immense courage. It means acknowledging that something needs to change, and that you're worth the effort.",
    image: "/sunrise-over-calm-lake-with-misty-mountains.jpg",
    date: "February 12, 2025",
  },
];

export default function ReflectionsPage() {
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
            {allReflections.map((reflection, index) => (
              <Link key={index} href={`/reflections/${reflection.slug}`}>
                <article className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 cursor-pointer group h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={reflection.image || "/placeholder.svg"}
                      alt={reflection.slug}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  </div>

                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <p className="text-xs text-foreground/50 mb-3">
                      {reflection.date}
                    </p>

                    <blockquote className="font-serif text-2xl italic text-foreground mb-3 leading-relaxed text-balance">
                      "{reflection.quote}"
                    </blockquote>

                    <p className="text-foreground/70 text-sm leading-relaxed text-pretty flex-1 line-clamp-3">
                      {reflection.content}
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
