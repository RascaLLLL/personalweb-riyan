const links = [
  {
    name: "GitHub",
    url: "https://github.com/RascaLLLL",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/riyandi-heri-p-311166331/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/riyanhrp_/",
  },
  {
    name: "Email",
    url: "mailto:hpitono24@gmail.com",
  }
];

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-black bg-on-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-gutter px-6 py-stack-lg md:flex-row md:px-margin-page">
        {/* Logo */}
        <div className="font-display text-2xl text-primary-fixed md:text-headline-md">
          HeyRiyan
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="font-label-bold text-label-bold uppercase text-surface-variant transition-colors hover:text-primary-fixed"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="font-body-md text-body-md text-primary-fixed">
          © {new Date().getFullYear()} Riyandi Heri Pitono.
        </div>
      </div>
    </footer>
  );
}