"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

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

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const showSolidBg = scrolled;
  const isDarkPage = isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        showSolidBg
          ? "bg-white/80 backdrop-blur-xl border-black/[0.06] py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Zilson Fiber"
              width={32}
              height={32}
              priority
              className="block h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-text-primary">
              Zilson
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>

            {/* Carbon Fiber Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("carbon")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink href="/carbon-fiber" hasDropdown>
                Carbon Fiber
              </NavLink>
              <div
                className={`absolute top-full left-0 pt-4 w-64 transition-all duration-200 ${
                  activeDropdown === "carbon"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white border border-black/[0.06] p-4 shadow-lg rounded-lg">
                <p className="type-caption text-carbon-accent mb-3">
                  Carbon Fiber Products
                </p>
                {carbonProducts.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-black/[0.03] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-black/[0.06] mt-3 pt-3">
                  <Link
                    href="/carbon-fiber/products"
                    className="text-sm font-medium text-carbon-accent hover:text-text-primary transition-colors"
                  >
                    View All →
                  </Link>
                </div>
                </div>
              </div>
            </div>

            {/* Glass Fiber Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("glass")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink href="/glass-fiber" hasDropdown>
                Glass Fiber
              </NavLink>
              <div
                className={`absolute top-full left-0 pt-4 w-64 transition-all duration-200 ${
                  activeDropdown === "glass"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white border border-black/[0.06] p-4 shadow-lg rounded-lg">
                <p className="type-caption text-glass-accent mb-3">
                  Glass Fiber Products
                </p>
                {glassProducts.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-black/[0.03] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-black/[0.06] mt-3 pt-3">
                  <Link
                    href="/glass-fiber/products"
                    className="text-sm font-medium text-glass-accent hover:text-text-primary transition-colors"
                  >
                    View All →
                  </Link>
                </div>
                </div>
              </div>
            </div>

            <NavLink href="/applications">Applications</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium rounded-full transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            >
              Get Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-primary"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-wide">
          <div className="mt-4 border-t border-black/[0.06] py-6 space-y-4">
            <div>
              <p className="type-caption text-carbon-accent mb-2">
                Carbon Fiber
              </p>
              {carbonProducts.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="block py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              <p className="type-caption text-glass-accent mb-2">
                Glass Fiber
              </p>
              {glassProducts.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="block py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-black/[0.06] pt-4 space-y-3">
              <Link href="/applications" onClick={closeMobile} className="block text-sm font-medium text-text-secondary hover:text-text-primary">Applications</Link>
              <Link href="/services" onClick={closeMobile} className="block text-sm font-medium text-text-secondary hover:text-text-primary">Services</Link>
              <Link href="/blog" onClick={closeMobile} className="block text-sm font-medium text-text-secondary hover:text-text-primary">Blog</Link>
              <Link href="/about" onClick={closeMobile} className="block text-sm font-medium text-text-secondary hover:text-text-primary">About</Link>
            </div>
            <Link
              href="/contact"
              onClick={closeMobile}
              className="block w-full text-center px-5 py-3 bg-accent-500 text-white text-sm font-medium rounded-full"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  hasDropdown = false,
}: {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
    >
      {children}
      {hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
    </Link>
  );
}
