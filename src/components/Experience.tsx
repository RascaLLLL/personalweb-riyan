import AnimateIn from "./AnimateIn";

const roles = [
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2024 - Present",
    dotBg: "bg-primary-container",
    bullets: [
      "Developed responsive web applications using React, HTML, CSS, JavaScript, and Tailwind CSS.",
      "Built reusable UI components and implemented responsive layouts for desktop and mobile devices.",
      "Integrated third-party APIs to enhance website functionality and improve user experience.",
    ],
  },
  {
    title: "Roblox Game Developer",
    company: "Self-Employed",
    period: "2025 -Present",
    dotBg: "bg-surface",
    bullets: [
      "Designed and developed interactive 3D game environments using Roblox Studio.",
      "Implemented gameplay mechanics, UI interactions, and game logic using the Lua programming language.",
      "Debugged, optimized, and refactored scripts to improve game stability and performance.",
    ],
  },
    {
    title: "Maintenance Helper",
    company: "Astra Visteon Indonesia",
    period: "2023 - 2024",
    dotBg: "bg-surface",
    bullets: [
      "Assisted in troubleshooting hardware and software issues on company computer systems to support daily operations.",
      "Collected, recorded, and maintained machine performance data for preventive maintenance and operational reporting",
      "Managed inventory records and documentation for machine parts and maintenance activities.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl border-b-4 border-black px-6 py-stack-lg md:px-margin-page"
    >
      <AnimateIn variant="fade-up">
        <h2 className="mb-stack-lg text-center font-headline-lg text-3xl uppercase md:text-headline-lg">
          Experience
        </h2>
      </AnimateIn>

      <div className="ml-2 flex flex-col gap-8 border-l-8 border-black pl-8 md:ml-4">
        {roles.map((role, i) => (
          <AnimateIn key={role.title} variant="fade-left" delay={i * 150} duration={600}>
            <div className="relative">
              <div
                className={`absolute -left-[38px] top-0 h-6 w-6 rounded-full border-4 border-black md:-left-12 ${role.dotBg}`}
              />
              <h3 className="font-headline-md text-xl md:text-headline-md">
                {role.title}
              </h3>
              <p className="mb-2 font-label-bold uppercase text-on-surface-variant">
                {role.company} | {role.period}
              </p>
              <ul className="list-disc space-y-1 pl-5 font-body-md">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
