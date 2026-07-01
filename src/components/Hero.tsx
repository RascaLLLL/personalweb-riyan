"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-gutter border-b-4 border-black px-6 py-stack-lg mt-12 pb-stack-lg md:grid-cols-2 md:px-margin-page">
      <AnimateIn variant="fade-right" duration={800}>
        <div className="flex flex-col gap-stack-md">
          <h1 className="font-display text-4xl uppercase leading-[1.1] tracking-tight sm:text-5xl md:text-display">
            TURNING IDEAS INTO DIGITAL PRODUCTS
          </h1>
          <p className="max-w-lg font-body-lg text-lg text-on-surface-variant md:text-body-lg">
            Information Technology student specializing in web development, machine learning, and cloud fundamentals. I build responsive applications, develop intelligent systems, and enjoy solving real-world problems through software.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="#contact"
              className="neobrutalist-shadow border-4 border-black bg-primary-container px-8 py-4 font-headline-md text-lg uppercase text-on-background md:text-headline-md"
            >
              Start Project
            </a>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn variant="fade-left" delay={200} duration={800}>
        <div className="neobrutalist-shadow-lg relative flex h-[320px] w-full items-center justify-center overflow-hidden border-4 border-black bg-surface-container-low p-4 md:h-[500px]">
          <div className="relative z-10 h-full w-full overflow-hidden border-4 border-black">
            <Image
              src="/home.png"
              alt="Hero illustration of a product dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
