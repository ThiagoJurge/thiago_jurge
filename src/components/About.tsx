import { Card } from "./ui/card";

export default function About() {
  return (
    <section id="about" className="py-12 border-b border-primary/30">
      <div className="flex items-baseline">
        <span className="text-primary font-bold">$</span>
        <span className="ml-2 text-foreground">cat about.txt</span>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 ml-6">
        {/* 🇺🇸 About Me */}
        <Card className="border border-primary/30 p-4 hover:bg-muted/50 transition-colors">
          <h2 className="text-xl font-semibold text-primary">🇺🇸 About Me</h2>
          <p className="mt-4 text-muted-foreground text-sm">
            I'm an aspiring Backend Developer with a strong background in
            networks and infrastructure. Passionate about Python, automation,
            and DevOps practices, I'm looking for international opportunities to
            contribute and grow within modern engineering teams.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="text-primary">👨‍💻</span> Programming since age 17
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">🌐</span> Solid knowledge of Cisco
              networks, BGP, and MPLS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">🔧</span> Experienced with Linux,
              Docker, PRTG, Zabbix, Grafana
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">🎯</span> 2025 Goal: Reach B1+
              fluency in English
            </li>
          </ul>
        </Card>

        {/* 🇧🇷 Sobre Mim */}
        <Card className="border border-primary/30 p-4 hover:bg-muted/50 transition-colors">
          <h2 className="text-xl font-semibold text-primary">🇧🇷 Sobre Mim</h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Sou um Desenvolvedor Backend em formação com paixão por Python,
            infraestrutura de redes e automação. Com experiência prática em
            projetos de monitoramento, DevOps e desenvolvimento de APIs, estou
            em busca de oportunidades internacionais onde possa colaborar e
            crescer em times modernos e inovadores.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="text-primary">👨‍💻</span> Comecei a programar aos
              17 anos
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">🌐</span> Forte base em redes
              (Cisco, BGP, MPLS)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">🔧</span> Experiência com Linux,
              Docker, PRTG, Zabbix, Grafana
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">🎯</span> Meta 2025: Fluência em
              inglês (B1+)
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
