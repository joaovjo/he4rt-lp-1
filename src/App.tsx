import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MetricsSection } from "./components/MetricsSection";
import { ActivitySection } from "./components/ActivitySection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ArticlesSection } from "./components/ArticlesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactFooter } from "./components/ContactFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <MetricsSection />
        <ActivitySection />
        <ProjectsSection />
        <ArticlesSection />
        <TestimonialsSection />
      </main>
      <ContactFooter />
    </div>
  );
}
