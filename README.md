# DevCreative — Personal Profile Website

A neobrutalist personal/portfolio website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, based on a Google Stitch design.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx      # Root layout, fonts, metadata
    page.tsx         # Composes all sections
    globals.css       # Tailwind v4 theme tokens (colors, fonts, spacing)
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    TechStack.tsx
    Experience.tsx
    Projects.tsx
    Certificates.tsx
    Education.tsx
    Stats.tsx
    CurrentlyLearning.tsx
    Contact.tsx
    Footer.tsx
```

## Customizing content

All copy (name, bio, skills, experience, projects, etc.) lives directly inside each component in `src/components/`. Edit the arrays/text at the top of each file to update content — no need to touch the layout markup.

## Notes

- Colors, spacing, and font sizes are defined as Tailwind v4 `@theme` tokens in `src/app/globals.css`, matching the original Stitch design tokens (e.g. `bg-primary-container`, `text-headline-lg`, `py-stack-lg`).
- The neobrutalist hard-shadow + hover effect is defined via the `.neobrutalist-shadow` / `.neobrutalist-shadow-lg` utility classes in `globals.css`.
- The contact form currently just shows a success message on submit — wire `handleSubmit` in `src/components/Contact.tsx` up to your email service or API route of choice (e.g. Resend, Formspree, or a custom Next.js API route).
- Icons use [lucide-react](https://lucide.dev) instead of the Material Symbols font used in the original Stitch export.
