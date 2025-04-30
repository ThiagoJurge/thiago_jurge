"use client";

import { useMemo } from "react";

const education = [
  {
    degree:
      "BSc em Análise e Desenvolvimento de Sistemas / BSc in Systems Analysis and Development",
    institution: "UNOPAR",
    period: "2025–2029",
    current: true,
  },
  {
    degree:
      "Técnico em Automação Industrial / Industrial Automation Technician",
    institution: "SENAI",
    period: "2019",
  },
  {
    degree: "Curso de Programação Web / Web Programming Course",
    institution: "SENAI",
    period: "2019",
  },
];

const borderColors = ["border-primary", "border-green-500", "border-blue-500"];
const titleColors = ["text-primary", "text-green-500", "text-blue-500"];

export default function Education() {
  return (
    <section id="education" className="py-12 border-b border-primary/30">
      <div className="flex items-baseline">
        <span className="text-primary font-bold">$</span>
        <span className="ml-2 text-foreground">cat education.md</span>
      </div>

      <div className="mt-6 ml-6 space-y-8">
        {education.map((edu, index) => {
          const [pt, en] = edu.degree.split(" / ");
          const borderColor = borderColors[index % borderColors.length];
          const titleColor = titleColors[index % titleColors.length];

          return (
            <div key={index} className={`border-l-4 pl-4 ${borderColor}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`${titleColor} font-medium`}>
                    {edu.institution}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    <span className="text-foreground">~</span> {edu.period}
                  </p>
                </div>
                {edu.current && (
                  <span className="text-muted-foreground text-sm">
                    [current]
                  </span>
                )}
              </div>
              <p className="mt-2 text-foreground">{en}</p>
              <p className="text-muted-foreground text-sm">({pt})</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
