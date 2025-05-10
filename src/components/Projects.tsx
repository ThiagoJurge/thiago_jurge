import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    name: "AdminENG",
    description:
      "A comprehensive network automation suite that reduced provisioning time by 80%. Features automated BGP configuration, network command scheduling, and real-time monitoring via PRTG API.",
    technologies: ["Flask", "React", "PRTG API", "Docker", "BGP"],
    link: "#",
    images: [
      "/images/admineng-dashboard.jpg",
      "/images/admineng-topology.jpg",
      "/images/admineng-config.jpg",
    ],
    alt: "AdminENG network management interface",
  },
  {
    name: "KeepAlive",
    description:
      "Real-time application monitoring system with 90% faster incident response. Includes health dashboards, automated alerts, and historical analytics.",
    technologies: ["Flask", "NextJS", "Celery", "PostgreSQL", "Docker"],
    link: "https://github.com/ThiagoJurge/keepalive",
    images: [
      "https://camo.githubusercontent.com/900e74fd65060cbfd6d579b799499bf219e923a3221d4bd772367df5cd3400a9/68747470733a2f2f696d673030312e70726e747363722e636f6d2f66696c652f696d673030312f737478654f68557851454f375854616b33485f6a46412e706e67",
      "https://camo.githubusercontent.com/7a4d8dedd330e1ba6a16d274e6e4391d81bd95a626ee865ecab51823a472b357/68747470733a2f2f696d673030312e70726e747363722e636f6d2f66696c652f696d673030312f564d76757a6d435551696d37315f2d506274746f46672e706e67",
      "https://camo.githubusercontent.com/cf380719bc6e9e90f7121d22654ed1d3a8a5cd71919cc07de441f5ad83c12731/68747470733a2f2f696d673030312e70726e747363722e636f6d2f66696c652f696d673030312f6c742d704b57704254426d6f426c716a6754346453412e706e67",
      "https://camo.githubusercontent.com/ec2e4e63f2b86cb54def682fd262600c04a733c330b0d6797f8b8c80124da5d5/68747470733a2f2f696d673030312e70726e747363722e636f6d2f66696c652f696d673030312f374168447846365751593272444375493853414a48772e706e67",
    ],
    alt: "KeepAlive monitoring dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 border-b border-primary/30">
      <div className="container max-w-6xl px-4">
        <div className="flex items-baseline mb-8">
          <span className="text-primary font-bold">$</span>
          <span className="ml-2 text-foreground">projects --showcase</span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 ml-6">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="overflow-hidden border border-primary/30 bg-background/50 group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">
                    {project.name}
                  </h3>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/30"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Code</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground mb-6 font-mono text-sm">
                  $ {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1 text-xs font-mono bg-background border border-primary/30 text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {/* <div className="relative h-64 w-full border-primary/30">
                  <Carousel className="w-full h-full">
                    <CarouselContent className="h-full">
                      {project.images.map((img, index) => (
                        <CarouselItem key={index} className="h-full">
                          <div className="relative w-full h-full">
                            <img
                              src={img}
                              alt={`${project.alt} ${index + 1}`}
                              className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-background/5" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background border-primary/30 hover:bg-background/80" />
                    <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background border-primary/30 hover:bg-background/80" />
                  </Carousel>
                </div> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
