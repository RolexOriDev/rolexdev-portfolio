/* SkillsSection — Precision Engineering design
   Skill categories with animated tags and proficiency bars
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: "☕",
    skills: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 92 },
      { name: "Spring Security", level: 88 },
      { name: "Hibernate / JPA", level: 85 },
      { name: "Maven / Gradle", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "Microservices", level: 85 },
    ],
  },
  {
    title: "Frontend & Full Stack",
    icon: "⚡",
    skills: [
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "React", level: 87 },
      { name: "Node.js", level: 85 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Python & Automation",
    icon: "🐍",
    skills: [
      { name: "Python", level: 88 },
      { name: "Django / Flask", level: 80 },
      { name: "Data Processing", level: 82 },
      { name: "Automation Scripts", level: 90 },
      { name: "Web Scraping", level: 85 },
      { name: "Pandas / NumPy", level: 75 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🛠",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 82 },
      { name: "Linux / Bash", level: 85 },
      { name: "MySQL / PostgreSQL", level: 88 },
      { name: "MongoDB", level: 78 },
      { name: "Redis", level: 75 },
      { name: "CI/CD Pipelines", level: 80 },
    ],
  },
];

const techTags = [
  "Java", "Spring Boot", "JavaScript", "TypeScript", "React", "Node.js",
  "Python", "Django", "Docker", "Git", "MySQL", "PostgreSQL", "MongoDB",
  "Redis", "REST API", "Microservices", "Linux", "Maven", "Gradle", "Next.js",
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="font-['JetBrains_Mono'] text-xs text-[#444]">{name}</span>
        <span className="font-['JetBrains_Mono'] text-xs text-[#3d3df5]">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#f0eee8] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#3d3df5] rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 bg-[#f8f7f4]">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="section-number">03 — Skills</span>
          <div className="h-px w-12 bg-[#3d3df5]" />
          <div className="section-divider flex-1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-[#111] mb-3">
            Technical Expertise
          </h2>
          <p className="font-['DM_Sans'] text-[#666] max-w-xl">
            Six years of building real software across multiple domains. These are the tools and
            technologies I use daily to ship production-ready code.
          </p>
        </motion.div>

        {/* Tech tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-16"
        >
          {techTags.map((tag, i) => (
            <motion.span
              key={tag}
              className="skill-tag"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.03 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + catIdx * 0.1 }}
              className="bg-white rounded-xl p-6 border border-[#e8e6e0] hover:border-[#3d3df5]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-[#111]">
                  {category.title}
                </h3>
              </div>
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={0.4 + catIdx * 0.1 + skillIdx * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
