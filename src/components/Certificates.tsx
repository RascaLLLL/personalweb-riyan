import { Award } from "lucide-react";
import AnimateIn from "./AnimateIn";

const certificates = [
  { title: "Belajar Dasar Cloud dan Gen AI di AWS", issuer: "Dicoding Indonesia × AWS" },
  { title: "Belajar Prinsip Pemrograman SOLID", issuer: "Dicoding Indonesia" },
  { title: "Prompt Engineering untuk Software Developer", issuer: "Dicoding Indonesia" },
  { title: "Managing and Monitoring Amazon Elastic Block Store (EBS)", issuer: "Amazon Web Services" },
  { title: "Certificate of Competence in Computer Network Engineering", issuer: "BNSP" },
];

export default function Certificates() {
  return (
    <section className="mx-auto max-w-7xl border-b-4 border-black px-6 py-stack-lg md:px-margin-page">
      <AnimateIn variant="fade-up">
        <h2 className="mb-stack-lg text-center font-headline-lg text-3xl uppercase md:text-headline-lg">
          Certificates
        </h2>
      </AnimateIn>

      <div className="flex flex-wrap justify-center gap-6">
        {certificates.map((cert, i) => (
          <AnimateIn key={cert.title} variant="pop" delay={i * 120} duration={550}>
            <div className="neobrutalist-shadow w-72 border-4 border-black bg-surface p-6 text-center">
              <Award size={48} className="mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-headline-md text-xl">{cert.title}</h3>
              <p className="mt-2 font-label-bold uppercase">{cert.issuer}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
