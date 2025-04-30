import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Dexian",
    position: "Infrastructure Analyst",
    period: "2024 - 2025 – Atual",
    description:
      "Gerenciamento de infraestrutura em ambientes de alta performance / High performance infrastructure management",
    stack: ["Python", "Docker", "Grafana"],
  },
  {
    company: "Altarede",
    position: "Network Analyst",
    period: "2020 – 2024",
    description:
      "Co-criação do sistema AdminENG para automação e monitoramento / Co-creation of AdminENG system for automation and monitoring",
    stack: ["Flask", "ReactJS", "PRTG", "Python"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 border-b border-primary/30">
      <div className="flex items-baseline">
        <span className="text-primary font-bold">$</span>
        <span className="ml-2 text-foreground">ls experience/</span>
      </div>

      <div className="mt-6 ml-6">
        <div className="grid gap-4 sm:grid-cols-1">
          {experiences.map((exp) => (
            <Card
              key={`${exp.company}-${exp.position}`}
              className="border border-primary/30 p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-primary font-medium">
                    {exp.company} – {exp.position}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    <span className="text-foreground">#</span> {exp.period}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mt-4">
                {exp.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-medium px-2.5 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
