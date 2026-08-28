import type { ReactNode } from 'react';

interface SectionHeaderProps {
  index: string;
  title: ReactNode;
  emphasis: string;
  summary: string;
}

export default function SectionHeader({
  index,
  title,
  emphasis,
  summary,
}: SectionHeaderProps) {
  return (
    <header className="mb-14 grid items-end gap-5 md:grid-cols-[160px_1fr_260px] md:gap-10">
      <p className="font-['Google_Sans_Code'] text-[0.65rem] font-medium tracking-[0.12em] text-[#ff9ffc] uppercase">
        {index}
      </p>
      <h2 className="m-0 text-[clamp(2.7rem,4.4vw,4.5rem)] leading-none font-medium tracking-[-0.06em]">
        {title}
        <br />
        <em className="font-light not-italic text-[#c6bdca]">{emphasis}</em>
      </h2>
      <span className="max-w-lg text-xs leading-relaxed text-[#938b99]">
        {summary}
      </span>
    </header>
  );
}
