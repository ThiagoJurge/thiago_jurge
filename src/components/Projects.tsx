import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "AdminENG",
    description: "Internal tool for network automation",
    technologies: ["Flask", "React", "PRTG API", "Docker"],
    link: "#",
  },
  {
    name: "KeepAlive",
    description: "Tool for application monitoring.",
    technologies: ["Flask", "NextJS", "Celery", "PostgreSQL", "Docker"],
    link: "https://github.com/ThiagoJurge/keepalive",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 border-b border-primary/30">
      <div className="flex items-baseline">
        <span className="text-primary font-bold">$</span>
        <span className="ml-2 text-foreground">ls projects/</span>
      </div>

      <div className="mt-6 ml-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="border border-primary/30 p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-primary font-medium">{project.name}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs font-medium px-2.5 py-0.5"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {project.link != "#" && (
              <a
                href={project.link}
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                [View project]
              </a>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
