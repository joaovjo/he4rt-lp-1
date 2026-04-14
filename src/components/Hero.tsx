import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
      
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Desenvolva seu <br />
              <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                potencial
              </span> na <br />
              comunidade
            </h1>
            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
              Uma comunidade de desenvolvedores dedicada a ajudar iniciantes a se tornarem profissionais através de projetos, mentorias e networking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8">
                Começar agora
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-white/10 hover:bg-white/5">
                Explorar projetos
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative h-[400px] w-[400px] sm:h-[500px] sm:w-[500px]">
              {/* Abstract 3D Shape Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-full w-full">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rotate-45 rounded-[40px] border-2 border-primary/30 bg-primary/5 backdrop-blur-sm" 
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 -rotate-12 rounded-[40px] border-2 border-purple-500/30 bg-purple-500/5 backdrop-blur-sm" 
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], rotate: [12, 15, 12] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-16 rotate-12 rounded-[40px] border-2 border-primary/50 bg-primary/10 shadow-[0_0_80px_rgba(124,58,237,0.4)] flex items-center justify-center overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-20 bg-[grid-white/10] [mask-image:radial-gradient(white,transparent_70%)]" 
                         style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <div className="text-6xl font-black text-primary/20 select-none tracking-tighter">HE4RT</div>
                  </motion.div>
                </div>
              </div>
              {/* Floating Icons or Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 h-12 w-12 rounded-xl bg-card p-3 shadow-xl border border-white/10"
              >
                <div className="h-full w-full rounded bg-primary/20" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 h-16 w-16 rounded-2xl bg-card p-4 shadow-xl border border-white/10"
              >
                <div className="h-full w-full rounded-full bg-purple-500/20" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
