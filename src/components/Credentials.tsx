const credentials = [
  {
    title: "Research Management Specialist Certificate",
    issuer: "Society of Research Administrators International (SRAI)",
    year: "2025",
    note: "Formal training in research administration and research management practice. 39 CEs earned.",
    file: "/srai-research-management-specialist-39ces.pdf",
  },
  {
    title: "Clinical Research Professional Workforce Training Program",
    issuer: "UTHealth Houston",
    year: "2025–2026",
    note: "Structured preparation in clinical research operations, coordination, and workforce competencies. Includes 24 SOCRA contact hours.",
    file: "/uthealth-clinical-research-workforce-training-24socra.pdf",
  },
  {
    title: "Orientation for Clinical Research Staff",
    issuer: "UTHealth Houston",
    year: "2025",
    note: "Foundational training in clinical research staff orientation and institutional research support expectations.",
    file: "/uthealth-orientation-clinical-research-staff.pdf",
  },
  {
    title: "Principles of Clinical Pharmacology",
    issuer: "National Institutes of Health",
    year: "2025–2026",
    note: "Advanced training in clinical pharmacology relevant to translational and clinical research.",
    file: "/nih-principles-clinical-pharmacology.pdf",
  },
  {
    title: "Ethical and Regulatory Aspects of Clinical Research",
    issuer: "National Institutes of Health",
    year: "2026",
    note: "Training in ethics, regulatory principles, and responsible conduct in clinical research environments.",
    file: "/nih-ethical-regulatory-clinical-research.pdf",
  },
  {
    title: "Dietary Supplement Labeling Compliance",
    issuer: "NSF",
    year: "2026",
    note: "Training focused on dietary supplement labeling requirements and compliance considerations in product-facing environments.",
    file: "/nsf-dietary-supplement-labeling-compliance.pdf",
  },
  {
    title: "Responsible and Trustworthy AI in Healthcare Course",
    issuer: "GET PHIT / Public Health Informatics & Technology Workforce Development Program",
    year: "2026",
    note: "Five-hour professional development course focused on responsible and trustworthy AI use in healthcare contexts.",
    file: "/get-phit-responsible-trustworthy-ai-healthcare.pdf",
  },
];

const Credentials = () => (
  <section id="credentials" className="py-10 px-6 bg-muted/20">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-2">
          Selected Credentials
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Training and certifications that support my work across research, scientific documentation,
          clinical research, commercialization support, and regulated product-facing environments.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {credentials.map((item) => (
          <div
            key={item.title}
            className="border border-border rounded-sm bg-card p-6 hover:border-primary/40 transition-colors flex flex-col"
          >
            <p className="font-body text-xs uppercase tracking-[0.18em] text-primary mb-2">
              {item.year}
            </p>

            <h3 className="font-heading text-xl text-foreground mb-2">
              {item.title}
            </h3>

            <p className="font-body text-sm text-foreground mb-3">
              {item.issuer}
            </p>

            <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
              {item.note}
            </p>

            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start font-body text-xs uppercase tracking-[0.14em] border border-primary text-foreground px-4 py-2 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Credentials;
