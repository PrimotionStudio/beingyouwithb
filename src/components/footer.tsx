import { Facebook, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Practice Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-light text-foreground">
              BeingYouWithB
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Peace begins the moment you decide to listen to yourself.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com/beingyouwithb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/beingyouwithb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="mailto:hello@beingyouwithb.com"
                className="text-foreground/50 hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#welcome"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#approach"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Approach
              </a>
              <a
                href="#reflections"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Reflections
              </a>
              <a
                href="#contact"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <a
                href="#resources"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Resources
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-foreground/70">
              <a
                href="mailto:hello@beingyouwithb.com"
                className="hover:text-foreground transition-colors"
              >
                hello@beingyouwithb.com
              </a>
              <a
                href="tel:+2348012345678"
                className="hover:text-foreground transition-colors"
              >
                +234 801 234 5678
              </a>
              <p className="mt-2">
                Available weekdays
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Professional */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Professional</h4>
            <div className="flex flex-col gap-2 text-sm text-foreground/70">
              <p>Licensed Mental Health Professional</p>
              <p>Member of Nigerian Association of Clinical Psychologists</p>
            </div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <blockquote className="font-serif text-lg md:text-xl italic text-center text-foreground/80 max-w-3xl mx-auto text-balance">
            "Healing is not linear. Growth is not constant. Peace is not
            perfection. You are exactly where you need to be."
          </blockquote>
        </div>

        {/* Legal */}
        <div className="text-center text-sm text-foreground/60">
          <p>© 2025 BeingYouWithB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
