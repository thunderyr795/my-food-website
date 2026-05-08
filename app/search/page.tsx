"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { RecipeCard } from "@/components/RecipeCard";
import { SectionHeader } from "@/components/SectionHeader";
import { categories, recipes } from "@/data/recipes";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("全部");

  const results = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesQuery = [recipe.title, recipe.subtitle, recipe.category].some((value) =>
        value.toLowerCase().includes(query.trim().toLowerCase())
      );
      const matchesCategory = category === "全部" || recipe.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [category, query]);

  return (
    <main className="px-5 pb-10">
      <section className="mx-auto max-w-7xl pt-8">
        <SectionHeader eyebrow="Search" title="搜索你的下一顿灵感" description="输入菜名、风味或场景，用更轻的方式找到想做的那一道。" />
        <div className="glass flex flex-col gap-4 rounded-[2rem] p-4 shadow-soft md:flex-row md:items-center">
          <div className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 py-4">
            <Search size={20} className="text-ink/38" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索三文鱼、凉面、低卡..."
              className="w-full bg-transparent text-base text-ink outline-none placeholder:text-ink/34"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white md:flex">
              <SlidersHorizontal size={18} />
            </span>
            {["全部", ...categories.map((item) => item.name)].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full px-4 py-3 text-sm font-medium transition ${
                  category === item ? "bg-ink text-white" : "bg-white text-ink/58 hover:text-ink"
                }`}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl">
        <p className="mb-6 text-sm text-ink/48">找到 {results.length} 道菜谱</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((recipe, index) => (
            <RecipeCard key={recipe.slug} recipe={recipe} index={index} />
          ))}
        </div>
        {results.length === 0 ? (
          <div className="rounded-[2rem] bg-white/78 p-10 text-center shadow-soft">
            <p className="text-lg font-semibold">没有找到匹配菜谱</p>
            <p className="mt-2 text-sm text-ink/50">换一个关键词，或者从分类筛选重新开始。</p>
          </div>
        ) : null}
      </section>
    </main>
  );
}
