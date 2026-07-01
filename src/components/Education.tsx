import AnimateIn from "./AnimateIn";

export default function Education() {
  return (
    <section className="border-b-4 border-black bg-surface-container-low px-6 py-stack-lg md:px-margin-page">
      <div className="mx-auto max-w-7xl">
        <AnimateIn variant="fade-up">
          <h2 className="mb-stack-lg text-center font-headline-lg text-3xl uppercase md:text-headline-lg">
            Education
          </h2>
        </AnimateIn>

        <AnimateIn variant="fade-up" delay={100} duration={700}>
          <div className="neobrutalist-shadow mx-auto max-w-3xl border-4 border-black bg-surface p-8">
            <div className="mb-4 flex flex-col items-start justify-between gap-2 border-b-4 border-black pb-4 md:flex-row">
              <div>
                <h3 className="font-headline-md text-2xl">
                  Bachelor of Information Technology
                </h3>
                <p className="font-label-bold uppercase text-on-surface-variant">
                  Telkom University
                </p>
              </div>
              <div className="border-4 border-black bg-primary-container px-3 py-1 font-headline-md">
                2024 - Present
              </div>
            </div>
            <p className="font-body-md">
              Focused on Web Development, Machine Learning, Database Systems, and Cloud Computing. Continuously building projects and expanding practical software engineering skills.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
