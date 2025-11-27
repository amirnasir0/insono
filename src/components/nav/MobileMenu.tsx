"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { MenuLink, MenuSection } from "./menuData";

type Props = {
  topLinks: MenuLink[];
  sections: MenuSection[];
  phone?: string;
  logoSrc?: string;
};

export default function MobileMenu({
  topLinks,
  sections,
  phone = "+916204260510",
  logoSrc = "/logo.webp",
}: Props) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Prevent background scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button
        aria-label="Open menu"
        className="md:hidden p-2 rounded focus:outline-none"
        onClick={() => setOpen(true)}
      >
        <Menu size={22} className="text-[#023784]" />
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black z-[60] backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed right-0 top-0 h-screen w-[90%] max-w-sm bg-white shadow-2xl z-[70] flex flex-col rounded-l-2xl"
              role="dialog"
              aria-modal="true"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <img src={logoSrc} alt="Logo" className="h-8 w-auto" />
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1 bg-[#f59e0b] text-black font-medium px-3 py-1.5 rounded-md hover:bg-yellow-500 transition text-sm"
                  >
                    <Phone size={16} />
                    Call
                  </a>
                  <button
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="p-1 rounded hover:bg-gray-100"
                  >
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
                {/* Top Links */}
                {topLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-[17px] font-semibold py-2 px-2 rounded hover:bg-gray-50 transition"
                  >
                    {l.label}
                  </Link>
                ))}

                {/* Accordion Sections */}
                <div className="space-y-4">
                  {sections.map((section) => {
                    const isOpen = expanded === section.label;
                    return (
                      <div
                        key={section.label}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          className="w-full flex justify-between items-center px-3 py-3 bg-gray-50 hover:bg-gray-100 transition"
                          onClick={() =>
                            setExpanded(isOpen ? null : section.label)
                          }
                        >
                          <span className="font-medium text-gray-800">
                            {section.label}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.ul
                              key="list"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-white"
                            >
                              {section.items.map((it) => (
                                <li key={it.href}>
                                  <Link
                                    href={it.href}
                                    onClick={() => setOpen(false)}
                                    className="block px-5 py-2 text-gray-700 hover:bg-gray-50 text-[15px]"
                                  >
                                    {it.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Bar (Optional for CTA) */}
              <div className="px-5 py-4 border-t bg-gray-50 text-center">
                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Insono Hearing
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
