import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Copy, Check, Send, Loader2 } from "lucide-react";

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.14a5.8 5.8 0 0 0-1.5-3.8c.15-.38.65-1.8-.15-3.75 0 0-1.25-.4-4 1.4a13.5 13.5 0 0 0-7 0c-2.75-1.8-4-1.4-4-1.4-.8 1.95-.3 3.37-.15 3.75a5.8 5.8 0 0 0-1.5 3.8c0 5.58 3.32 6.79 6.5 7.14A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);


const Contact = () => {
  const [copied, setCopied] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const copyText = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setStatus(null);
    try {
      await emailjs.send("service_uyv4vjm", "template_104m3v4", {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, "EuxOIRO947M3pPHFG");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">Get In <span className="text-gradient">Touch</span></h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Have a project in mind or want to connect? Reach out!</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Links */}
          <div className="space-y-4">
            <div className="glass p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a href="mailto:santosh080904@gmail.com" className="text-sm hover:text-primary transition-colors">santosh080904@gmail.com</a>
                </div>
              </div>
              <button onClick={() => copyText("santosh080904@gmail.com", "email")} className="p-2 hover:text-primary transition-colors">
                {copied === "email" ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              </button>
            </div>

            <a href="https://www.linkedin.com/in/santosh-kirtane-528636329/" target="_blank" rel="noopener noreferrer" className="glass p-5 flex items-center gap-3 hover:border-primary/30 transition-all">
              <Linkedin className="text-primary" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm">santosh-kirtane</p>
              </div>
            </a>

            <a href="https://github.com/SantoshK0809" target="_blank" rel="noopener noreferrer" className="glass p-5 flex items-center gap-3 hover:border-primary/30 transition-all">
              <Github className="text-primary" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="text-sm">SantoshK0809</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form className="glass p-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-dim focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-dim focus:outline-none focus:border-primary/50 transition-colors" placeholder="you@email.com" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-dim focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Your message..." />
            </div>
            <button type="submit" disabled={sending} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-blue disabled:opacity-60">
              {sending ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={16} /> Send Message</>}
            </button>
            {status === "sent" && <p className="text-sm text-green-400 text-center">Message sent successfully!</p>}
            {status === "error" && <p className="text-sm text-destructive text-center">Failed to send. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

