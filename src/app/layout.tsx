import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thiagojurge ~/portfolio",
  description: "Backend Developer & Network Specialist Terminal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${firaCode.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <Header />
          <TerminalShell>{children}</TerminalShell>
        </ThemeProvider>
      </body>
    </html>
  );
}

function TerminalShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra de título do terminal */}
      <div className="bg-muted h-8 flex items-center px-4 border-b border-border relative">
        {/* Botões do terminal */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true" />
          <div
            className="w-3 h-3 rounded-full bg-yellow-500"
            aria-hidden="true"
          />
          <div
            className="w-3 h-3 rounded-full bg-green-500"
            aria-hidden="true"
          />
        </div>

        {/* Título centralizado */}
        <div className="absolute left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
          thiagojurge@portfolio:
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="flex-1 p-4 overflow-auto">{children}</main>

      {/* Barra de status estilo terminal */}
      <footer className="bg-muted h-8 flex items-center px-4 border-t border-border text-sm font-mono">
        <span className="text-primary">λ</span>
        <span className="ml-2">mode: view</span>
        <span className="ml-auto text-muted-foreground">
          Ln 1, Col 1 ‒ UTF-8 • LF
        </span>
      </footer>
    </div>
  );
}
