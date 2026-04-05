import mkLogo from "@/assets/mk-logo.png";

const Footer = () => (
  <footer className="border-t border-border mt-16">
    <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img
          src={mkLogo}
          alt="MK monogram"
          className="w-6 h-6 object-contain"
        />
        <span className="font-signature text-lg text-foreground">
          Mana Kashuk
        </span>
      </div>

      <p className="font-body text-sm text-muted-foreground">
        © 2026 All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
