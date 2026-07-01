import { UserRound } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl border-b-4 border-black px-6 py-stack-lg md:px-margin-page"
    >
      <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-3">
        <AnimateIn variant="fade-right" delay={0}>
          <div className="neobrutalist-shadow border-4 border-black bg-surface-variant p-4 md:col-span-1">
            <div className="flex h-64 w-full items-center justify-center overflow-hidden border-4 border-black bg-secondary-fixed-dim">
              <img src="/Riyan.png" alt="Riyan" className="object-cover object-top" />
            </div>
          </div>
        </AnimateIn>

        <AnimateIn variant="fade-left" delay={150} className="md:col-span-2">
          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-3xl uppercase md:text-headline-lg">
              About Me
            </h2>
            <p className="font-body-lg text-lg text-on-background md:text-body-lg">
              I'm an Information Technology student at Telkom University with hands-on experience in web development, machine learning, databases, and cloud computing. I enjoy transforming ideas into scalable digital products while continuously learning modern technologies. My focus is creating clean user experiences backed by solid engineering practices.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
