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
