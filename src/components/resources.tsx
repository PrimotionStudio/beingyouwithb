import { Phone, Globe, Heart, Wind } from "lucide-react";
import Link from "next/link";
import { Card } from "./ui/card";

const nigeriaResources = [
  {
    name: "Nigeria Mental Health Helpline",
    contact: "0908 103 1237",
    icon: Phone,
  },
  {
    name: "Lifeline Nigeria (Suicide Prevention)",
    contact: "0908 103 1239",
    icon: Phone,
  },
  {
    name: "Mentally Aware Nigeria Initiative (MANI)",
    contact: "0906 755 0505",
    icon: Phone,
  },
];

const globalResources = [
  {
    name: "International Hotlines Directory",
    contact: "findahelpline.com",
    icon: Globe,
    description: "Available worldwide",
  },
  {
    name: "National Suicide Prevention Lifeline (US)",
    contact: "988",
    icon: Phone,
    description: "Available 24/7",
  },
  {
    name: "Samaritans (UK)",
    contact: "116 123",
    icon: Phone,
    description: "Free to call",
  },
];

const groundingTechniques = [
  {
    icon: Wind,
    title: "5-4-3-2-1 Grounding",
    description:
      "Use your senses to anchor to the present: 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
  },
  {
    icon: Heart,
    title: "Box Breathing",
    description:
      "Breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4. Repeat until you feel calmer.",
  },
];

export function Resources() {
  return (
    <section id="resources" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Immediate Support & Resources
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            You're not alone
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Crisis Resources */}
          <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-8 h-8 text-accent" />
              <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                Crisis Support
              </h3>
            </div>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              I care about your safety. If you're in crisis, please reach out to
              these resources immediately. They're available 24/7.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-4">
                {nigeriaResources.map((resource, index) => (
                  <Link
                    key={index}
                    href={
                      resource.icon === Phone
                        ? `tel:${resource.contact.replace(/\s/g, "")}`
                        : `https://${resource.contact}`
                    }
                    target="_blank"
                    className="flex items-center gap-4 bg-background rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <resource.icon className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        {resource.name}
                      </div>
                      <div className="text-foreground/70 text-sm">
                        {resource.contact}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="grid gap-4">
                {globalResources.map((resource, index) => (
                  <Link
                    key={index}
                    href={
                      resource.icon === Phone
                        ? `tel:${resource.contact.replace(/\s/g, "")}`
                        : `https://${resource.contact}`
                    }
                    target="_blank"
                    className="flex items-center gap-4 bg-background rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <resource.icon className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        {resource.name}
                      </div>
                      <div className="text-foreground/70 text-sm">
                        {resource.contact} • {resource.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Grounding Techniques */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif mb-8 text-center text-foreground">
              Try This Now
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {groundingTechniques.map((technique, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <technique.icon className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-serif mb-3 text-foreground">
                    {technique.title}
                  </h4>
                  <p className="text-foreground/70 leading-relaxed">
                    {technique.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
