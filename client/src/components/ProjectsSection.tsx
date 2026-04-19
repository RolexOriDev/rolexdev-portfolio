/* ProjectsSection — Precision Engineering design
   Editorial project cards with tech tags, numbered, hover lift effect
*/
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "MicroCommerce Platform",
    description:
      "A production-grade e-commerce backend built with Java Spring Boot microservices architecture. Features include order management, inventory tracking, payment gateway integration, and real-time notifications via WebSocket. Handles 10,000+ concurrent requests with Redis caching.",
    tags: ["Java", "Spring Boot", "Microservices", "Redis", "PostgreSQL", "Docker", "Kafka"],
    category: "Backend",
    highlights: ["10K+ concurrent users", "Sub-100ms response time", "99.9% uptime SLA"],
    github: "https://github.com/RolexOriDev",
    featured: true,
  },
  {
    number: "02",
    title: "DevTask — Project Management App",
    description:
      "Full-stack project management tool built with React + TypeScript frontend and Node.js/Express backend. Features drag-and-drop Kanban boards, real-time collaboration, role-based access control, and GitHub integration for linking commits to tasks.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io", "JWT", "REST API"],
    category: "Full Stack",
    highlights: ["Real-time collaboration", "GitHub integration", "Role-based access"],
    github: "https://github.com/RolexOriDev",
    featured: true,
  },
  {
    number: "03",
    title: "DataFlow — ETL Pipeline Engine",
    description:
      "Python-based ETL (Extract, Transform, Load) pipeline engine for processing large datasets. Supports multiple data sources (CSV, JSON, SQL databases, REST APIs), configurable transformation rules, and automated scheduling with error recovery.",
    tags: ["Python", "Pandas", "SQLAlchemy", "Celery", "PostgreSQL", "Docker", "Airflow"],
    category: "Python / Data",
    highlights: ["Processes 1M+ records/hour", "Configurable pipelines", "Auto error recovery"],
    github: "https://github.com/RolexOriDev",
    featured: false,
  },
  {
    number: "04",
    title: "SecureAuth — JWT Auth Library",
    description:
      "A reusable Java library for enterprise authentication and authorization. Implements JWT token management, OAuth2 integration, rate limiting, and audit logging. Used across multiple internal projects to standardize security practices.",
    tags: ["Java", "Spring Security", "JWT", "OAuth2", "Maven", "JUnit"],
    category: "Backend / Library",
    highlights: ["OAuth2 compliant", "Rate limiting built-in", "Full audit trail"],
    github: "https://github.com/RolexOriDev",
    featured: false,
  },
  {
    number: "05",
    title: "PriceWatch — Market Tracker",
    description:
      "Python web scraping and monitoring tool that tracks product prices across multiple e-commerce platforms. Sends automated alerts via email/Telegram when prices drop below thresholds. Features a React dashboard for visualization.",
    tags: ["Python", "BeautifulSoup", "Selenium", "React", "Chart.js", "SQLite", "Telegram API"],
    category: "Python / Automation",
    highlights: ["Multi-platform tracking", "Instant price alerts", "Historical charts"],
    github: "https://github.com/RolexOriDev",
    featured: false,
  },
  {
    number: "06",
    title: "ChatAPI — Real-time Messaging",
    description:
      "Scalable real-time chat API built with Node.js and Socket.io. Supports private messaging, group channels, file sharing, message history with pagination, and end-to-end encryption. Deployed with Docker and Nginx.",
    tags: ["Node.js", "Socket.io", "Express", "MongoDB", "Redis", "Docker", "Nginx"],
    category: "Full Stack",
    highlights: ["E2E encryption", "File sharing", "Horizontal scaling"],
    github: "https://github.com/RolexOriDev",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Backend": "bg-blue-50 text-blue-700 border-blue-200",
  "Full Stack": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Python / Data": "bg-green-50 text-green-700 border-green-200",
  "Backend / Library": "bg-purple-50 text-purple-700 border-purple-200",
  "Python / Automation": "bg-yellow-50 text-yellow-700 border-yellow-200",
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
        project.featured
          ? "border-[#3d3df5]/30 shadow-md"
          : "border-[#e8e6e0] hover:border-[#3d3df5]/30"
      } hover:shadow-lg`}
    >
      {project.featured && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#3d3df5]" />
      )}

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="font-['JetBrains_Mono'] text-xs font-medium text-[#3d3df5] opacity-60">
              {project.number}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded border font-['DM_Sans'] font-medium ${categoryColors[project.category] || "bg-gray-50 text-gray-600 border-gray-200"}`}>
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#888] hover:text-[#3d3df5] transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <motion.div
              animate={{ rotate: hovered ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={16} className={`transition-colors ${hovered ? "text-[#3d3df5]" : "text-[#ccc]"}`} />
            </motion.div>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#111] mb-3 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-['DM_Sans'] text-sm text-[#666] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.highlights.map((h) => (
            <span key={h} className="flex items-center gap-1 font-['DM_Sans'] text-xs text-[#555]">
              <span className="w-1 h-1 rounded-full bg-[#3d3df5] inline-block" />
              {h}
            </span>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#f0eee8]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-['JetBrains_Mono'] text-xs px-2 py-0.5 bg-[#f8f7f4] text-[#555] rounded border border-[#e8e6e0]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="section-number">04 — Projects</span>
          <div className="h-px w-12 bg-[#3d3df5]" />
          <div className="section-divider flex-1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-[#111] mb-3">
              Selected Work
            </h2>
            <p className="font-['DM_Sans'] text-[#666] max-w-xl">
              A curated selection of projects that demonstrate depth across backend engineering,
              full-stack development, and Python automation.
            </p>
          </div>
          <a
            href="https://github.com/RolexOriDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#111] text-[#111] font-['DM_Sans'] text-sm font-medium rounded-md hover:bg-[#111] hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            <Github size={15} />
            View All on GitHub
            <ExternalLink size={13} className="opacity-60" />
          </a>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
