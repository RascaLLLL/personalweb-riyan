"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import AnimateIn from "./AnimateIn";

const projects = [
  {
    title: "Mount Adventure Roblox",
    stack: "Roblox Studio / Lua",
    tag: "GAME DEV",
    tagBg: "bg-primary-container",
    description:
      "Designed and developed an interactive mountain exploration map in Roblox with custom terrain, gameplay mechanics, and optimized scripting.",
    image: "/rob.png",
  },
  {
    title: "Car Evaluation Classifier",
    stack: "Python / Scikit-Learn / Pandas ",
    tag: "AI / Machine Learning",
    tagBg: "bg-secondary-fixed-dim",
    description:
      "Built a machine learning classification model achieving over 98% accuracy using Decision Tree, SMOTE, hyperparameter tuning, and comprehensive model evaluation.",
    image: "/ML.png",
  },
  {
    title: "Cybersecurity Learning Platform",
    stack: "HTML / CSS / JAVASCRIPT / FIREBASE",
    tag: "Web Application",
    tagBg: "bg-tertiary-container",
    description:
      "Developed an educational web platform for cybersecurity awareness, providing interactive learning materials and workshop resources for students.",
    image: "/cybersec.png",
  },
  {
    title: "IoT Monitoring Dashboard",
    stack: "ESP32 / FIREBASE / CHART.JS",
    tag: "IoT",
    tagBg: "bg-primary-container",
    description:
      "A real-time monitoring dashboard for IoT devices, featuring live sensor data visualization, device status tracking, and responsive web-based analytics.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Chibii Snack Website",
    stack: "REACT / TAILWIND / WHATSAPP API",
    tag: "Web Application",
    tagBg: "bg-secondary-fixed-dim",
    description:
      "Developed a responsive ordering website featuring product catalogs, seamless ordering flow, and WhatsApp integration for local business customers.",
    image: "/Chibi.png",
  },
];

const VISIBLE = 2; // cards visible at once on desktop

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const totalSlides = projects.length - VISIBLE + 1; // 0..3 on desktop

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(totalSlides - 1, c + 1));

  return (
    <section
      id="projects"
      className="border-b-4 border-black bg-surface-container-low px-6 py-stack-lg md:px-margin-page"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <AnimateIn variant="fade-up">
        <div className="mb-stack-lg flex items-center justify-between">
          <h2 className="font-headline-lg text-3xl uppercase md:text-headline-lg">
            Featured Projects
          </h2>

          {/* Nav buttons */}
          <div className="flex items-center gap-3">
            {/* Dot indicators */}
            <div className="hidden items-center gap-1.5 md:flex">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-3 w-3 border-2 border-black transition-all duration-200 ${
                    i === current ? "bg-black w-6" : "bg-transparent"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous project"
              className={`border-4 border-black p-2 transition-all duration-150 
                ${current === 0
                  ? "cursor-not-allowed opacity-30"
                  : "bg-surface hover:bg-primary-container active:translate-x-[2px] active:translate-y-[2px] shadow-[4px_4px_0px_0px_#000] hover:shadow-none"
                }`}
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={next}
              disabled={current === totalSlides - 1}
              aria-label="Next project"
              className={`border-4 border-black p-2 transition-all duration-150 
                ${current === totalSlides - 1
                  ? "cursor-not-allowed opacity-30"
                  : "bg-surface hover:bg-primary-container active:translate-x-[2px] active:translate-y-[2px] shadow-[4px_4px_0px_0px_#000] hover:shadow-none"
                }`}
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
        </AnimateIn>

        {/* Carousel viewport */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${current} * (50% + 12px)))`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="neobrutalist-shadow group flex w-[calc(50%-12px)] flex-none flex-col gap-4 border-4 border-black bg-surface p-4"
                style={{ minWidth: "calc(50% - 12px)" }}
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden border-4 border-black bg-surface-variant">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Tag badge */}
                  <span className={`absolute top-3 left-3 border-2 border-black px-2 py-0.5 font-label-bold text-label-bold uppercase text-on-background ${project.tagBg}`}>
                    {project.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="font-headline-md text-xl md:text-headline-md">
                    {project.title}
                  </h3>
                  <p className="mt-1 mb-2 font-label-bold text-label-bold uppercase text-on-surface-variant">
                    {project.stack}
                  </p>
                  <p className="mb-4 flex-1 font-body-md text-on-background">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="neobrutalist-shadow inline-flex w-fit items-center gap-2 border-4 border-black bg-primary-container px-4 py-2 font-label-bold uppercase"
                  >
                    View Project <ExternalLink size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile dot indicators */}
        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(Math.min(i, totalSlides - 1))}
              aria-label={`Project ${i + 1}`}
              className={`h-3 border-2 border-black transition-all duration-200 ${
                i === current ? "w-6 bg-black" : "w-3 bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
