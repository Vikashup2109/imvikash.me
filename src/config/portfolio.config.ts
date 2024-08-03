import type { Portfolio } from "@/types";

export const portfolioConfig: Portfolio = {
  name: "Vikash Upadhyay",
  tagline: "I whisper code 🗣️ into existence 🌟",
  bio: "Hey 👋 Vikash here! I am a fullstack software developer. I build web applications, mobile applications, backend servers, and desktop apps.",
  resume:
    "https://drive.google.com/file/d/1eOBlSUKBX80MC9kCswgcUi3cBstyQy0y/view?usp=sharing",
  links: {
    github: "https://github.com/vikashup2109",
    // twitter: "https://x.com/rds_agi",
    mail: "mailto:vikash.up2109@gmail.com",
    // discord: "https://discordapp.com/users/841126921886498817",
    linkedin: "https://linkedin.com/in/vikashup2109",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TailwindCSS", "Framer motion", "GSAP"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "RestAPI", "FastAPI"],
    },
    { category: "Mobile", items: ["React Native", "Expo"] },
    {
      category: "Tools  ",
      items: [
        "Material UI",
        "MongoDB",
        "Google Cloud Platform (GCP)",
        "Docker",
        "Git",
        "Firebase",
        "Sanity",
        "Zustand",
      ],
    },
  ],
};
