import { Ear, MapPin, Calendar, Heart, Handshake } from "lucide-react";

const services = [
  {
    icon: Ear,
    title: "A Listening Space",
    description:
      "Sometimes, we just need someone to listen—without judgment, without fixing. This space is for you to breathe, reflect, and share what's been heavy on your heart. Together, we'll begin where you are.",
  },
  {
    icon: MapPin,
    title: "Gentle Guidance",
    description:
      "If you've been feeling lost, stuck, or uncertain, you don't have to go through it alone. We'll walk through your thoughts at a calm, steady pace, finding meaning and balance along the way.",
  },
  {
    icon: Calendar,
    title: "Continued Support",
    description:
      "Healing isn't a one-time moment—it's a rhythm. Whether you want to talk once, or check in regularly, I'll hold space for your growth at every stage.",
  },
  {
    icon: Handshake,
    title: "In the Hard Moments",
    description:
      "If things feel overwhelming right now, know that you can reach out. You don't have to have the right words—just a willingness to start.",
  },
];

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-foreground">
            How We Can Walk With You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every journey toward healing begins with a single conversation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 rounded-2xl bg-gradient-to-br from-card to-secondary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/30 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary">
                  <service.icon size={36} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center p-8 bg-accent/10 rounded-2xl max-w-5xl mx-auto animate-fade-in">
          <p className="text-xl font-serif text-foreground italic">
            You don't need to know where to start. Just reaching out is enough.
            Let's begin the conversation—together.
          </p>
        </div>
      </div>
    </section>
  );
}
