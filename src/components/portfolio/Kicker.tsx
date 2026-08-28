import type { ReactNode } from 'react';

interface KickerProps {
  children: ReactNode;
}

export default function Kicker({ children }: KickerProps) {
  return (
    <p className="flex items-center gap-2 font-['Google_Sans_Code'] text-[0.65rem] font-medium tracking-[0.12em] text-[#c2bac7] uppercase">
      <span className="size-[7px] rounded-full bg-[#ff9ffc] shadow-[0_0_14px_#ff9ffc]" />
      {children}
    </p>
  );
}
