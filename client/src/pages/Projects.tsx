import { Link } from "wouter";
import { ChevronLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Clinic Management System",
      description: "A comprehensive full-stack web application designed to streamline clinic operations and patient management.",
      details: [
        "Designed and developed using PHP, MySQL, HTML5, CSS3, and JavaScript",
        "Implemented secure role-based authentication for Admin, Doctor, Patient, Pharmacist, and Receptionist roles",
        "Built a dynamic scheduling system that manages doctor sessions based on employment status (Full-time/Part-time)",
        "Optimized MySQL database schema for complex data relationships and fast query performance",
        "Manages patient records, prescriptions, and appointment workflows"
      ],
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      duration: "Sep 2024 - Feb 2025",
      github: "https://github.com/RamezAtallah-9r",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Interactive Particles Animation",
      description: "An interactive canvas-based animation showcasing advanced JavaScript physics and real-time interaction.",
      details: [
        "Built with vanilla JavaScript, HTML5 Canvas API, and CSS3",
        "Implemented mouse/touch tracking for dynamic particle interactions (particles expand near cursor)",
        "Added real-time collision detection and physics-based bounce resolution for 1000+ particles",
        "Created a customizable color panel for real-time background and particle color modifications",
        "Responsive design with window resize handling and cross-device touch support"
      ],
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
      duration: "Mar 2026 - Apr 2026",
      github: "https://github.com/RamezAtallah-9r/SimpleProjects/tree/main/particele",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Interactive Memory Card Game",
      description: "A responsive memory game with multiple difficulty levels and persistent score tracking.",
      details: [
        "Developed using vanilla JavaScript with three difficulty levels (Easy/Medium/Hard)",
        "Dynamic grid layout calculations for responsive design across all devices",
        "Implemented card flip animations, match detection logic, and real-time scoring system",
        "Integrated Web Audio API for background music with autoplay handling and user preferences",
        "Built score history tracking with localStorage for persistent player sessions",
        "Cross-device compatibility with touch/mouse event support"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Web Audio API", "localStorage"],
      duration: "Mar 2026 - Apr 2026",
      github: "https://github.com/RamezAtallah-9r/SimpleProjects/tree/main/memory%20card",
      color: "from-orange-500 to-red-500"
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
            <Link href="/projects" className="text-sm font-medium text-accent">Projects</Link>
            <Link href="/skills" className="text-sm font-medium hover:text-accent transition-colors">Skills</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Projects Section */}
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
              <h1 className="text-5xl font-bold mb-4">My Projects</h1>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground">
              Here are some of my key projects showcasing my full-stack development skills and technical expertise.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="glow-card p-8 hover:shadow-2xl transition-all duration-300">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">{project.title}</h2>
                      <p className="text-accent text-sm font-semibold">{project.duration}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground">{project.description}</p>

                  {/* Details */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Key Features & Implementation:</h3>
                    <ul className="space-y-2">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <span className="text-accent font-bold">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3 pt-4">
                    <h3 className="font-semibold text-foreground">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button className="gap-2 bg-accent/20 border border-accent/50 text-accent hover:bg-accent/30">
                        <Github size={18} />
                        View Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 glow-card text-center space-y-4">
            <h3 className="text-2xl font-bold">Want to see more?</h3>
            <p className="text-muted-foreground">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <a href="https://github.com/RamezAtallah-9r" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <Github size={18} />
                Visit GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
