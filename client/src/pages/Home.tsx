import { Link } from "wouter";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold gradient-text">Ramez</div>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">About</Link>
            <Link href="/projects" className="text-sm font-medium hover:text-accent transition-colors">Projects</Link>
            <Link href="/skills" className="text-sm font-medium hover:text-accent transition-colors">Skills</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest">Welcome to my portfolio</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Full-Stack Developer & <span className="gradient-text">System Engineer</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I'm Ramez Atallah, a Computer Systems Engineer with hands-on experience building scalable web applications. Currently completing an intensive bootcamp at Axsos Academy, combining academic training with practical project expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/projects">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  View My Work
                  <ChevronRight size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-accent/50 hover:border-accent hover:bg-accent/10">
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a href="https://github.com/RamezAtallah-9r" target="_blank" rel="noopener noreferrer" 
                className="p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300">
                <Github size={20} className="text-accent" />
              </a>
              <a href="https://linkedin.com/in/ramez-atallah" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300">
                <Linkedin size={20} className="text-accent" />
              </a>
              <a href="mailto:ramez.atallah@hotmail.com"
                className="p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300">
                <Mail size={20} className="text-accent" />
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-accent/30 glow-card">
              <img 
                src="/manus-storage/ramez-profile_00940681.png" 
                alt="Ramez Atallah" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-t border-border/30 bg-card/50 py-16">
        <div className="container grid grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">620+</div>
            <p className="text-muted-foreground">Hours of Coding</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">5+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">Full-Stack</div>
            <p className="text-muted-foreground">Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
