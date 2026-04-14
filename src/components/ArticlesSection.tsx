import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const articles = [
  {
    date: "21 de outubro de 2023",
    title: "Como se tornar um desenvolvedor fullstack em 2024",
    author: "Daniel He4rt",
    tags: ["Carreira", "Fullstack"],
  },
  {
    date: "15 de outubro de 2023",
    title: "A importância do Open Source na sua jornada",
    author: "Vitor Jesus",
    tags: ["Open Source", "Comunidade"],
  },
  {
    date: "05 de outubro de 2023",
    title: "Guia definitivo de Git e GitHub para iniciantes",
    author: "Ana Souza",
    tags: ["Git", "Iniciante"],
  },
];

export function ArticlesSection() {
  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">Artigos Recentes</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-white/5 bg-white/[0.02] transition-all hover:border-primary/30">
                <CardHeader>
                  <p className="text-xs text-muted-foreground mb-2">{article.date}</p>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Por <span className="text-foreground font-medium">{article.author}</span></p>
                  <div className="flex gap-2">
                    {article.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider border-white/10">
                        {tag}
                      </Badge>
                    ))}
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
