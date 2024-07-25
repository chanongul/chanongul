"use client";

import { useEffect, useState } from "react";
import Header from "@/app/projects/catalog/header";
import Card from "@/app/projects/catalog/card";

export default function ProjectsPageCatalog({
  projects,
}: ProjectsPageCatalogProps) {
  const [filter, setFilter] = useState<null | "Development" | "Design">(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (filter === null) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.types.includes(filter)),
      );
    }
  }, [filter, projects]);

  return (
    <section className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
      <Header f={[filter, setFilter]} />

      <div className="grid size-full grid-cols-6 gap-x-6 gap-y-8 lg:gap-y-12">
        {filteredProjects.map((project) => (
          <Card key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}
