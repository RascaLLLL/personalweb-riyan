import AnimateIn from "./AnimateIn";

const stack = [
  { label: "React", short: "Re", bg: "bg-surface" },
  { label: "Tailwind", short: "Tw", bg: "bg-primary-container" },
  { label: "TypeScript", short: "Ts", bg: "bg-surface" },
  { label: "Next.js", short: "Nx", bg: "bg-surface" },
  { label: "Node.js", short: "Nd", bg: "bg-secondary-fixed-dim" },
  { label: "Figma", short: "Fi", bg: "bg-surface" },
];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-7xl border-b-4 border-black px-6 py-stack-lg md:px-margin-page">
      <AnimateIn variant="fade-up">
        <h2 className="mb-stack-lg text-center font-headline-lg text-3xl uppercase md:text-headline-lg">
          Tech Stack
        </h2>
      </AnimateIn>

      <div className="flex flex-wrap justify-center gap-6">
        {stack.map((item, i) => (
          <AnimateIn key={item.label} variant="pop" delay={i * 80} duration={500}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={`neobrutalist-shadow flex h-20 w-20 items-center justify-center border-4 border-black text-4xl font-bold ${item.bg}`}
              >
                {item.short}
              </div>
              <span className="font-label-bold text-label-bold uppercase">
                {item.label}
              </span>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
