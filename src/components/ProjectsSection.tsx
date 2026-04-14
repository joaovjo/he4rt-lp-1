import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const projects = [
  {
    title: "4noobs",
    description: "Repositórios com conteúdos de base para iniciantes em diversas tecnologias.",
    tags: ["Educação", "Open Source"],
    image: "https://picsum.photos/seed/code1/600/400",
  },
  {
    title: "He4rtLabs",
    description: "Laboratório de inovação focado em resolver problemas reais da comunidade.",
    tags: ["Inovação", "Prática"],
    image: "https://picsum.photos/seed/code2/600/400",
  },
  {
    title: "100DiasDeCodigo",
    description: "Iniciativa para incentivar o hábito de programar diariamente.",
    tags: ["Desafio", "Hábito"],
    image: "https://picsum.photos/seed/code3/600/400",
  },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">Projetos em Destaque</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Conheça as iniciativas que movem nossa comunidade e como você pode participar.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-white/5 bg-white/[0.02] transition-all hover:border-primary/50 hover:bg-white/[0.04]">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardHeader>
                  <div className="flex gap-2 mb-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
