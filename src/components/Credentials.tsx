const credentials = [
  {
    title: "Research Management Specialist Certificate",
    issuer: "Society of Research Administrators International (SRAI)",
    year: "2025",
    note: "Formal training in research administration and research management practice.",
    file: "/srai-rms-certificate.pdf",
  },
  {
    title: "Principles of Clinical Pharmacology",
    issuer: "NIH Office of Clinical Research Education and Collaboration Outreach",
    year: "2025–2026",
    note: "Advanced training in clinical pharmacology relevant to translational and clinical research.",
    file: "/nih-principles-clinical-pharmacology.pdf",
  },
  {
    title: "Clinical Research Professional Workforce Training Program",
    issuer: "UTHealth Houston",
    year: "2025–2026",
    note: "Structured preparation in clinical research operations, coordination, and workforce competencies.",
    file: "/uthealth-clinical-research-training.pdf",
  },
  {
    title: "NSF I-Corps",
    issuer: "National Science Foundation",
    year: "2025",
    note: "Innovation and customer-discovery training for research translation and venture development.",
    file: "/nsf-i-corps-certificate.pdf",
  },
  {
    title: "Dietary Supplement Labeling Compliance Certificate",
    issuer: "NSF",
    year: "2026",
    note: "In progress — expected completion April 23, 2026.",
    inProgress: true,
  },
  {
    title: "ACS Spring 2025 Annual Meeting",
    issuer: "American Chemical Society",
    year: "2025",
    note: "Scientific presentation experience in medicinal chemistry and computational research.",
    file: "/acs-spring-2025-presentation-certificate.pdf",
  },
];

const Credentials = () => (
  <section id="credentials" className="py-16 px-6 bg-muted/20">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-2">
          Selected Credentials
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Training and certifications that support my work across research, scientific documentation,
          clinical research, and innovation-oriented program development.
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

            {item.inProgress ? (
              <span className="self-start font-body text-xs uppercase tracking-[0.14em] border border-border text-muted-foreground px-4 py-2 rounded-sm bg-muted/40">
                In Progress
              </span>
            ) : (
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start font-body text-xs uppercase tracking-[0.14em] border border-primary text-foreground px-4 py-2 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Credentials;
