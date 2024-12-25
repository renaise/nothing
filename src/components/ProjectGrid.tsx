import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

interface ProjectGridProps {
  projects?: Project[];
}

const ProjectGrid = ({
  projects = [
    {
      id: "1",
      title: "Digital Experience Platform",
      description:
        "A comprehensive digital platform focusing on user engagement and interactive experiences.",
      imageUrl:
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=830&auto=format&fit=crop",
      tags: ["React", "TypeScript", "UI/UX"],
    },
    {
      id: "2",
      title: "E-Commerce Solution",
      description:
        "Modern e-commerce platform with seamless checkout and inventory management.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop",
      tags: ["E-commerce", "Frontend", "API"],
    },
    {
      id: "3",
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive data visualization.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop",
      tags: ["Dashboard", "Analytics", "Data Viz"],
    },
    {
      id: "4",
      title: "Mobile App Design",
      description:
        "Cross-platform mobile application with focus on user experience.",
      imageUrl:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=870&auto=format&fit=crop",
      tags: ["Mobile", "Design", "UX"],
    },
  ],
}: ProjectGridProps) => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
