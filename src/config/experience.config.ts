import type { Experience } from "@/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Software Developer",
    employmentType: "Software Developer",
    company: {
      name: "Urban Culture",
      url: "https://urbanculture.me/",
    },
    location: {
      name: "On site",
    },
    start: "May 2023",
    end: "Present",
    description: [
      "Developed world's first sonification device for blockchain transactions",
      "Developed a web faced product for the device",
      "Developed the firmware for the device",
      "Developed a mobile app for configuring the device",
    ],
  },
  {
    title: "React Developer | 6 months Intern",
    employmentType: "6 months Intership",
    company: {
      name: "Urban Culture",
      url: "https://urbanculture.me/",
    },
    location: {
      name: "Remote",
    },
    start: "Feb 2023",
    end: "Apr 2023",
    description: [
      "Developed the landing page of Leapflow",
      "Currently working on the core product of Leapflow",
    ],
  },
  {
    title: "Frontend Developer",
    employmentType: "Frontend Developer",
    company: {
      name: "Stealth Startup",
      url: "#",
    },
    location: { name: "Remote" },
    start: "December, 2023",
    end: "February, 2024",
    description: [
      "Currently adding more features to the web faced product of LunCo",
      "Developed the official website of LunCo",
    ],
  },
];
