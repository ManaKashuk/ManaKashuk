import { FlaskConical, FileText, ShieldCheck, Brain } from "lucide-react";

const items = [
  {
    icon: FlaskConical,
    title: "Scientific Research & Translational Support",
    desc: "Experience across pharmaceutical and translational research, with an emphasis on connecting scientific work to practical research goals and outputs.",
  },
  {
    icon: FileText,
    title: "Research Operations & Scientific Documentation",
    desc: "Building organized workflows, SOP-based support tools, and documentation systems that help research teams work clearly and consistently.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Aware Workflow Design",
    desc: "Developing research support processes with attention to institutional expectations, documentation quality, and operational clarity.",
  },
  {
    icon: Brain,
    title: "LLM-Enabled Research Tools",
    desc: "Using AI and large language models to support literature review, structured scientific writing, protocol support, and research-facing knowledge tools.",
  },
];

const WhatIBring = () => (
  <section id="about" className="py-6 px-6 bg-background">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-2">
          What I Bring
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A cross-functional background spanning scientific research, structured documentation,
          compliance-aware support, and innovation-oriented workflow design.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="border border-border rounded-sm p-6 bg-card hover:border-primary/40 transition-colors"
          >
            <item.icon className="text-primary mb-4" size={22} strokeWidth={1.5} />
            <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIBring;
