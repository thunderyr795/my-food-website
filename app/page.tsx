import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Timer, Utensils } from "lucide-react";
import { AnimatedSection, MotionItem } from "@/components/AnimatedSection";
import { RecipeCard } from "@/components/RecipeCard";
import { SectionHeader } from "@/components/SectionHeader";
import { categories, recipes } from "@/data/recipes";
import { fadeUp } from "@/lib/motion";

export default function Home() {
  const heroRecipe = recipes[0];
  const popularRecipes = recipes.slice(1, 5);
  const todayRecipe = recipes[5];

  return (
    <main className="overflow-hidden px-5 pb-10">
      <section className="mx-auto grid max-w-7xl gap-8 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pt-14">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm text-ink/62 shadow-sm backdrop-blur">
            <Sparkles size={16} className="text-tomato" />
            今日灵感：把普通晚餐做成值得收藏的一页
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            让每一道菜，都像被认真设计过。
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-9 text-ink/60">
            极简高级的食谱体验，突出食物本身的颜色、质感和步骤节奏。适合下班后的快手餐，也适合周末慢慢做。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/recipes/${heroRecipe.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-lift transition hover:-translate-y-0.5"
            >
              查看今日推荐 <ArrowRight size={17} />
            </Link>
            <Link
              href="/categories"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/12 bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
            >
              浏览分类
            </Link>
          </div>
        </div>

        <Link href={`/recipes/${heroRecipe.slug}`} className="group relative block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-lift lg:aspect-[5/6]">
            <Image
              src={heroRecipe.image}
              alt={heroRecipe.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">
              <p className="text-sm text-white/70">Editor's Choice</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-5xl">{heroRecipe.title}</h2>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="flex items-center gap-2 rounded-full bg-white/18 px-4 py-2 backdrop-blur">
                  <Timer size={16} /> {heroRecipe.time}
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white/18 px-4 py-2 backdrop-blur">
                  <Utensils size={16} /> {heroRecipe.difficulty}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <AnimatedSection className="mx-auto mt-24 max-w-7xl">
        <MotionItem variants={fadeUp}>
          <SectionHeader eyebrow="Popular" title="热门菜谱" description="用高质感图片和轻量信息帮助用户快速判断今天想吃什么。" />
        </MotionItem>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {popularRecipes.map((recipe, index) => (
            <RecipeCard key={recipe.slug} recipe={recipe} index={index} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto mt-24 max-w-7xl">
        <MotionItem variants={fadeUp}>
          <SectionHeader eyebrow="Today" title="今日推荐" description="一道能撑起餐桌气氛的家常菜，步骤短，成品感强。" />
        </MotionItem>
        <MotionItem variants={fadeUp}>
          <Link
            href={`/recipes/${todayRecipe.slug}`}
            className="group grid overflow-hidden rounded-[2.5rem] bg-ink text-white shadow-lift lg:grid-cols-[0.92fr_1.08fr]"
          >
            <div className="relative min-h-[360px]">
              <Image
                src={todayRecipe.image}
                alt={todayRecipe.title}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-sm uppercase tracking-[0.28em] text-white/52">{todayRecipe.category}</p>
              <h3 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{todayRecipe.title}</h3>
              <p className="mt-5 max-w-lg text-lg leading-8 text-white/62">{todayRecipe.subtitle}</p>
              <div className="mt-8 grid max-w-md grid-cols-3 gap-3 text-center">
                <div className="rounded-3xl bg-white/10 p-4">
                  <p className="text-2xl font-semibold">{todayRecipe.calories}</p>
                  <p className="mt-1 text-xs text-white/48">kcal</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-4">
                  <p className="text-2xl font-semibold">{todayRecipe.protein}</p>
                  <p className="mt-1 text-xs text-white/48">蛋白质</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-4">
                  <p className="text-2xl font-semibold">{todayRecipe.time}</p>
                  <p className="mt-1 text-xs text-white/48">制作</p>
                </div>
              </div>
            </div>
          </Link>
        </MotionItem>
      </AnimatedSection>

      <AnimatedSection className="mx-auto mt-24 max-w-7xl">
        <MotionItem variants={fadeUp}>
          <SectionHeader eyebrow="Collections" title="分类入口" description="从场景出发组织菜谱，移动端也保持清晰、轻盈和可扫读。" />
        </MotionItem>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <MotionItem key={category.slug} variants={fadeUp}>
              <Link href={`/categories?type=${category.slug}`} className="group relative block overflow-hidden rounded-[2rem]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/66 via-black/12 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-2xl font-semibold">{category.name}</h3>
                  <p className="mt-1 text-sm text-white/66">{category.count} 道灵感</p>
                </div>
              </Link>
            </MotionItem>
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
