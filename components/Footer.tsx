import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-ink/56 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-ink">Mise Studio</p>
          <p className="mt-2 max-w-md">把日常三餐做得更漂亮，也更容易开始。</p>
        </div>
        <div className="flex gap-5">
          <Link href="/categories" className="hover:text-ink">分类</Link>
          <Link href="/search" className="hover:text-ink">搜索</Link>
          <Link href="/recipes/miso-salmon-rice" className="hover:text-ink">今日推荐</Link>
        </div>
      </div>
    </footer>
  );
}
