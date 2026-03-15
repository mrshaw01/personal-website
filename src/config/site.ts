export type Project = {
  name: string;
  summary: string;
  url: string;
  repo?: string;
  tags: string[];
  featured?: boolean;
};

type SiteConfig = {
  // Update this to your final production URL after creating the Cloudflare Pages site.
  siteUrl: string;
  // Your name as it should appear across the site.
  name: string;
  // Your primary professional title or role.
  title: string;
  // A short homepage-friendly bio.
  shortBio: string;
  // A longer about page bio.
  longBio: string;
  // Replace this placeholder with the email you want visitors to use.
  email: string;
  // Your public GitHub profile.
  github: string;
  // Replace with your final LinkedIn profile URL.
  linkedin: string;
  // Replace with your final X/Twitter profile URL.
  twitter: string;
  // Keep projects here so cards stay data-driven and easy to update.
  projects: Project[];
};

export const siteConfig: SiteConfig = {
  siteUrl: "https://shaw.pages.dev",
  name: "Shaw Nguyen",
  title: "Software Engineer",
  shortBio:
    "I build focused, reliable web products with an eye for maintainability, calm UX, and practical engineering.",
  longBio:
    "I am a software engineer who enjoys turning ambiguous ideas into clean, dependable digital products. My work tends to favor thoughtful architecture, strong fundamentals, and simple systems that age well. This site is designed as a lightweight, static-first portfolio that is easy to update over time, whether the next edit comes from me or from a future AI agent helping keep things current.",
  email: "hello@your-domain.com",
  github: "https://github.com/mrshaw01",
  linkedin: "https://www.linkedin.com/in/your-linkedin-handle",
  twitter: "https://x.com/your-handle",
  projects: [
    {
      name: "personal-website",
      summary:
        "A modern Astro portfolio built for Cloudflare Pages with reusable components, dark mode, and centralized content.",
      url: "https://shaw.pages.dev",
      repo: "https://github.com/mrshaw01/personal-website",
      tags: ["Astro", "Cloudflare Pages", "Static Site"],
      featured: true,
    },
    {
      name: "Project Placeholder One",
      summary:
        "Replace this card with a real project once you have a description, live URL, and a few technologies to highlight.",
      url: "https://example.com/project-one",
      repo: "https://github.com/mrshaw01",
      tags: ["Placeholder", "Frontend", "Portfolio"],
      featured: true,
    },
    {
      name: "Project Placeholder Two",
      summary:
        "Use this slot for a product, internal tool, or freelance build that shows how you think and what you ship.",
      url: "https://example.com/project-two",
      repo: "https://github.com/mrshaw01",
      tags: ["Placeholder", "Product", "Engineering"],
      featured: true,
    },
    {
      name: "Project Placeholder Three",
      summary:
        "Another flexible card for an experiment, automation workflow, or open-source contribution worth featuring later.",
      url: "https://example.com/project-three",
      repo: "https://github.com/mrshaw01",
      tags: ["Placeholder", "Automation", "OSS"],
    },
  ],
};

export const socialLinks = [
  { label: "GitHub", href: siteConfig.github },
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "X", href: siteConfig.twitter },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];
