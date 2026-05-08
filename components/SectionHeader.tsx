type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-tomato">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">{title}</h2>
      </div>
      {description ? <p className="max-w-md text-sm leading-7 text-ink/58 md:text-base">{description}</p> : null}
    </div>
  );
}
