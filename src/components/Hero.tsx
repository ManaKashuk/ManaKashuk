import headshot from "@/assets/Mana Headshot.jpg";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[38vh] flex items-center justify-center px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="shrink-0 w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] rounded-sm overflow-hidden border border-border shadow-sm">
          <img
            src={headshot}
            alt="Mana Kashuk — Pharmaceutical Scientist"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="text-center md:text-left max-w-xl">
          <p className="font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
            Scientific Portfolio
          </p>

          <h1 className="font-signature text-6xl sm:text-7xl md:text-8xl text-foreground mb-4">
            Mana Kashuk
          </h1>

          <p className="font-subtitle text-base sm:text-lg text-foreground/85 tracking-[0.05em] mb-2 leading-relaxed">
            Pharmaceutical Scientist | Research Operations | AI Strategist
          </p>

          <div className="w-10 h-0.5 bg-primary mx-auto md:mx-0 mb-5" />

          <p className="font-body text-sm text-muted-foreground max-w-lg leading-relaxed mb-8">
            Building rigorous, compliance-aware, and translationally focused systems across science,
            documentation, and innovation.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href="/Mana_Kashuk_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-secondary text-secondary-foreground font-body text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
            >
              Download CV
            </a>

            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-2.5 border border-primary text-foreground font-body text-sm tracking-wide rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Explore Projects
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-2.5 border border-border text-muted-foreground font-body text-sm tracking-wide rounded-sm hover:border-primary hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
