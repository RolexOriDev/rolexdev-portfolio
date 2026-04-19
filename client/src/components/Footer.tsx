/* Footer — Precision Engineering design
   Clean, minimal footer with links and copyright
*/
import { Github, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#111111] text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="font-['Space_Grotesk'] text-xl font-bold mb-1">
              Rolex<span className="text-[#3d3df5]">Dev</span>
            </div>
            <p className="font-['DM_Sans'] text-sm text-white/50 max-w-xs">
              Senior Full Stack Developer · Java · JavaScript · Python
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div>
              <div className="font-['DM_Sans'] text-xs text-white/40 uppercase tracking-widest mb-3">Navigation</div>
              <div className="flex flex-col gap-2">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                    className="font-['DM_Sans'] text-sm text-white/60 hover:text-white transition-colors text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="font-['DM_Sans'] text-xs text-white/40 uppercase tracking-widest mb-3">Contact</div>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:rolexoridev@gmail.com"
                  className="flex items-center gap-2 font-['DM_Sans'] text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail size={13} />
                  rolexoridev@gmail.com
                </a>
                <a
                  href="https://github.com/RolexOriDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-['DM_Sans'] text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Github size={13} />
                  github.com/RolexOriDev
                </a>
              </div>
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg font-['DM_Sans'] text-sm text-white/60 hover:text-white hover:border-white/40 transition-colors"
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['DM_Sans'] text-xs text-white/30">
            © {new Date().getFullYear()} RolexDev. Built with React + TypeScript.
          </p>
          <div className="flex items-center gap-1 font-['JetBrains_Mono'] text-xs text-white/20">
            <span className="text-[#3d3df5]">{"</>"}</span>
            <span>with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
