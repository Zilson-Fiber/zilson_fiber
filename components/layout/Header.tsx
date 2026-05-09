"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const carbonProducts = [
  { name: "Carbon Fiber Mat", href: "/carbon-fiber/products/carbon-fiber-mat" },
  { name: "Carbon Fiber Cloth", href: "/carbon-fiber/products/carbon-fiber-cloth" },
  { name: "Carbon Fiber Raw Materials", href: "/carbon-fiber/products/carbon-fiber-raw" },
];

const glassProducts = [
  { name: "Fiberglass Tissue Mat", href: "/glass-fiber/products/tissue-mat" },
  { name: "Fiberglass Cloth", href: "/glass-fiber/products/fiberglass-cloth" },
  { name: "Composite Mat", href: "/glass-fiber/products/composite-mat" },
  { name: "Chopped Strand Mat", href: "/glass-fiber/products/chopped-strand-mat" },
  { name: "Other Fiber Materials", href: "/glass-fiber/products/other-materials" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolidBg = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Zilson Fiber"
              width={50}
              height={14}
              priority
            />
            <span className={`text-xl font-bold ${showSolidBg ? "text-neutral-900" : "text-white"}`}>
              Zilson
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Home */}
            <Link
              href="/"
              className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors"
            >
              Home
            </Link>
            {/* Carbon Fiber Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("carbon")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/carbon-fiber"
                className="flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors"
              >
                Carbon Fiber
                <ChevronDown className="w-4 h-4" />
              </Link>
              <AnimatePresence>
                {activeDropdown === "carbon" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-neutral-100 p-4"
                  >
                    <p className="text-xs font-semibold text-carbon-accent uppercase tracking-wider mb-3">
                      Carbon Fiber Products
                    </p>
                    {carbonProducts.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-brand-600 rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="border-t border-neutral-100 mt-3 pt-3">
                      <Link
                        href="/carbon-fiber/products"
                        className="text-sm font-medium text-brand-600 hover:text-brand-700"
                      >
                        View All →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Glass Fiber Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("glass")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/glass-fiber"
                className="flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors"
              >
                Glass Fiber
                <ChevronDown className="w-4 h-4" />
              </Link>
              <AnimatePresence>
                {activeDropdown === "glass" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-neutral-100 p-4"
                  >
                    <p className="text-xs font-semibold text-glass-accent uppercase tracking-wider mb-3">
                      Glass Fiber Products
                    </p>
                    {glassProducts.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-brand-600 rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="border-t border-neutral-100 mt-3 pt-3">
                      <Link
                        href="/glass-fiber/products"
                        className="text-sm font-medium text-brand-600 hover:text-brand-700"
                      >
                        View All →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/services"
              className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-full transition-colors"
            >
              Get Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-neutral-700"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <div>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Carbon Fiber
                </p>
                {carbonProducts.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-neutral-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Glass Fiber
                </p>
                {glassProducts.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-neutral-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-neutral-100 pt-4 space-y-3">
                <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-neutral-700">Services</Link>
                <Link href="/blog" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-neutral-700">Blog</Link>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-neutral-700">About</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-neutral-700">Contact</Link>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-accent-500 text-white text-sm font-semibold rounded-full"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
