"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChefHat, Search } from "lucide-react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/categories", label: "分类" },
  { href: "/search", label: "搜索" }
];

export function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 mx-auto w-full px-4 py-4 sm:px-6"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 shadow-soft sm:px-5">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
            <ChefHat size={18} />
          </span>
          Mise Studio
        </Link>
        <div className="hidden items-center gap-7 text-sm text-ink/62 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/search"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          aria-label="打开搜索"
        >
          <Search size={18} />
        </Link>
      </nav>
    </motion.header>
  );
}
