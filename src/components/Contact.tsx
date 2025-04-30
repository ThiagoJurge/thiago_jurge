"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Check, Copy } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("thiagojurge@hotmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-8">
      <div className="border border-primary/30 p-4 bg-background">
        {/* Linha de comando */}
        <div className="flex items-baseline mb-4">
          <span className="text-primary font-bold">$</span>
          <span className="ml-2 text-foreground">contact --thiago</span>
        </div>

        {/* Saída do comando */}
        <div className="ml-6 space-y-6">
          {/* Contato direto */}
          <div>
            <p className="text-muted-foreground"># CONTACT INFORMATION</p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-sm text-foreground hover:underline"
                  onClick={handleCopyEmail}
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-green-500">
                      <Check className="w-4 h-4" /> Copiado!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 underline">
                      thiagojurge@hotmail.com <Copy className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-foreground">+55 22 98101-3352</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-foreground">
                  Nova Friburgo, RJ - Brazil
                </span>
              </div>
            </div>
          </div>

          {/* Prompt final */}
          <div className="flex items-baseline">
            <span className="text-primary font-bold">$</span>
            <span className="ml-2 text-foreground">
              <span className="cursor">_</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
