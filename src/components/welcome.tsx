export function Welcome() {
  return (
    <section id="welcome" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-[inset_0_20px_20px_rgba(255,255,255,0.3)]">
              <img
                src="/beingyouwithb2.png"
                alt="Professional portrait"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6 mt-8">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
              A Space for Healing
            </h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I believe healing begins with listening. For years, I've sat
                with people in their most vulnerable moments, and I've learned
                that peace isn't found—it's remembered. My work is to help you
                find your way back to yourself.
              </p>

              <p>
                This isn't about fixing you—because you're not broken. It's
                about creating space for understanding, processing, and gentle
                transformation at your own pace.
              </p>

              <p>
                Whether you're carrying something heavy or simply feeling
                disconnected, I'm here to walk alongside you. No judgment. No
                rush. Just presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
