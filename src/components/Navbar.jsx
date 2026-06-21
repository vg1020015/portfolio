import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext.jsx";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "stats", label: "Stats" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [activeId, setActiveId] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter(Boolean);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = activeId;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeId]);

  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    setMobileOpen(false);

    // Fixed navbar offset
    const navbarOffset = 110;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.pageYOffset;

    const offsetPosition =
      sectionPosition - navbarOffset;

    setTimeout(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
      w-[calc(100%-1rem)] sm:w-[95%] max-w-7xl transition-all duration-500
      ${
        scrolled
          ? "backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] rounded-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-orange-500/10 via-transparent to-red-500/10 blur-xl" />

      <div className="px-4 sm:px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo("hero")}
          className="relative"
        >
          <span className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent">
            VG
          </span>

          <div className="absolute inset-0 blur-xl bg-orange-500/30 rounded-full" />
        </motion.button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-3">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeId === link.id
                    ? "text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-white"
                }`}
              >
                {activeId === link.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {link.label}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="
              w-10 h-10
              rounded-full
              backdrop-blur-lg
              bg-white/10
              border border-white/10
              hover:border-orange-500
              hover:rotate-180
              transition-all duration-500
              flex items-center justify-center
            "
          >
            {theme === "dark" ? (
              <HiSun
                size={20}
                className="text-yellow-400"
              />
            ) : (
              <HiMoon
                size={20}
                className="text-gray-700"
              />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
            className="
              md:hidden
              w-10 h-10
              rounded-full
              backdrop-blur-lg
              bg-white/10
              border border-white/10
              flex items-center justify-center
            "
          >
            {mobileOpen ? (
              <HiX size={22} />
            ) : (
              <HiMenu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              md:hidden
              overflow-hidden
              backdrop-blur-xl
              bg-white/10
              dark:bg-black/20
              border-t border-white/10
            "
          >
            <ul className="py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() =>
                      scrollTo(link.id)
                    }
                    className={`w-full text-left px-6 py-4 transition-all ${
                      activeId === link.id
                        ? "text-orange-500 font-semibold"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
