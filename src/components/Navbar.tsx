import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold tracking-tighter">
            HE4RT <span className="text-primary">DEVS</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#sobre" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Sobre</a>
            <a href="#comunidades" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Comunidades</a>
            <a href="#projetos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Projetos</a>
            <a href="#depoimentos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Depoimentos</a>
            <a href="#contato" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contato</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/he4rt" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </a>
          <Button variant="ghost" className="hidden sm:inline-flex">Entrar</Button>
        </div>
      </div>
    </nav>
  );
}
