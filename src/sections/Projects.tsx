"use client";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

const projects = [
  {
    title: "My Portfolio",
    description: "This site you're on right now! Built with App Router, Tailwind, and TypeScript.",
    thumbnail: "https://via.placeholder.com/640x360?text=My+Portfolio",
  },
  {
    title: "E-commerce Store",
    description: "A full-featured store built with Next.js, Stripe, and Sanity CMS.",
    thumbnail: "https://via.placeholder.com/640x360?text=E-commerce+Store",
  },
  {
    title: "AI Image Generator",
    description: "Generate images from prompts using OpenAI's DALL·E API.",
    thumbnail: "https://via.placeholder.com/640x360?text=AI+Image+Generator",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-4 border">
              <CardItem translateZ="40" className="text-lg font-bold text-neutral-700 dark:text-white">
                {project.title}
              </CardItem>
              <CardItem translateZ="60" as="p" className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
                {project.description}
              </CardItem>
              <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
