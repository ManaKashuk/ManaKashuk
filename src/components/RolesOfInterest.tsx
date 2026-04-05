const roles = [
  "Scientific Project Coordinator",
  "Research Operations Associate",
  "Scientific Documentation Specialist",
  "Research Development or Program Support",
  "Innovation Program Associate",
  "Research Compliance Support",
];

const RolesOfInterest = () => (
  <section id="roles" className="py-16 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-2 text-center">
        Roles I Am Best Suited For
      </h2>
      <div className="w-12 h-0.5 bg-primary mx-auto mb-14" />
      <div className="flex flex-wrap justify-center gap-3">
        {roles.map((role) => (
          <span
            key={role}
            className="font-body text-sm text-foreground border border-border rounded-sm px-5 py-2.5 bg-card hover:border-primary/40 transition-colors"
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default RolesOfInterest;
