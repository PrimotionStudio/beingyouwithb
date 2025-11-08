"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Facebook, Twitter, Link2, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import { PostType } from "@/lib/zod";
import { toast } from "sonner";
import { calculateReadingTime, sanitizeHtml } from "@/lib/htmlUtils";

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
  const [reflection, setReflection] = useState<PostType>();
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  async function fetchPost(slug: string) {
    try {
      const response = await fetch(`/api/posts?slug=${slug}`);
      const data = await response.json();
      setReflection(data);
    } catch (error) {
      toast.error("Error fetching post");
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (slug) fetchPost(slug);
  }, [slug]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-secondary/30 rounded w-3/4"></div>
              <div className="h-4 bg-secondary/30 rounded w-1/2"></div>
              <div className="h-64 bg-secondary/30 rounded"></div>
              <div className="space-y-4">
                <div className="h-4 bg-secondary/30 rounded"></div>
                <div className="h-4 bg-secondary/30 rounded"></div>
                <div className="h-4 bg-secondary/30 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
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
    if (!reflection || typeof window === "undefined") return;

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
              <time>{new Date(reflection.date).toLocaleDateString()}</time>
              <span>•</span>
              <span>{calculateReadingTime(reflection.content)}</span>
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
            <style
              dangerouslySetInnerHTML={{
                __html: `
              /* Base article content container */
              .article-content {
                font-family: var(--font-serif), Georgia, serif;
                color: #2c2c2c;
                line-height: 1.8;
                font-size: 17px;
              }

              .article-content h1 {
                font-family: var(--font-serif), Georgia, serif;
                font-size: 2.5rem;
                font-weight: 600;
                line-height: 1.2;
                margin-top: 2.5em;
                margin-bottom: 1em;
                color: #1a1a1a;
                letter-spacing: -0.02em;
              }

              .article-content h2 {
                font-family: var(--font-serif), Georgia, serif;
                font-size: 2rem;
                font-weight: 600;
                line-height: 1.3;
                margin-top: 2em;
                margin-bottom: 0.75em;
                color: #1a1a1a;
                letter-spacing: -0.01em;
                border-bottom: 1px solid #e5e5e5;
                padding-bottom: 0.3em;
              }

              .article-content h3 {
                font-family: var(--font-serif), Georgia, serif;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 1.4;
                margin-top: 1.8em;
                margin-bottom: 0.6em;
                color: #2c2c2c;
              }

              .article-content h4 {
                font-family: var(--font-serif), Georgia, serif;
                font-size: 1.25rem;
                font-weight: 600;
                line-height: 1.5;
                margin-top: 1.5em;
                margin-bottom: 0.5em;
                color: #2c2c2c;
              }

              .article-content h5 {
                font-family: var(--font-serif), Georgia, serif;
                font-size: 1.1rem;
                font-weight: 600;
                line-height: 1.5;
                margin-top: 1.3em;
                margin-bottom: 0.4em;
                color: #3c3c3c;
              }

              .article-content h6 {
                font-family: var(--font-serif), Georgia, serif;
                font-size: 1rem;
                font-weight: 600;
                line-height: 1.5;
                margin-top: 1.2em;
                margin-bottom: 0.4em;
                color: #4a4a4a;
                text-transform: uppercase;
                letter-spacing: 0.05em;
              }
              /* Paragraphs */
              .article-content p {
                margin-bottom: 1.5em;
                line-height: 1.8;
              }

              /* Bold text */
              .article-content strong,
              .article-content b {
                font-weight: 700;
                color: #1a1a1a;
              }

              /* Italic text */
              .article-content em,
              .article-content i {
                font-style: italic;
                color: #3c3c3c;
              }

              /* Blockquotes */
              .article-content blockquote {
                font-family: var(--font-serif), Georgia, serif;
                font-size: 1.25rem;
                font-style: italic;
                line-height: 1.6;
                border-left: 4px solid #a7c4a0;
                padding: 1.5rem 2rem;
                margin: 2.5em 0;
                color: #4a4a4a;
                background: linear-gradient(to right, #fdfbf7, transparent);
                border-radius: 0 4px 4px 0;
                position: relative;
              }

              .article-content blockquote::before {
                content: '"';
                font-size: 4rem;
                line-height: 1;
                color: #a7c4a0;
                opacity: 0.3;
                position: absolute;
                top: 0;
                left: 0.5rem;
              }

              /* Links */
              .article-content a {
                color: #a7c4a0;
                text-decoration: underline;
                text-decoration-thickness: 1px;
                text-underline-offset: 2px;
                transition: all 0.2s ease;
              }

              .article-content a:hover {
                color: #8faf89;
                text-decoration-thickness: 2px;
              }

              /* Lists */
              .article-content ul,
              .article-content ol {
                margin: 1.5em 0;
                padding-left: 2rem;
              }

              .article-content ul {
                list-style-type: disc;
              }

              .article-content ol {
                list-style-type: decimal;
              }

              .article-content li {
                margin-bottom: 0.75em;
                line-height: 1.7;
                padding-left: 0.5rem;
              }

              .article-content ul ul,
              .article-content ol ol,
              .article-content ul ol,
              .article-content ol ul {
                margin: 0.5em 0;
              }

              .article-content li > ul,
              .article-content li > ol {
                margin-top: 0.5em;
              }

              /* Nested lists */
              .article-content ul ul {
                list-style-type: circle;
              }

              .article-content ul ul ul {
                list-style-type: square;
              }

              /* Line breaks */
              .article-content br {
                display: block;
                content: "";
                margin-top: 0.5em;
              }

              /* Code (if you add it later) */
              .article-content code {
                font-family: "Courier New", monospace;
                background: #f5f5f5;
                padding: 0.2em 0.4em;
                border-radius: 3px;
                font-size: 0.9em;
              }

              .article-content pre {
                background: #f5f5f5;
                padding: 1.5em;
                border-radius: 8px;
                overflow-x: auto;
                margin: 2em 0;
              }

              .article-content pre code {
                background: none;
                padding: 0;
              }

              /* Horizontal rule */
              .article-content hr {
                border: none;
                border-top: 1px solid #e5e5e5;
                margin: 3em 0;
              }

              /* Responsive adjustments */
              @media (max-width: 768px) {
                .article-content {
                  font-size: 16px;
                }

                .article-content h1 {
                  font-size: 2rem;
                }

                .article-content h2 {
                  font-size: 1.75rem;
                }

                .article-content h3 {
                  font-size: 1.5rem;
                }

                .article-content h4 {
                  font-size: 1.25rem;
                }

                .article-content h5 {
                  font-size: 1.1rem;
                }

                .article-content h6 {
                  font-size: 1rem;
                }

                .article-content blockquote {
                  font-size: 1.1rem;
                  padding: 1rem 1.5rem;
                }
              }
            `,
              }}
            />
            <div
              className="article-content prose prose-lg prose-sage max-w-none font-serif"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(reflection.content),
              }}
            />

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
                  className="text-foreground/80 bg-transparent hover:bg-primary hover:text-muted"
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
                    className="text-foreground/60 hover:bg-primary hover:text-muted"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare("twitter")}
                    className="text-foreground/60 hover:bg-primary hover:text-muted"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare("email")}
                    className="text-foreground/60 hover:bg-primary hover:text-muted"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare("copy")}
                    className="text-foreground/60 hover:bg-primary hover:text-muted"
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
                    className="text-sm text-foreground/50 hover:bg-primary hover:text-muted"
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
