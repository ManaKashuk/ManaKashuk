import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    image: "/poster-presentation.jpeg",
    title: "5th Annual GCC Future of Immunology Symposium",
    subtitle: "Computational analysis of natural compounds in disease-modifying drug discovery.",
    year: "2025",
  },
  {
    image: "/aueco-2025.jpeg",
    title: "AUECO Conference",
    subtitle: "Professional engagement in research security and compliance dialogue.",
    year: "2025",
  },
  {
    image: "/tsu-research-week-2025-talk.jpeg",
    title: "TSU Research Week Talk",
    subtitle: "Presented structure-based virtual screening and biological validation research.",
    year: "2025",
  },
  {
    image: "/tsu-research-week-2026.jpeg",
    title: "Research Week 2026",
    subtitle: "Institutional research and innovation engagement at Texas Southern University.",
    year: "2026",
  },
  {
    image: "/acs-spring-2025.jpeg",
    title: "ACS Spring 2025",
    subtitle: "Oral presentation on PARP-1 Inhibitor natural product virtual screening research.",
    year: "2025",
  },
  {
    image: "/rice-enrich-presentation.jpeg",
    title: "Rice ENRICH",
    subtitle: "Innovation-focused presentation in academic entrepreneurship.",
    year: "2025",
  },
];

const PresentationsGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  const closeModal = () => setSelectedIndex(null);

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  return (
    <>
      <section id="presentations" className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-2">
              Selected Presentations &amp; Engagement
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A curated selection of presentations, posters, conferences, and professional engagement
              across research, innovation, and scientific communication.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="text-left border border-border rounded-sm bg-card overflow-hidden hover:border-primary/40 transition-colors group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5">
                  <p className="font-body text-xs uppercase tracking-[0.16em] text-primary mb-2">
                    {item.year}
                  </p>
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-8"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl bg-background border border-border rounded-sm overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-3 z-20 bg-background/90 border border-border rounded-sm p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Close image preview"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-background/90 border border-border rounded-sm p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-background/90 border border-border rounded-sm p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            <div className="grid lg:grid-cols-[1.45fr_0.85fr]">
              <div className="bg-black/5 flex items-center justify-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>

              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <p className="font-body text-xs uppercase tracking-[0.18em] text-primary mb-2">
                  {selectedItem.year}
                </p>

                <h3 className="font-heading text-2xl sm:text-3xl text-foreground mb-3">
                  {selectedItem.title}
                </h3>

                <p className="font-body text-sm text-muted-foreground leading-7 mb-6">
                  {selectedItem.subtitle}
                </p>

                <p className="font-body text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {selectedIndex + 1} / {items.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PresentationsGallery;
