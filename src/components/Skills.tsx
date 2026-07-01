import AnimateIn from "./AnimateIn";

const skills = [
  "Python",
  "Next.js & React",
  "Backend & Database",
  "Machine Learning",
  "AWS Basics",
  "Adaptability",
  "Problem Solving",
  "Communication",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b-4 border-black bg-surface-container-low px-6 py-stack-lg md:px-margin-page"
    >
      <div className="mx-auto max-w-7xl">
        <AnimateIn variant="fade-up">
          <h2 className="mb-stack-lg text-center font-headline-lg text-3xl uppercase md:text-headline-lg">
            Core Skills
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill, i) => (
            <AnimateIn key={skill} variant="pop" delay={i * 70}>
              <div className="neobrutalist-shadow border-4 border-black bg-surface p-4 text-center font-headline-md text-sm sm:text-base">
                {skill}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
