import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ecommerceImg from "../images/projects/ecoomerce1.png";
import sortingImg from "../images/projects/sorting1.png";
import QuoteImg from "../images/projects/quote.png";
import noteImg from "../images/projects/note.png";
import converterImg from "../images/projects/converter.png";
import taskImg from "../images/projects/task1.png";
import calculatorImg from "../images/projects/calculator.png";
import ProjectTag from "./ProjectTag";
const projectsData = [
  {
    id: 1,
    title: "",
    description: "E-commerce",
    image: ecommerceImg,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "",
    description: "Sorting Algorithms",
    image: sortingImg,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "",
    description: "Quote Machine",
    image: QuoteImg,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "",
    description: "Drag & Drop Notes",
    image: noteImg,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "",
    description: "Currency Converter",
    image: converterImg,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "",
    description: "Task Manager",
    image: taskImg,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "",
    description: "Calculator",
    image: calculatorImg,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <section id="projects">
      <h2 className="text-white text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "All"}
          name="All"
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Web"}
          name="Web"
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
          name="Mobile"
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
