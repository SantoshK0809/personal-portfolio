import { Layers, Monitor, Server, Database, Palette, Cloud, Radio } from "lucide-react";

const services = [
  { icon: Layers, title: "Full-Stack Web Development", desc: "End-to-end MERN applications from concept to deployment." },
  { icon: Monitor, title: "Frontend Development", desc: "Responsive, performant UI using React + Tailwind CSS." },
  { icon: Server, title: "Backend & API Development", desc: "Scalable REST APIs with authentication and authorization." },
  { icon: Database, title: "Database Integration", desc: "MongoDB schema design, data modeling, and optimization." },
  { icon: Palette, title: "UI Implementation", desc: "Convert designs into pixel-perfect, functional interfaces." },
  { icon: Cloud, title: "Deployment & Hosting", desc: "Deploy on Vercel, Netlify, or Render with CI/CD." },
  { icon: Radio, title: "Real-Time Applications", desc: "Socket.io-based systems for live communication." },
];

const Services = () => (
  <section id="services" className="py-24 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">What I <span className="text-gradient">Offer</span></h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Services I can provide to bring your ideas to life.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="glass p-6 hover:border-primary/30 transition-all group">
            <s.icon className="text-primary mb-3" size={24} />
            <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
