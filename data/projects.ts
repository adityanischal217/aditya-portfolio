export type Project = {
  title: string;
  category: "Personal" | "Company";
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: "Notes App",
    category: "Personal",
    description: "Minimal offline-first notes app with dark mode and search.",
    tags: ["Kotlin", "Compose", "Realm"],
    links: [{ label: "Play Store", url: "https://play.google.com" }],
  },
  {
    title: "POS System",
    category: "Company",
    description: "Point-of-sale app for restaurants: orders, payments, reports.",
    tags: ["Flutter", "POS", "Bloc"],
    links: [{ label: "View", url: "https://example.com" }],
  },
];