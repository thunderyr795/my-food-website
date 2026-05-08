"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark, Clock3, Flame } from "lucide-react";
import { motion } from "framer-motion";
import type { Recipe } from "@/data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
  index?: number;
};

export function RecipeCard({ recipe, index = 0 }: RecipeCardProps) {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.62, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-porcelain shadow-soft transition duration-500 group-hover:-translate-y-1 group-hover:shadow-lift">
        <Link href={`/recipes/${recipe.slug}`} className="block">
          <div className="image-sheen relative aspect-[4/5] overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent p-5 pt-20 text-white">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/72">{recipe.category}</p>
            <h3 className="mt-2 text-2xl font-semibold">{recipe.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="flex items-center gap-1 rounded-full bg-white/18 px-3 py-1.5 backdrop-blur">
                <Clock3 size={14} /> {recipe.time}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-white/18 px-3 py-1.5 backdrop-blur">
                <Flame size={14} /> {recipe.difficulty}
              </span>
            </div>
          </div>
        </Link>
        <button
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/88 text-ink shadow-sm backdrop-blur transition hover:bg-ink hover:text-white"
          aria-label={`收藏 ${recipe.title}`}
          type="button"
        >
          <Bookmark size={18} />
        </button>
      </div>
    </motion.article>
  );
}
