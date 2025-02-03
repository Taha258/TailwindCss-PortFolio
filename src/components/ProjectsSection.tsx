"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard"; // Ensure this file exists
import ProjectTag from "./ProjectTag"; // Ensure this file exists
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Rent A Car Like Uber",
    description: "A project you can easily Book your Favorite Cars.",
    image: "/images/projects/car.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taha258/Rent-Ecommerce.git",
    previewUrl: "https://rent-ecommerce.vercel.app/", // Update with the actual preview URL
  },
  {
    id: 2,
    title: "Resturent Website",
    description: "Resturent Website Create in Next.js",
    image: "/images/projects/Resturent.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taha258/website-milestone-2-tailwindCss.git",
    previewUrl: "https://next-js-milestone2-css-website.vercel.app/",
  },
  {
    id: 3,
    title: "Furniture Website",
    description: "Furniture website built using Next.js.",
    image: "/images/projects/furniture.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taha258/Furniro-website.git",
    previewUrl: "https://furniro-website-delta.vercel.app/",
  },
  {
    id: 4,
    title: "Books Ecommerce Website",
    description: "You Can Read your favorite book.",
    image: "/images/projects/book.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Taha258/project06_student_management_system.git",
    previewUrl: "https://blog-website-one-liart.vercel.app/", // Update with the actual preview URL
  },
  {
    id: 5,
    title: "Ecommerce Website",
    description: "Ecommerce Website Buy Your Favorite Products.",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taha258/milestone3-ecommerce-website.git",
    previewUrl: "https://milestone3-ecommerce-website-var3.vercel.app/",
  },
  {
    id: 6,
    title: "Resume Builder",
    description: "An application to create and manage resumes.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taha258/Hackathon-milestone-3.git",
    previewUrl: "https://hackathon-milestone-3-nu.vercel.app/",
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
