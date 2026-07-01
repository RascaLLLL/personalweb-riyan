import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Stats from "@/components/Stats";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Experience />
        <Projects />
        <Certificates />
        <Education />
        <Stats />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
