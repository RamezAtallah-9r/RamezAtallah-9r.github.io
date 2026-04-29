import { Link } from "wouter";
import { ChevronLeft, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
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
            <Link href="/contact" className="text-sm font-medium text-accent">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-8 hover:text-accent">
              <ChevronLeft size={18} />
              Back to Home
            </Button>
          </Link>

          <div className="space-y-8 mb-12">
            <div>
              <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of the channels below!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <a href="mailto:ramez.atallah@hotmail.com" className="group">
              <div className="glow-card p-6 h-full hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">ramez.atallah@hotmail.com</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">Send me an email and I'll get back to you as soon as possible.</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+970569999839" className="group">
              <div className="glow-card p-6 h-full hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground">(+970) 569999839</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">Call me directly for urgent matters or quick conversations.</p>
              </div>
            </a>

            {/* Location */}
            <div className="group">
              <div className="glow-card p-6 h-full">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/30">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Location</h3>
                    <p className="text-sm text-muted-foreground">Beit Lid, Tulkarm, Palestine</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">Based in Palestine, open to remote opportunities worldwide.</p>
              </div>
            </div>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/ramez-atallah" target="_blank" rel="noopener noreferrer" className="group">
              <div className="glow-card p-6 h-full hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors">
                    <Linkedin size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">Ramez Atallah</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">Connect with me on LinkedIn to stay updated on my journey.</p>
              </div>
            </a>
          </div>

          {/* GitHub */}
          <div className="glow-card p-8 text-center space-y-4 mb-12">
            <div className="flex justify-center">
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                <Github size={32} className="text-accent" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">GitHub</h3>
              <p className="text-muted-foreground mb-4">
                Check out my repositories and see my code in action. I'm constantly working on new projects and contributing to open source.
              </p>
              <a href="https://github.com/RamezAtallah-9r" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Github size={18} />
                  Visit My GitHub
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">About Me</h2>
            <div className="glow-card p-6 space-y-4">
              <div>
                <h3 className="font-bold text-accent mb-2">Availability</h3>
                <p className="text-muted-foreground">
                  Currently seeking a Junior Developer role. Open to full-time, part-time, or contract opportunities.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-accent mb-2">Interests</h3>
                <p className="text-muted-foreground">
                  Full-stack web development, system architecture, scalable applications, and innovative tech solutions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-accent mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  I typically respond to emails within 24 hours. For urgent matters, feel free to call.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 glow-card text-center space-y-4 border-accent/50">
            <h3 className="text-2xl font-bold">Ready to collaborate?</h3>
            <p className="text-muted-foreground">
              Whether you have a project in mind or just want to chat, I'd love to hear from you!
            </p>
            <a href="mailto:ramez.atallah@hotmail.com">
              <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <Mail size={18} />
                Send me an Email
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/50 py-8 mt-20">
        <div className="container text-center text-muted-foreground text-sm">
          <p>© 2026 Ramez Atallah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
