import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Twitter, Youtube, Instagram, MessageSquare } from "lucide-react";

export function ContactFooter() {
  return (
    <footer id="contato" className="border-t border-white/5 bg-white/[0.01] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight">Entre em contato conosco</h2>
            <p className="mb-8 text-muted-foreground">
              Dúvidas, sugestões ou apenas quer bater um papo? Mande uma mensagem!
            </p>
            <form className="space-y-4 max-w-md">
              <Input placeholder="Seu nome" className="border-white/10 bg-white/5" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Seu e-mail" type="email" className="border-white/10 bg-white/5" />
                <Input placeholder="Assunto" className="border-white/10 bg-white/5" />
              </div>
              <Textarea placeholder="Sua mensagem" className="min-h-[120px] border-white/10 bg-white/5" />
              <Button className="w-full bg-primary hover:bg-primary/90">Enviar mensagem</Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-6 text-2xl font-bold">Venha fazer parte do nosso Discord</h3>
              <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752C4] flex gap-2">
                <MessageSquare className="h-5 w-5" />
                Entrar no Discord
              </Button>
              <div className="mt-8">
                <img 
                  src="https://picsum.photos/seed/discord/600/300?blur=2" 
                  alt="Discord Preview" 
                  className="rounded-2xl border border-white/10 opacity-50"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
              <p className="text-sm text-muted-foreground">
                © 2024 He4rt Developers. Todos os direitos reservados.
              </p>
              <div className="flex gap-4">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Youtube className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
