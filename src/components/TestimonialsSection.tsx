import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "João Silva",
    role: "Frontend Developer",
    content: "A He4rt mudou minha carreira. Encontrei mentores que me guiaram desde o básico até meu primeiro emprego.",
    avatar: "https://i.pravatar.cc/150?u=joao",
  },
  {
    name: "Maria Oliveira",
    role: "Backend Engineer",
    content: "O ambiente é incrível. Colaborar em projetos open source me deu a confiança que eu precisava.",
    avatar: "https://i.pravatar.cc/150?u=maria",
  },
  {
    name: "Pedro Santos",
    role: "Fullstack Dev",
    content: "Aprendi mais em 3 meses na comunidade do que em um ano estudando sozinho. Networking é tudo.",
    avatar: "https://i.pravatar.cc/150?u=pedro",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">O que dizem sobre nós</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-white/5 bg-white/[0.02] p-8">
                <CardContent className="p-0">
                  <p className="mb-6 italic text-muted-foreground">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full border border-primary/20" referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
