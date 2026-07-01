import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeyRiyan — Frontend Engineer Portfolio",
  description:
    "Creative frontend developer profile. Neobrutalist portfolio showcasing skills, experience, and featured projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-on-background">
        {children}
      </body>
    </html>
  );
}
