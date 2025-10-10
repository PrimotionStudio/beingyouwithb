import { Heart, Compass, Leaf, Circle, Stars } from "lucide-react";

const principles = [
  {
    icon: Leaf,
    title: "Mindful Presence",
    description:
      "Healing happens in the present moment. We slow down, breathe, and honor where you are right now—not where you think you should be.",
  },
  {
    icon: Heart,
    title: "Compassionate Understanding",
    description:
      "You'll find no judgment here. Every emotion is valid, every struggle is real, and your experience is uniquely yours. We work with what is, not what should be.",
  },
  {
    icon: Compass,
    title: "Your Pace, Your Path",
    description:
      "There's no timeline for healing. We move at your rhythm, honor your boundaries, and celebrate small victories along the way.",
  },
  {
    icon: Stars,
    title: "Holistic Wholeness",
    description:
      "Mind, body, and spirit are inseparable. We address not just symptoms, but the interconnected nature of your wellbeing.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            A Different Approach
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Understanding doesn't happen overnight, and that's perfectly okay
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="mb-6">
                <principle.icon className="w-12 h-12 md:w-14 md:h-14 text-primary stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mb-4">
                {principle.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
