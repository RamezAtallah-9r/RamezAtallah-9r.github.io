import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "Bootstrap", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "PHP", "Python", "Java", "REST APIs"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design", "Query Optimization", "Relational Modeling"]
    },
    {
      category: "Full-Stack",
      skills: ["MERN Stack", "Full-Stack Architecture", "Authentication", "Role-Based Access Control", "Web Development Lifecycle"]
    },
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++", "PHP", "SQL"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Canvas API", "Web Audio API", "localStorage", "DOM Manipulation"]
    },
    {
      category: "Soft Skills",
      skills: ["Teamwork", "Communication", "Adaptability", "Fast Learning", "Problem Solving", "Technical Documentation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold gradient-text">Ramez</div>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">About</Link>
            <Link href="/projects" className="text-sm font-medium hover:text-accent transition-colors">Projects</Link>
            <Link href="/skills" className="text-sm font-medium text-accent">Skills</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-8 hover:text-accent">
              <ChevronLeft size={18} />
              Back to Home
            </Button>
          </Link>

          <div className="space-y-8 mb-12">
            <div>
              <h1 className="text-5xl font-bold mb-4">Skills & Expertise</h1>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my technical skills, programming languages, and tools I've mastered through academic training and practical project experience.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="glow-card p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-accent mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 rounded-lg bg-card border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 text-sm font-medium text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Levels */}
          <div className="mt-16 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Language Proficiency</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full mb-6"></div>
            </div>

            <div className="space-y-6">
              <div className="glow-card p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-accent">Arabic</h3>
                  <span className="text-sm text-muted-foreground">Native Speaker</span>
                </div>
                <div className="w-full bg-card rounded-full h-2 border border-border">
                  <div className="bg-gradient-to-r from-accent to-purple-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="glow-card p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-accent">English</h3>
                  <span className="text-sm text-muted-foreground">C1 Proficiency</span>
                </div>
                <div className="w-full bg-card rounded-full h-2 border border-border">
                  <div className="bg-gradient-to-r from-accent to-purple-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Listening & Reading: C1 | Speaking & Writing: B2
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Certifications & Training</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full mb-6"></div>
            </div>

            <div className="glow-card p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-accent">Full-Stack Developer Certificate</h3>
                  <p className="text-muted-foreground">Axsos Academy</p>
                </div>
                <span className="text-sm text-muted-foreground">2026 - Present</span>
              </div>
              <p className="text-muted-foreground mt-3">
                620+ hours of intensive training covering Web Fundamentals, Python Stack, Java Stack, and MERN Stack development with hands-on project experience.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glow-card p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">620+</div>
              <p className="text-muted-foreground">Hours of Coding</p>
            </div>
            <div className="glow-card p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">7+</div>
              <p className="text-muted-foreground">Programming Languages</p>
            </div>
            <div className="glow-card p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">Full-Stack</div>
              <p className="text-muted-foreground">Development Expertise</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
