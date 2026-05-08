import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, Flame, HeartPulse } from "lucide-react";
import { AnimatedSection, MotionItem } from "@/components/AnimatedSection";
import { getRecipeBySlug, recipes } from "@/data/recipes";
import { fadeUp } from "@/lib/motion";

type RecipePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = getRecipeBySlug(params.slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="px-5 pb-10">
      <section className="mx-auto max-w-7xl pt-6">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-ink/56 transition hover:text-ink">
          <ArrowLeft size={17} /> 返回首页
        </Link>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="pb-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-tomato">{recipe.category}</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-ink md:text-7xl">{recipe.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-ink/58">{recipe.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-ink shadow-sm">
                <Clock3 size={16} /> {recipe.time}
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-ink shadow-sm">
                <Flame size={16} /> {recipe.difficulty}
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-ink shadow-sm">
                <HeartPulse size={16} /> {recipe.calories} kcal
              </span>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-lift lg:aspect-[5/4]">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <AnimatedSection className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <MotionItem variants={fadeUp} className="rounded-[2rem] bg-white/78 p-6 shadow-soft backdrop-blur md:p-8">
          <h2 className="text-2xl font-semibold">食材列表</h2>
          <div className="mt-6 grid gap-3">
            {recipe.ingredients.map((ingredient) => (
              <div key={ingredient} className="flex items-center justify-between rounded-2xl bg-porcelain/70 px-4 py-3 text-sm">
                <span>{ingredient}</span>
                <span className="h-2 w-2 rounded-full" style={{ background: recipe.accent }} />
              </div>
            ))}
          </div>
        </MotionItem>

        <MotionItem variants={fadeUp} className="rounded-[2rem] bg-ink p-6 text-white shadow-lift md:p-8">
          <h2 className="text-2xl font-semibold">营养信息</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["热量", `${recipe.calories} kcal`],
              ["蛋白质", recipe.protein],
              ["碳水", recipe.carbs],
              ["脂肪", recipe.fat]
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm text-white/48">{label}</p>
                <p className="mt-2 text-2xl font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </MotionItem>
      </AnimatedSection>

      <AnimatedSection className="mx-auto mt-16 max-w-7xl">
        <MotionItem variants={fadeUp}>
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-tomato">Timeline</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">制作步骤</h2>
          </div>
        </MotionItem>
        <div className="grid gap-6">
          {recipe.steps.map((step, index) => (
            <MotionItem
              key={step.title}
              variants={fadeUp}
              className="grid overflow-hidden rounded-[2rem] bg-white/78 shadow-soft backdrop-blur lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div className="relative min-h-[260px]">
                <Image src={step.image} alt={step.title} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
              </div>
              <div className="flex gap-5 p-6 md:p-8">
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-3 h-full w-px bg-ink/10" />
                </div>
                <div>
                  <p className="text-sm font-medium text-tomato">{step.time}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-ink/58">{step.detail}</p>
                </div>
              </div>
            </MotionItem>
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
