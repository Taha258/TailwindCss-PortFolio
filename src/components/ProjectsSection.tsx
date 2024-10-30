"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard"; // Ensure this file exists
import ProjectTag from "./ProjectTag"; // Ensure this file exists
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ATM Machine Project in Typescript",
    description: "A project simulating an ATM machine using TypeScript.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taha258/ATM-Machine-Project.git",
    previewUrl: "https://your-preview-url.com", // Update with the actual preview URL
  },
  {
    id: 2,
    title: "Resume Builder",
    description: "An application to create and manage resumes.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taha258/Hackathon-milestone-3.git",
    previewUrl: "https://hackathon-milestone-3-nu.vercel.app/",
  },
  {
    id: 3,
    title: "Next.js Website",
    description: "A simple website built using Next.js.",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taha258/next.js-first-website.git",
    previewUrl: "https://next-js-first-website.vercel.app/",
  },
  {
    id: 4,
    title: "Student Management System",
    description: "A system for managing student information.",
    image: "/images/projects/10.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Taha258/project06_student_management_system.git",
    previewUrl: "https://your-preview-url.com", // Update with the actual preview URL
  },
  {
    id: 5,
    title: "Next.js Website Create Figma Design",
    description: "A project to create a Figma design for a Next.js website.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "A roadmap for full-stack development.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id} // Use project.id for the key
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
