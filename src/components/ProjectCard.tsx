import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project goes here. This showcases the main features and goals.",
  imageUrl = "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=830&auto=format&fit=crop",
  tags = ["Design", "Development", "UI/UX"],
}: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-background transition-all duration-300 hover:scale-[1.02] h-[380px] w-[420px]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative h-full w-full">
        {/* Project Image */}
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="font-mono text-xl font-bold text-white mb-2">
            {title}
          </h3>

          <p className="text-sm text-white/90 mb-4 line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
