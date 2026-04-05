const publications = [
  {
    title: "Formulation and Characterization of Lipid-Based Nanoparticle Systems for Targeted Drug Delivery",
    venue: "Journal of Pharmaceutical Sciences, 2022",
  },
  {
    title: "Comparative Analysis of Polymer Excipients in Sustained-Release Oral Dosage Forms",
    venue: "International Journal of Pharmaceutics, 2021",
  },
  {
    title: "AI-Driven Literature Synthesis for Accelerated Pharmaceutical Research Review",
    venue: "Conference Presentation — AAPS PharmSci 360, 2023",
  },
];

const Publications = () => (
  <section id="publications" className="py-16 px-6 bg-muted/30">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-2 text-center">Publications & Presentations</h2>
      <div className="w-12 h-0.5 bg-primary mx-auto mb-14" />
      <div className="space-y-6">
        {publications.map((pub, i) => (
          <div key={i} className="border border-border rounded-sm p-5 bg-card">
            <h3 className="font-heading text-base text-foreground mb-1 leading-snug">{pub.title}</h3>
            <p className="font-body text-xs text-muted-foreground">{pub.venue}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Publications;
