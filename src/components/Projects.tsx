import cliniqLogo from "@/assets/CLINIQ.png";
import bloomzLogo from "@/assets/Bloomz.png";
import riseLogo from "@/assets/RISe.png";
import riceRblpLogo from "@/assets/Rice RBLP.png";
import formdLogo from "@/assets/FORM-D.png";
import bloomzMana from "@/assets/BLOOMZ_MANA.jpg";

const featuredProject = {
  name: "BLOOMZ CORE",
  logo: bloomzLogo,
  image: bloomzMana,
  desc: "A scientific platform concept designed to help under-resourced labs translate spectral data into usable compound intelligence and clearer research outputs.",
  url: "https://bloomz.io/",
  awardTitle: "Recognized through pitch and startup innovation programs",
  awardNote:
    "What began as a bottleneck in my PhD research evolved into a commercialization-oriented platform concept for under-resourced research environments. The project was further shaped through NSF I-Corps Southwest customer-discovery training and supported through the Howard University & PNC National Center for Entrepreneurship student innovation ecosystem.",
  extraRecognition: [
    {
      label: "Prairie View A&M University × Texas Southern University Student Pitch Competition",
      detail:
        "Recognized for BLOOMZ CORE as a research-driven platform concept translating a real lab bottleneck into an innovation opportunity.",
    },
    {
      label: "Nebius AI Discovery Award 2025 — Biotech Semifinalist",
      detail:
        "Bloomz.io was selected as a semifinalist in the Biotech category, placing among the startups advanced from a global pool of 257 applications.",
      link: "https://nebius.com/ai-discovery-award-2025",
    },
  ],
};

const projects = [
  {
    name: "CLINIQ",
    logo: cliniqLogo,
    desc: "A platform for structured trial-integrity and compliance-aware workflow support in high-risk clinical and research environments.",
    url: "https://cliniq-trial.streamlit.app/",
  },
  {
    name: "RISe",
    logo: riseLogo,
    desc: "A compliance-aligned research support interface built around SOPs, FAQs, and structured guidance for research integrity workflows.",
    url: "https://msu-rise-rs.streamlit.app/",
  },
  {
    name: "Rice RBLP",
    logo: riceRblpLogo,
    desc: "A smart assistant tool supporting pre-award and post-award research administration workflows in a biotech innovation environment.",
    url: "https://rice-rblgpt4.streamlit.app/",
  },
  {
    name: "FORM-D",
    logo: formdLogo,
    desc: "A pharmacy education calculator app designed to support suppository base calculations through a structured, training-oriented workflow.",
    url: "https://cophs-calculator.streamlit.app/",
  },
];

const Projects = () => (
  <section id="projects" className="py-10 px-6 bg-muted/30">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-2">
          Selected Projects
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A selection of platforms and workflow tools spanning clinical research support,
          scientific operations, research integrity, translational innovation, educational tool
          building, and commercialization-oriented problem solving.
        </p>
      </div>

      <div className="mb-6 border border-border rounded-sm bg-card overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="bg-muted/20 flex items-center justify-center p-8 lg:p-10">
            <img
              src={featuredProject.image}
              alt={featuredProject.name}
              className="w-full max-w-md h-auto object-contain rounded-sm"
            />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <div className="min-h-[120px] flex items-center mb-6">
              <img
                src={featuredProject.logo}
                alt={featuredProject.name}
                className="w-full max-w-[220px] h-auto object-contain object-left"
              />
            </div>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              {featuredProject.desc}
            </p>

            <div className="border border-primary/20 bg-background rounded-sm p-4 mb-5">
              <p className="font-body text-xs uppercase tracking-[0.16em] text-primary mb-2">
                Recognition
              </p>

              <h3 className="font-heading text-lg text-foreground mb-2">
                {featuredProject.awardTitle}
              </h3>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {featuredProject.awardNote}
              </p>

              <div className="space-y-3">
                {featuredProject.extraRecognition.map((item) => (
                  <div key={item.label} className="border-t border-border pt-3">
                    <p className="font-body text-sm text-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item.detail}
                    </p>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 font-body text-sm text-primary hover:text-foreground transition-colors"
                      >
                        View listing →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <a
              href={featuredProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 font-body text-sm text-primary hover:text-foreground transition-colors"
            >
              Try the app →
            </a>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.name}
            className="border border-border rounded-sm p-7 bg-card hover:border-primary/40 transition-colors flex flex-col"
          >
            <div className="min-h-[72px] flex items-center mb-5">
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-14 w-auto object-contain"
              />
            </div>

            <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
              {p.desc}
            </p>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 font-body text-sm text-primary hover:text-foreground transition-colors"
            >
              Try the app →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
