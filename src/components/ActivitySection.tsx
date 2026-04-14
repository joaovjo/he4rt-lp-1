import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const activities = [
  {
    title: "4noobs",
    description: "Desenvolva uma base sólida nos seus estudos de tecnologia.",
    buttonText: "Ver projetos",
  },
  {
    title: "He4rtLabs",
    description: "Contribua com projetos reais e aprenda na prática com mentores.",
    buttonText: "Ver projetos",
  },
  {
    title: "100DiasDeCodigo",
    description: "Desafie-se a codar todos os dias e compartilhe seu progresso.",
    buttonText: "Ver progresso",
  },
];

export function ActivitySection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Última Atividade</h2>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-white/5 bg-white/[0.02] transition-colors hover:bg-white/[0.04]">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{activity.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">{activity.description}</p>
                      <Button variant="secondary" size="sm" className="rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                        {activity.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Pilares da Comunidade</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Comunidade", desc: "Ambiente seguro para compartilhar conhecimento.", icon: "🤝" },
                { title: "Interação", desc: "Conecte-se com desenvolvedores de todos os níveis.", icon: "💬" },
                { title: "Aprendizado", desc: "Cursos, mentorias e projetos práticos.", icon: "📚" },
                { title: "Colaboração", desc: "Trabalhe em equipe em projetos open source.", icon: "🚀" },
              ].map((pilar, index) => (
                <motion.div
                  key={pilar.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-white/5 bg-white/[0.02] p-6">
                    <div className="mb-4 text-3xl">{pilar.icon}</div>
                    <h3 className="mb-2 font-bold">{pilar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pilar.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
