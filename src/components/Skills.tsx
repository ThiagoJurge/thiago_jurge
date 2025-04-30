import { TechBadge } from "./TechBadge";

const skills = [
  {
    category: "Backend",
    items: ["Python", "Flask", "REST API"],
  },
  {
    category: "Frontend (basic)",
    items: ["ReactJS", "NextJS"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Git", "GitHub", "Linux"],
  },
  {
    category: "Monitoring",
    items: ["PRTG", "Grafana", "Zabbix"],
  },
  {
    category: "Networking",
    items: ["TCP/IP", "BGP", "DNS", "Routing and Switching"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 border-b border-primary/30">
      <div className="flex items-baseline">
        <span className="text-primary font-bold">$</span>
        <span className="ml-2 text-foreground">skills --list</span>
      </div>

      <div className="mt-6 ml-6">
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="border border-primary/30 p-4"
            >
              <p className="text-primary">
                # {skillGroup.category.toUpperCase()}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-2 py-1 text-xs border border-primary/30 text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
