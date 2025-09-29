"use client";
import Link from "next/link";
import Image from "next/image";
// import { BentoGrid } from "@/components/ui/bento-grid";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

const projects = [
  {
    title: "Signboards Store",
    description:
      "A store built with Next.js",
    thumbnail: "/ag.png",
    // 1. ADD THE LINK PROPERTY
    link: "https://agproduction.vercel.app/", // Replace with actual URL
  },
  {
    title: "Payment gatway",
    description: "payment gayway using mern stack",
    thumbnail: "/pymt.png",
    // 1. ADD THE LINK PROPERTY
    link: "https://pymt.onrender.com", // Replace with actual URL
  },
 {
    title: "currency converter",
    description: "currency converter web-application using react.js",
    thumbnail: "/cc.png",
    // 1. ADD THE LINK PROPERTY
    link: "https://mult1-currency.vercel.app/", // Replace with actual URL
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-4 max-w-6xl max-w-full "
    >
      {/* background gradient + grid accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 " />
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(circle_at_center,white,transparent)] dark:opacity-40 opacity-60"
        style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <h2 className="text-3xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
        Projects
      </h2>

      {projects?.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              {/* 2. WRAP THE CARD BODY WITH AN ANCHOR TAG */}
              <a 
                href={project.link} 
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="block" // Ensures the link occupies the full area
              >
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.1] border-black/[0.05] rounded-xl p-4 border transition-transform duration-300 hover:scale-[1.02]">
                  
                  <CardItem
                    translateZ="40"
                    className="text-lg font-bold text-neutral-700 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  
                  <CardItem
                    translateZ="60"
                    as="p"
                    className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-lg transition-shadow"
                    />
                  </CardItem>
                </CardBody>
              </a>
            </CardContainer>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 dark:text-gray-400 mt-6 text-center italic">
          No projects found.
        </div>
      )}
    </section>
  );
}