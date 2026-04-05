// import profileImg from "../assets/Traditiona.jpg.jpg";
import { ArrowRight, Mail } from "lucide-react";

const techStack = ["React", "Node.js", "MongoDB", "Express", "Java"];

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Grid background */}
    <div className="absolute inset-0 grid-bg opacity-40" />
    {/* Gradient orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
    <div
      className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] animate-pulse-glow"
      style={{ animationDelay: "1.5s" }}
    />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <p className="text-primary font-medium text-sm tracking-widest uppercase animate-fade-in-up">
            Full-Stack MERN Developer • Problem Solver
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Hi, I'm <span className="text-gradient">Santosh Kirtane</span>
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Building scalable web applications with clean architecture and
            real-world impact.
          </p>

          <div
            className="flex flex-wrap justify-center lg:justify-start gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-blue"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div
            className="flex flex-wrap justify-center lg:justify-start gap-2 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-secondary opacity-50 blur-md" />
            <img
              //   src={profileImg}
              src="https://media.licdn.com/dms/image/v2/D4D03AQFh8v8Jh3jErQ/profile-displayphoto-crop_800_800/B4DZrJ0Y7hJEAM-/0/1764322548289?e=1776902400&v=beta&t=F22W1_3FLE0rvA3xLv5L61NtYcsxhaaaVDc_iLKOVSg"
              alt="Santosh Kirtane"
              width={280}
              height={280}
              className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border-2 border-border"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
