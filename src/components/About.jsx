import { GraduationCap, Rocket, Code2 } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Self-Driven Learner", desc: "Constantly building projects and learning new technologies beyond the curriculum." },
  { icon: Rocket, title: "Real-World Builder", desc: "Focused on shipping production-grade full-stack applications." },
  { icon: GraduationCap, title: "Strong Foundations", desc: "Solid grasp of backend + frontend integration and system design." },
];

const About = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">About <span className="text-gradient">Me</span></h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Final-year IT engineering student and focused MERN stack developer with hands-on experience in building full-stack applications. I actively strengthen my DSA skills using Java and aim to transition into a highly capable full-stack engineer.
      </p>

      <div className="glass p-6 sm:p-8 max-w-3xl mx-auto mb-12">
        <div className="flex items-start gap-4">
          <GraduationCap className="text-primary shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-heading font-semibold text-lg">Education</h3>
            <p className="text-foreground">BE (Information Technology)</p>
            <p className="text-muted-foreground text-sm">Savitribai Phule Pune University (SPPU) • Graduating 2026</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {highlights.map((h) => (
          <div key={h.title} className="glass p-6 group hover:border-primary/30 transition-colors">
            <h.icon className="text-primary mb-3" size={28} />
            <h3 className="font-heading font-semibold mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
