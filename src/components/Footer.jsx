import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "../data/portfolioData.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink/10 dark:border-paper/10">

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-14">

        {/* MAIN ROW */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">

          {/* LEFT */}
          <div>
            <h3 className="text-lg font-semibold">
              {profile.name}
            </h3>

            <p className="text-sm text-ink/60 dark:text-paper/60 mt-1 max-w-md">
              Shopify Developer focused on building fast, conversion-driven storefronts.
            </p>

            <p className="text-xs text-ink/40 dark:text-paper/40 mt-4">
              © {year} All rights reserved.
            </p>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex items-center gap-6">

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/60 hover:text-terracotta transition"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-ink/60 hover:text-terracotta transition"
            >
              <HiOutlineMail size={18} />
            </a>

          </div>
        </div>

        {/* SIGNATURE BAR */}
        <div className="mt-10 pt-6 border-t border-ink/5 dark:border-paper/5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-[11px] tracking-widest text-ink/30 dark:text-paper/30 uppercase">
            Built with React • Designed for performance
          </p>

          <p className="text-[11px] text-ink/30 dark:text-paper/30">
            Minimal • Fast • Conversion focused
          </p>

        </div>

      </div>
    </footer>
  );
}