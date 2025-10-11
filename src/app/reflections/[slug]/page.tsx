"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Facebook, Twitter, Link2, Mail } from "lucide-react";
import { useState } from "react";
import { notFound, useParams } from "next/navigation";

const reflectionsData: Record<string, any> = {
  "learning-to-let-go": {
    slug: "learning-to-let-go",
    quote:
      "When the mind feels heavy, it's asking for stillness, not strength.",
    title: "On Learning to Let Go",
    content:
      "We spend so much energy trying to control outcomes, manage perceptions, and hold everything together. But sometimes, the most powerful thing we can do is release our grip. Letting go isn't giving up—it's making space for something new to emerge. It's trusting that not everything needs to be figured out right now.\n\nWhen we hold on too tightly, we create tension—in our bodies, our minds, our relationships. We become rigid, afraid of what might happen if we loosen our grasp. But life isn't meant to be controlled; it's meant to be experienced.\n\nLetting go is a practice, not a one-time event. It's choosing, again and again, to trust the process. To believe that you are capable of handling whatever comes next. To know that releasing control doesn't mean losing yourself—it means finding yourself.\n\nIt takes courage to let go. It takes trust. It takes faith in your own resilience. But on the other side of that release is freedom—the kind that allows you to breathe deeply, move freely, and live authentically.\n\nIf you're holding on to something that no longer serves you, know this: You have permission to let it go. You have permission to choose peace over perfection. You have permission to trust that you'll be okay.",
    date: "March 15, 2025",
    readTime: "4 min read",
  },
  "the-weight-we-carry": {
    slug: "the-weight-we-carry",
    quote: "Healing happens in seasons, not schedules.",
    title: "The Weight We Carry",
    content:
      "We all carry invisible burdens—unspoken fears, old wounds, expectations we never asked for. These weights become so familiar that we forget we're carrying them at all. Acknowledging what you carry is the first step toward setting it down. You don't have to carry it alone.\n\nSometimes the heaviest things we carry aren't physical at all. They're the stories we tell ourselves about who we should be, the pain we've never processed, the love we never received. These invisible weights shape how we move through the world.\n\nBut here's what I want you to know: You don't have to carry everything forever. You can set things down. You can ask for help. You can choose to lighten your load, one small release at a time.\n\nHealing isn't about becoming someone new. It's about releasing what was never yours to carry in the first place. It's about remembering who you were before the world told you who to be.\n\nIf you're feeling the weight today, I see you. And I want you to know: reaching out for support isn't weakness—it's wisdom. It's recognizing that we were never meant to walk this path alone.",
    image: "/person-walking-on-peaceful-forest-path-with-soft-m.jpg",
    date: "March 10, 2025",
    readTime: "4 min read",
  },
  "when-words-feel-impossible": {
    slug: "when-words-feel-impossible",
    quote: "Your feelings don't need to make sense to be valid.",
    title: "When Words Feel Impossible",
    content:
      "Sometimes we can't name what we're feeling, and that's okay. Not everything needs a label or an explanation. Emotions are complex, layered, and often contradictory. The goal isn't always to understand them perfectly—it's to allow them to exist without judgment.\n\nWe live in a world that demands clarity, explanations, and neat categories. But feelings don't work that way. They're messy. They overlap. They contradict each other. And that's completely normal.\n\nYou don't need to have all the words. You don't need to explain yourself perfectly. Sometimes, it's enough to simply say: 'I'm feeling something, and I'm not sure what it is yet.' That's valid. That's honest. That's enough.\n\nIn therapy, we create space for the wordless. For the feelings that exist beyond language. For the experiences that can't be neatly packaged into sentences. Because healing doesn't require perfect articulation—it requires presence.\n\nIf you're struggling to find the words, know that you're not alone. And know that there's a space here where you don't have to explain yourself. Where you can simply be, exactly as you are.",
    image: "/gentle-ocean-waves-at-sunset-with-soft-pastel-colo.jpg",
    date: "March 5, 2025",
    readTime: "3 min read",
  },
};

export default function ReflectionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const reflection = reflectionsData[slug];

  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!reflection) {
    return notFound();
  }

  const handleSubmitComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleShare = async (platform: string) => {
    if (typeof window === "undefined") return;

    const url = window.location.href;
    const text = `${reflection.title} - ${reflection.quote}`;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?text=${encodeURIComponent(text)}&u=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "email":
        window.location.href = `mailto:?subject=${encodeURIComponent(reflection.title)}&body=${encodeURIComponent(text + "\n\n" + url)}`;
        break;
      case "copy":
        await window.navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Article Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-4 text-sm text-foreground/50 mb-6">
              <time>{reflection.date}</time>
              <span>•</span>
              <span>{reflection.readTime}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
              {reflection.title}
            </h1>

            <blockquote className="font-serif text-xl md:text-2xl italic text-foreground/80 leading-relaxed text-balance border-l-2 border-primary/30 pl-6">
              "{reflection.quote}"
            </blockquote>
          </div>

          {/* Featured Image */}
          {reflection?.image && (
            <div className="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={reflection.image}
                  alt={reflection.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {reflection.content
                .split("\n\n")
                .map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-foreground/80 leading-relaxed mb-6 text-pretty"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>

            {/* Subtle CTA */}
            <div className="mt-16 p-8 md:p-12 bg-secondary/30 rounded-2xl border border-border/50">
              <p className="font-serif text-xl md:text-2xl text-foreground/90 mb-4 text-balance">
                If this reflection resonated with you...
              </p>
              <p className="text-foreground/70 leading-relaxed mb-6 text-pretty">
                Sometimes reading about healing is the first step. If you're
                ready to explore what comes next, I'm here to walk alongside
                you. No pressure, no expectations—just a safe space to be
                yourself.
              </p>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-foreground/80 hover:text-foreground bg-transparent"
                >
                  Let's Talk
                </Button>
              </Link>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-foreground/60">
                  Share this reflection
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare("facebook")}
                    className="text-foreground/60 hover:text-foreground"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare("twitter")}
                    className="text-foreground/60 hover:text-foreground"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare("email")}
                    className="text-foreground/60 hover:text-foreground"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare("copy")}
                    className="text-foreground/60 hover:text-foreground"
                  >
                    {copied ? "Copied!" : <Link2 className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>

            {/* Subtle Comments Section */}
            <div className="mt-16">
              {!showComments ? (
                <div className="text-center">
                  <Button
                    variant="ghost"
                    onClick={() => setShowComments(true)}
                    className="text-sm text-foreground/50 hover:text-foreground/70"
                  >
                    Leave a reflection
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/60 text-center">
                      Your thoughts are welcome here. All reflections are shared
                      anonymously.
                    </p>
                    <Textarea
                      placeholder="Share what this brought up for you..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="min-h-[120px] resize-none bg-background border-border/50 focus:border-primary/30"
                    />
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowComments(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSubmitComment}
                        disabled={!comment.trim()}
                        className="text-foreground/80 bg-transparent"
                      >
                        Share Anonymously
                      </Button>
                    </div>
                  </div>

                  {/* Display Comments */}
                  {comments.length > 0 && (
                    <div className="mt-12 space-y-6">
                      <p className="text-sm text-foreground/50 text-center">
                        Anonymous Reflections
                      </p>
                      {comments.map((c, index) => (
                        <div
                          key={index}
                          className="p-6 bg-secondary/20 rounded-xl border border-border/30"
                        >
                          <p className="text-foreground/70 leading-relaxed text-pretty">
                            {c}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
