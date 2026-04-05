import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AnalyticsAI",
    desc: "AI-powered interview preparation platform with resume & JD analysis, AI-generated questions, and personalized insights.",
    tech: ["React", "Node.js", "Express", "Gemini API"],
    highlight: "Structured GenAI integration for contextual interview prep.",
  },
  {
    title: "AlumniConnect",
    desc: "Networking platform connecting students with alumni. User roles, connection system, and messaging.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    highlight: "Scalable relationship system with role-based access.",
  },
  {
    title: "Wanderlust",
    desc: "Airbnb-style hotel booking platform with listings, search, booking system, auth & CRUD.",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    highlight: "Relational data handling across bookings and users.",
  },
  {
    title: "Real-Time Chat App",
    desc: "Instant messaging application with WebSockets, authentication, and message persistence.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    highlight: "Real-time + REST integration for seamless UX.",
  },
];

const Projects = () => (
  <section id="projects" className="py-24 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Real-world applications I've built to solve actual problems.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="glass p-6 group hover:border-primary/30 transition-all hover:-translate-y-1 duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <ExternalLink
                size={16}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
            <p className="text-xs text-primary/80 mb-4 italic">
              ⚡ {p.highlight}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
