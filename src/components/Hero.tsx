import { Download } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section id="hero" className="py-12 border-b border-primary/30">
      <Button
        variant="outline"
        className="border-primary text-primary hover:bg-primary/10 flex justify-center items-center"
        asChild
      >
        <a
          href="https://docs.google.com/document/d/1tfR5bFDk4arQjjVNiu7dchjwpgWPHI8vXgPjl88Julg/edit?usp=drivesdk"
          aria-label="Acessar seção de projetos / curriculum"
          target="_blank"
        >
          <span className="flex items-center">
            [CURRICULUM]
            <Download className="ml-2 h-4 w-4" />
          </span>
        </a>
      </Button>

      <div className="flex items-baseline pt-4">
        <span className="text-primary font-bold">$</span>
        <span className="ml-2 text-foreground">cat about_thiago.txt</span>
      </div>

      <div className="mt-6 ml-6">
        <h1 className="text-3xl font-bold text-primary">Thiago Jurge Salles</h1>
        <h2 className="text-xl text-muted-foreground mt-2">
          Backend Developer & Network Specialist
        </h2>

        <div className="mt-6 space-y-4">
          <p className="flex items-baseline">
            <span className="text-primary mr-2">{">"}</span>
            <span className="text-foreground">
              Passionate about Python, automation, and DevOps practices
            </span>
          </p>
          <p className="flex items-baseline">
            <span className="text-primary mr-2">{">"}</span>
            <span className="text-foreground">
              Looking for international opportunities
            </span>
          </p>
        </div>

        <div className="mt-8 flex gap-4 pb-4">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a href="#contact">
              <span className="text-primary">[CONTACT]</span>
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a href="#projects">
              <span className="text-primary">[VIEW_PROJECTS]</span>
            </a>
          </Button>
        </div>

        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10"
          asChild
        >
          <a href="https://github.com/ThiagoJurge" target="_blank">
            <span className="text-primary">[GITHUB]</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
