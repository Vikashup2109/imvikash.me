import { projects } from "#site/content";
import ProjectCard from "@/components/project/project-card";
import { Key } from "react";
import { Image } from "velite";

export default function ProjectSection() {
  const projectsSorted = projects.sort(
    (
      a: { date: string | number | Date },
      b: { date: string | number | Date }
    ) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  );
  return (
    <div className="mt-10 space-y-6">
      {projectsSorted.map(
        (
          project: {
            body: string;
            title: string;
            image: Image;
            description: string;
            slug: string;
            date: string;
            tags: string[];
            links: { url: string; name: string }[];
            imageDark?: Image | undefined;
          } & { slugAsParams: string },
          index: Key | null | undefined
        ) => (
          <ProjectCard key={index} project={project} />
        )
      )}
    </div>
  );
}
