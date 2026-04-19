/* ContactSection — Precision Engineering design
   Clean contact form + contact info, editorial layout
*/
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:rolexoridev@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#f8f7f4]">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="section-number">05 — Contact</span>
          <div className="h-px w-12 bg-[#3d3df5]" />
          <div className="section-divider flex-1" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-[#111] mb-4 leading-tight">
              Let's build something
              <br />
              <span className="text-[#3d3df5]">great together.</span>
            </h2>
            <p className="font-['DM_Sans'] text-[#666] text-base leading-relaxed mb-8">
              I'm open to freelance projects, full-time opportunities, and interesting collaborations.
              Whether you have a specific project in mind or just want to connect — feel free to reach out.
            </p>

            {/* Contact links */}
            <div className="space-y-4">
              <a
                href="mailto:rolexoridev@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#e8e6e0] flex items-center justify-center group-hover:bg-[#3d3df5] group-hover:border-[#3d3df5] transition-colors duration-200">
                  <Mail size={16} className="text-[#555] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-['DM_Sans'] text-xs text-[#888] mb-0.5">Email</div>
                  <div className="font-['DM_Sans'] text-sm font-medium text-[#111] group-hover:text-[#3d3df5] transition-colors link-underline">
                    rolexoridev@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/RolexOriDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#e8e6e0] flex items-center justify-center group-hover:bg-[#3d3df5] group-hover:border-[#3d3df5] transition-colors duration-200">
                  <Github size={16} className="text-[#555] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-['DM_Sans'] text-xs text-[#888] mb-0.5">GitHub</div>
                  <div className="font-['DM_Sans'] text-sm font-medium text-[#111] group-hover:text-[#3d3df5] transition-colors link-underline">
                    github.com/RolexOriDev
                  </div>
                </div>
              </a>
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-10 inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-['DM_Sans'] text-sm text-green-700 font-medium">
                Available for new projects
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl border border-[#e8e6e0] p-8 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={48} className="text-[#3d3df5] mb-4" />
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#111] mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-['DM_Sans'] text-[#666] text-sm">
                    Your email client has opened. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-['DM_Sans'] text-xs font-medium text-[#555] mb-1.5 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-[#f8f7f4] border border-[#e8e6e0] rounded-lg font-['DM_Sans'] text-sm text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#3d3df5] focus:ring-1 focus:ring-[#3d3df5]/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-['DM_Sans'] text-xs font-medium text-[#555] mb-1.5 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-[#f8f7f4] border border-[#e8e6e0] rounded-lg font-['DM_Sans'] text-sm text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#3d3df5] focus:ring-1 focus:ring-[#3d3df5]/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-['DM_Sans'] text-xs font-medium text-[#555] mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-[#f8f7f4] border border-[#e8e6e0] rounded-lg font-['DM_Sans'] text-sm text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#3d3df5] focus:ring-1 focus:ring-[#3d3df5]/20 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#111111] text-white font-['DM_Sans'] font-medium rounded-lg hover:bg-[#3d3df5] transition-colors duration-200"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
