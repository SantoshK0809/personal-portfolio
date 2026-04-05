import { Monitor, Server, Database, Code, Wrench, Cloud } from "lucide-react";

const categories = [
  { icon: Monitor, title: "Frontend", skills: ["React.js", "JavaScript (ES6+)", "HTML5, CSS3", "Tailwind CSS"] },
  { icon: Server, title: "Backend", skills: ["Node.js", "Express.js", "REST API Development", "Auth (JWT, Sessions)"] },
  { icon: Database, title: "Database", skills: ["MongoDB (Mongoose)", "Data Modeling"] },
  { icon: Code, title: "Programming", skills: ["Java", "Data Structures & Algorithms"] },
  { icon: Wrench, title: "Tools & Technologies", skills: ["Git, GitHub", "Postman", "VS Code", "npm, Vite"] },
  { icon: Cloud, title: "Additional", skills: ["Deployment (Vercel, Netlify, Render)", "Real-time systems (Socket.io)"] },
];

const Skills = () => (
  <section id="skills" className="py-24 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">Technical <span className="text-gradient">Skills</span></h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Technologies and tools I work with to build full-stack applications.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((c) => (
          <div key={c.title} className="glass p-6 hover:border-primary/30 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <c.icon className="text-primary" size={22} />
              <h3 className="font-heading font-semibold">{c.title}</h3>
            </div>
            <ul className="space-y-2">
              {c.skills.map((s) => (
                <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
