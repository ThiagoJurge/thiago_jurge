import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Python Essentials 1 & 2",
    organization: "Cisco",
    year: "2023",
  },
  {
    title: "JavaScript Essentials",
    organization: "Cisco",
    year: "2023",
  },
  {
    title: "English for IT 2",
    organization: "Cisco",
    year: "2023",
  },
  {
    title: "Networking Basics & Essentials",
    organization: "Cisco",
    year: "2022",
  },
  {
    title: "Endpoint Security",
    organization: "Cisco",
    year: "2022",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 border-b border-primary/30">
      <div className="flex items-baseline">
        <span className="text-primary font-bold">$</span>
        <span className="ml-2 text-foreground">ls certifications/</span>
      </div>

      <div className="mt-6 ml-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="border border-primary/30 p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-primary font-medium">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    <span className="text-foreground">@</span>{" "}
                    {cert.organization}
                  </p>
                </div>
                <span className="text-muted-foreground text-sm">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
