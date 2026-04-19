/* HeroSection — Precision Engineering design
   Large typographic statement, left-aligned, hero background image right
   Framer Motion entrance animations
*/
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663576664890/4rZd6W7EPNpZoVq8vKMH6x/hero-bg-F64fVrtuweerNiqidZdxra.webp";

const roles = [
  "Full Stack Developer",
  "Java Engineer",
  "JavaScript Expert",
  "Python Developer",
  "Backend Architect",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 70);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className="text-[#3d3df5]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } } as const,
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection() {
  const handleScrollDown = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#f8f7f4" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f4] via-[#f8f7f4]/80 to-transparent" />

      <div className="container relative z-10 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <span className="section-number">01 — Introduction</span>
            <div className="h-px w-12 bg-[#3d3df5]" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold text-[#111111] leading-[1.05] tracking-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              RolexDev
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-[#3d3df5]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            variants={itemVariants}
            className="font-['Space_Grotesk'] text-2xl md:text-3xl font-medium text-[#555] mb-6 h-10"
          >
            <TypewriterText texts={roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-['DM_Sans'] text-lg text-[#666] leading-relaxed max-w-xl mb-10"
          >
            Senior developer with <strong className="text-[#111]">6 years of experience</strong> building
            robust, scalable software. Specializing in Java backend systems, JavaScript full-stack
            applications, and Python automation — from microservices to production-grade web platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 bg-[#111111] text-white font-['DM_Sans'] font-medium rounded-md hover:bg-[#3d3df5] transition-colors duration-200"
            >
              View Projects
            </button>
            <a
              href="mailto:rolexoridev@gmail.com"
              className="flex items-center gap-2 px-6 py-3 border border-[#111111] text-[#111111] font-['DM_Sans'] font-medium rounded-md hover:border-[#3d3df5] hover:text-[#3d3df5] transition-colors duration-200"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <a
              href="https://github.com/RolexOriDev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[#ddd] text-[#555] font-['DM_Sans'] font-medium rounded-md hover:border-[#3d3df5] hover:text-[#3d3df5] transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-[#e8e6e0]"
          >
            {[
              { value: "6+", label: "Years Experience" },
              { value: "20+", label: "Projects Delivered" },
              { value: "3", label: "Core Languages" },
              { value: "∞", label: "Lines of Code" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-['Space_Grotesk'] text-3xl font-bold text-[#111]">{stat.value}</div>
                <div className="font-['DM_Sans'] text-sm text-[#888] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#888] hover:text-[#3d3df5] transition-colors"
      >
        <span className="font-['DM_Sans'] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
