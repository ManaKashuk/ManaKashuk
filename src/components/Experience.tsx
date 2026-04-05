import manaLab from "@/assets/mana-lab.png";

const experiences = [
  {
    role: "PhD Candidate — Pharmaceutical Sciences",
    org: "Texas Southern University",
    period: "2024 – Present",
    points: [
      "Conducting translational and computational research in pharmaceutical sciences",
      "Supporting scientific documentation, structured research workflows, and project development",
      "Contributing to manuscripts, presentations, and innovation-facing scientific work",
    ],
  },
  {
    role: "Research Administration & Translational Support",
    org: "Rice University BioTech LaunchPad",
    period: "2025",
    points: [
      "Supported pre-award and post-award research administration workflows in a biotech innovation environment",
      "Contributed to documentation systems, structured support tools, and program-facing research operations",
      "Helped translate research and administrative needs into practical workflow support concepts",
    ],
  },
  {
    role: "Clinical Research & Scientific Documentation Training",
    org: "UTHealth Houston and related training programs",
    period: "2025 – 2026",
    points: [
      "Built training in clinical research operations, protocol awareness, and scientific documentation",
      "Strengthened understanding of compliance-oriented research support and workforce development",
      "Developed practical familiarity with research quality, reporting, and structured coordination",
    ],
  },
  {
    role: "Innovation, Product Concepts & Scientific Tools",
    org: "Independent and collaborative projects",
    period: "2024 – Present",
    points: [
      "Designed AI-enabled concepts for scientific workflows, research support, and structured information tools",
      "Developed project concepts including CLINIQ, BLOOMZ CORE, RISe, and research support interfaces",
      "Focused on practical systems that connect science, operations, and innovation",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-16 px-6 bg-muted/20">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-2">
          Experience &amp; Training
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A cross-functional foundation spanning pharmaceutical sciences, research support,
          scientific documentation, innovation-oriented tool building, and structured workflow development.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.role} className="border-l-2 border-primary/30 pl-6">
              <h3 className="font-heading text-xl text-foreground">{exp.role}</h3>
              <p className="font-body text-sm text-primary mb-1">{exp.org}</p>
              <p className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {exp.period}
              </p>
              <ul className="space-y-2">
                {exp.points.map((pt, i) => (
                  <li
                    key={i}
                    className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2"
                  >
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-md border border-border bg-card">
            <img
              src={manaLab}
              alt="Mana Kashuk working in the laboratory"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="bg-card border border-border rounded-md p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Scientific Practice
            </p>
            <h3 className="font-heading text-2xl text-foreground mb-3">
              Grounded in hands-on research and translational thinking
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-7">
              My background combines scientific training, practical lab experience,
              structured documentation, and innovation-focused thinking. I am especially
              interested in roles that connect research execution, scientific support,
              operational coordination, and translational problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
