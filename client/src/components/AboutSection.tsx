/* AboutSection — Precision Engineering design
   Two-column layout: text left, illustration right
   Swiss ordinal section marker, editorial typography
*/
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663576664890/4rZd6W7EPNpZoVq8vKMH6x/about-visual-CZrLLPjNU4VbofgQg8WmGw.webp";

const timeline = [
  { year: "2020", event: "Started professional development career" },
  { year: "2021", event: "Mastered Java Spring Boot & REST APIs" },
  { year: "2022", event: "Expanded into full-stack JavaScript (React, Node.js)" },
  { year: "2023", event: "Integrated Python for data pipelines & automation" },
  { year: "2024", event: "Led backend architecture for enterprise projects" },
  { year: "2025", event: "Building scalable microservices & cloud-native apps" },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

export default function AboutSection() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-number">02 — About</span>
          <div className="h-px flex-1 max-w-[60px] bg-[#3d3df5]" />
          <div className="section-divider flex-1" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-[#111] mb-6 leading-tight">
              Engineering software
              <br />
              <span className="text-[#3d3df5]">that actually works.</span>
            </h2>
            <div className="space-y-4 font-['DM_Sans'] text-[#555] text-base leading-relaxed">
              <p>
                I'm <strong className="text-[#111]">RolexDev</strong>, a senior full-stack developer with
                over <strong className="text-[#111]">6 years of hands-on experience</strong> delivering
                production-grade software across backend systems, web applications, and automation pipelines.
              </p>
              <p>
                My core stack revolves around <strong className="text-[#111]">Java</strong> for
                enterprise-grade backend services, <strong className="text-[#111]">JavaScript/TypeScript</strong> for
                modern full-stack web development, and <strong className="text-[#111]">Python</strong> for
                data processing, scripting, and intelligent automation.
              </p>
              <p>
                I care deeply about clean architecture, readable code, and software that is built to last.
                Every project I take on is treated as a craft — not just a task to complete.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10 space-y-3">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-4"
                >
                  <span className="font-['JetBrains_Mono'] text-xs font-medium text-[#3d3df5] w-10 shrink-0 mt-0.5">
                    {item.year}
                  </span>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3d3df5] mt-1.5 shrink-0" />
                    <span className="font-['DM_Sans'] text-sm text-[#555]">{item.event}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Illustration column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Integrated visual element - seamless with site design */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-[#333] bg-[#2a2a33]">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Centered text display */}
                  <div className="text-center">
                    <div className="font-['Space_Grotesk'] text-6xl font-bold text-[#3d3df5]">6+</div>
                    <div className="font-['DM_Sans'] text-sm text-[#aaa] tracking-widest mt-4">YEARS</div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-[#1a1a1f] border border-[#3d3df5] rounded-xl px-4 py-3 shadow-md backdrop-blur-sm"
              >
                <div className="font-['Space_Grotesk'] text-sm font-bold text-[#3d3df5]">EXPERIENCE</div>
              </motion.div>
              {/* Floating tech badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-[#3d3df5] text-white rounded-xl px-4 py-3 shadow-md"
              >
                <div className="font-['JetBrains_Mono'] text-xs font-medium">Java · JS · Python</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
