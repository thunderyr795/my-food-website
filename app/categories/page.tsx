import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RecipeCard } from "@/components/RecipeCard";
import { SectionHeader } from "@/components/SectionHeader";
import { categories, recipes } from "@/data/recipes";

type CategoriesPageProps = {
  searchParams?: {
    type?: string;
  };
};

export default function CategoriesPage({ searchParams }: CategoriesPageProps) {
  const selected = categories.find((category) => category.slug === searchParams?.type);
  const visibleRecipes = selected ? recipes.filter((recipe) => recipe.category === selected.name) : recipes;

  return (
    <main className="px-5 pb-10">
      <section className="mx-auto max-w-7xl pt-8">
        <SectionHeader
          eyebrow="Categories"
          title={selected ? selected.name : "按场景找到下一餐"}
          description="从早午餐、轻食、一人食到烘焙甜点，给不同心情一个快速入口。"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const active = selected?.slug === category.slug;
            return (
              <Link
                key={category.slug}
                href={`/categories?type=${category.slug}`}
                className={`group relative overflow-hidden rounded-[2rem] shadow-soft transition hover:-translate-y-1 ${active ? "ring-2 ring-ink" : ""}`}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 text-white">
                  <div>
                    <h2 className="text-2xl font-semibold">{category.name}</h2>
                    <p className="mt-1 text-sm text-white/62">{category.count} 道灵感</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/18 backdrop-blur">
                    <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <SectionHeader eyebrow="Recipes" title={selected ? `${selected.name}精选` : "全部精选菜谱"} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleRecipes.map((recipe, index) => (
            <RecipeCard key={recipe.slug} recipe={recipe} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
