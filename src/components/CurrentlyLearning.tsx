import AnimateIn from "./AnimateIn";

const learning = ["Framer Motion", "Docker", "Cloud Computing"];

export default function CurrentlyLearning() {
  return (
    <section className="mx-auto max-w-7xl border-b-4 border-black px-6 py-stack-lg md:px-margin-page">
      <AnimateIn variant="fade-up">
        <h2 className="mb-stack-lg text-center font-headline-lg text-3xl uppercase md:text-headline-lg">
          Tech I'm Exploring
        </h2>
      </AnimateIn>

      <div className="flex flex-wrap justify-center gap-4">
        {learning.map((item, i) => (
          <AnimateIn key={item} variant="fade-right" delay={i * 120} duration={500}>
            <div className="neobrutalist-shadow border-4 border-black bg-surface px-6 py-3 font-headline-md">
              {item}
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
