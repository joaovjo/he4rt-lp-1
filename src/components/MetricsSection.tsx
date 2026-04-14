import { motion } from "motion/react";

const metrics = [
  { id: 1, label: "Membros Ativos", value: "10", suffix: "k+" },
  { id: 2, label: "Projetos Open Source", value: "500", suffix: "+" },
  { id: 3, label: "Artigos Publicados", value: "1", suffix: "k+" },
  { id: 4, label: "Mentorias Realizadas", value: "50", suffix: "+" },
];

export function MetricsSection() {
  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                {metric.value}
                <span className="text-primary">{metric.suffix}</span>
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-widest">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
