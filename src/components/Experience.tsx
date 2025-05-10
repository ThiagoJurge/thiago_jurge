import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Dexian",
    position: "Infrastructure Analyst",
    period: "2024 - Current",
  },
  {
    company: "Altarede",
    position: "Network Analyst",
    period: "2020 – 2024",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 border-b border-primary/30">
      <div className="flex items-baseline">
        <span className="text-primary font-mono font-bold">$</span>
        <span className="ml-2 text-foreground font-mono">
          cat experience.md
        </span>
      </div>

      <div className="mt-6 ml-6 font-mono">
        <div className="grid gap-4">
          {experiences.map((exp) => (
            <Card
              key={`${exp.company}-${exp.position}`}
              className="border border-primary/30 p-4 hover:bg-muted/50 transition-colors bg-background/50"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-primary font-medium">
                    <span className="text-foreground">{">"}</span> {exp.company}{" "}
                    – <span className="text-foreground">{exp.position}</span>
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    <span className="text-foreground">~</span> {exp.period}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
