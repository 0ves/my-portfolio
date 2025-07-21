import { BackgroundGradient } from "@/components/ui/background-gradient";
export default function Skills() {
  return (
    
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        
        {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"].map((skill) => (
          <BackgroundGradient key={skill}>

          <span  className="bg-gray-200 dark:bg-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
            {skill}
          </span>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
}
