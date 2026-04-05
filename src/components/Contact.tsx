import { Mail, Linkedin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-16 px-6 bg-muted/30">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-2">Get in Touch</h2>
      <div className="w-12 h-0.5 bg-primary mx-auto mb-8" />
      <p className="font-body text-sm text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
        I'm actively exploring opportunities in research operations, scientific strategy, compliance-aligned documentation, and innovation-facing roles. Let's connect.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="mailto:mana.kashuk@email.com"
          className="flex items-center gap-2 px-6 py-2.5 bg-secondary text-secondary-foreground font-body text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
        >
          <Mail size={16} />
          mana.kashuk@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/manakashuk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2.5 border border-border text-foreground font-body text-sm tracking-wide rounded-sm hover:border-primary transition-colors"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
