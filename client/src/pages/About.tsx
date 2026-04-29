import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold gradient-text">Ramez</div>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium text-accent">About</Link>
            <Link href="/projects" className="text-sm font-medium hover:text-accent transition-colors">Projects</Link>
            <Link href="/skills" className="text-sm font-medium hover:text-accent transition-colors">Skills</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-8 hover:text-accent">
              <ChevronLeft size={18} />
              Back to Home
            </Button>
          </Link>

          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">About Me</h1>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Ramez Atallah, a Computer Systems Engineer and Full-Stack Developer with a passion for building scalable, user-centric web applications. Based in Tulkarem, Palestine, I combine academic training in system architecture with hands-on experience in modern web development.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">My Journey</h2>
                <p>
                  I completed my Bachelor's degree in Computer Systems Engineering at Palestine Technical University, where I gained a strong foundation in software engineering principles, system design, and computer science fundamentals. Currently, I'm intensifying my practical skills through an immersive bootcamp at Axsos Academy, completing over 620 hours of hands-on coding across Python, Java, and the MERN stack.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">What I Do</h2>
                <p>
                  I specialize in full-stack web development, creating applications that are not only technically sound but also deliver exceptional user experiences. From backend architecture and database design to responsive frontend interfaces, I'm comfortable working across the entire development stack. My experience includes building a comprehensive Clinic Management System with role-based authentication, dynamic scheduling, and complex data relationships.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">My Approach</h2>
                <p>
                  I believe in writing clean, maintainable code and following best practices in software development. I'm a quick learner who thrives in collaborative environments, and I'm always eager to tackle new challenges and expand my skill set. Whether it's optimizing database queries, implementing secure authentication systems, or crafting intuitive user interfaces, I approach each project with attention to detail and a commitment to excellence.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Beyond Code</h2>
                <p>
                  Outside of development, I'm passionate about continuous learning and staying updated with the latest technologies and industry trends. I'm seeking a Junior Developer role where I can contribute my technical skills to innovative projects while growing as a developer and collaborating with experienced teams in the tech industry.
                </p>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
              
              <div className="glow-card p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-accent">Full-Stack Developer Certificate</h3>
                    <p className="text-muted-foreground">Axsos Academy</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2026 - Present</span>
                </div>
                <p className="text-muted-foreground">620+ hours of intensive training covering Web Fundamentals, Python, Java, and MERN Stack</p>
              </div>

              <div className="glow-card p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-accent">Bachelor in Computer Systems Engineering</h3>
                    <p className="text-muted-foreground">Palestine Technical University – Kadoorie</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2018 - 2025</span>
                </div>
                <p className="text-muted-foreground">System architecture, software engineering, databases, and web development fundamentals</p>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Languages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glow-card p-4">
                  <h3 className="font-bold text-accent mb-1">Arabic</h3>
                  <p className="text-muted-foreground">Native Speaker</p>
                </div>
                <div className="glow-card p-4">
                  <h3 className="font-bold text-accent mb-1">English</h3>
                  <p className="text-muted-foreground">C1 Proficiency (Listening & Reading), B2 (Speaking & Writing)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
