"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Check, Copy } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "thiagojurge@hotmail.com";

    if (navigator.clipboard && window.isSecureContext) {
      // Navegadores modernos e contexto seguro (HTTPS)
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      // Fallback para navegadores mais antigos ou HTTP
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      textArea.style.pointerEvents = "none";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          alert("Não foi possível copiar o email.");
        }
      } catch (err) {
        alert("Erro ao copiar o email: " + err);
      }

      document.body.removeChild(textArea);
    }
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
