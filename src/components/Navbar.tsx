import { useState } from "react";
import { Menu, X } from "lucide-react";
import mkLogo from "@/assets/mk-logo.png";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Credentials", id: "credentials" },
  { label: "Publications", id: "publications" },
  { label: "Presentations", id: "presentations" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <img
            src={mkLogo}
            alt="MK monogram"
            className="w-7 h-7 object-contain"
          />
          <span className="font-signature text-xl sm:text-2xl text-foreground">
            Mana Kashuk
          </span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-body text-sm uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}

          <a
            href="/Mana_Kashuk_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 border border-primary text-foreground text-xs uppercase tracking-[0.16em] rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            CV
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-body text-sm uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground text-left transition-colors"
            >
              {item.label}
            </button>
          ))}

          <a
            href="/Mana_Kashuk_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors"
          >
            CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
