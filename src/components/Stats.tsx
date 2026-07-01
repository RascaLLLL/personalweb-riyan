import AnimateIn from "./AnimateIn";

const stats = [
  { value: "5+", label: "Projects Completed" },
  { value: "5+", label: "Certification" },
  { value: "98%", label: "ML Accuracy" },
];

export default function Stats() {
  return (
    <section className="border-b-4 border-black bg-secondary px-6 py-stack-lg text-on-secondary md:px-margin-page">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-center md:grid-cols-3">
        {stats.map((stat, i) => (
          <AnimateIn key={stat.label} variant="pop" delay={i * 120} duration={600}>
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl text-primary-container md:text-display">
                {stat.value}
              </span>
              <span className="mt-2 font-headline-md uppercase">
                {stat.label}
              </span>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
