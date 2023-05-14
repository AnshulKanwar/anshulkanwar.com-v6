import { IconArrowUpRight } from "@tabler/icons-react";

interface Project {
  name: string;
  url: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    name: "Anya",
    url: "https://github.com/AnshulKanwar/Anya",
    description: "A CLI web server written from scratch",
    technologies: ["C++"],
  },
  {
    name: "Blockchain Demo",
    url: "https://anshulkanwar.github.io/blockchain-demo/",
    description: "A webapp to show the concepts of blockchain",
    technologies: ["React"],
  },
  {
    name: "Trading Bot",
    url: "https://github.com/AnshulKanwar/trading-bot",
    description: "A cryptocurrency Trading Bot built using Rust",
    technologies: ["Rust"],
  },
  {
    name: "Planetary Motion Simulation",
    url: "https://github.com/AnshulKanwar/Planetary-Motion",
    description: "Planetary Motion animation (Newton's Law) made using OpenGL",
    technologies: ["C++", "OpenGL"],
  },
  {
    name: "Track",
    url: "https://github.com/AnshulKanwar/track",
    description: "A blazing fast CLI app to track your diet.",
    technologies: ["Rust"],
  },
  {
    name: "LMS",
    url: "https://github.com/AnshulKanwar/lms",
    description:
      "A modern implementation of a Learning Management System (LMS)",
    technologies: ["Djanog", "React"],
  },
];

const Projects = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      <div className="grid grid-cols-3 gap-12">
        {projects.map(({ name, url, description, technologies }) => (
          <div key={name}>
            <a
              href={url}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex gap-1 items-center">
                <h2 className="text-lg font-semibold">{name}</h2>
                <IconArrowUpRight stroke={1} />
              </span>
            </a>
            <div className="flex gap-2 my-2">
              {technologies.map((technology) => (
                <span key={technology} className="text-xs bg-violet text-night rounded-3xl px-2 py-0.5">{technology}</span>
              ))}
            </div>
            <p className="font-light">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
