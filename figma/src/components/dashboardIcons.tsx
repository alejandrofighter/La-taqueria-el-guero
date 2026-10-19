import type { FC } from "react";

export type DashboardIconKind =
  | "briefcase"
  | "invoice"
  | "bookOpen"
  | "booksStack"
  | "cash"
  | "barChart"
  | "taco"
  | "easel"
  | "register"
  | "gear"
  | "moneyBag";

interface IconProps {
  size?: number;
  className?: string;
}

export const BriefcaseIcon: FC<IconProps> = ({ size = 36, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="6" y="17" width="36" height="22" rx="3" fill="#8a6a4d" stroke="#5c4530" strokeWidth="2" />
    <rect x="18" y="10" width="12" height="9" rx="2" fill="none" stroke="#5c4530" strokeWidth="2.5" />
    <rect x="6" y="24" width="36" height="6" fill="#5c4530" />
    <rect x="21" y="24" width="6" height="6" rx="1" fill="#d9c6ab" />
  </svg>
);

export const InvoiceIcon: FC<IconProps> = ({ size = 36, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="8" y="7" width="26" height="34" rx="2" fill="#fbfbf9" stroke="#c9c4b8" strokeWidth="2" />
    <line x1="13" y1="15" x2="29" y2="15" stroke="#9aa0a6" strokeWidth="2" />
    <line x1="13" y1="21" x2="29" y2="21" stroke="#9aa0a6" strokeWidth="2" />
    <line x1="13" y1="27" x2="24" y2="27" stroke="#9aa0a6" strokeWidth="2" />
    <circle cx="34" cy="33" r="9" fill="#d64b3f" />
    <path d="M29.5 33.2 32.6 36.2 38.5 29.8" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const BookOpenIcon: FC<IconProps> = ({ size = 36, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M24 13c-4-3-10-4-15-3v25c5-1 11 0 15 3 4-3 10-4 15-3V10c-5-1-11 0-15 3Z" fill="#f6efd9" stroke="#c7ab6b" strokeWidth="2" strokeLinejoin="round" />
    <line x1="24" y1="13" x2="24" y2="38" stroke="#c7ab6b" strokeWidth="2" />
    <circle cx="24" cy="30" r="1.6" fill="#c1440e" />
  </svg>
);

export const BooksStackIcon: FC<IconProps> = ({ size = 36, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="9" y="12" width="26" height="7" rx="1.5" fill="#4f7fb0" transform="rotate(-4 22 15)" />
    <rect x="10" y="19" width="27" height="7" rx="1.5" fill="#e2a23b" transform="rotate(2 23 22)" />
    <rect x="8" y="27" width="28" height="9" rx="1.5" fill="#d64b3f" />
    <rect x="10" y="29" width="24" height="1.6" fill="white" opacity="0.6" />
  </svg>
);

export const CashIcon: FC<IconProps> = ({ size = 36, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="5" y="14" width="38" height="20" rx="2.5" fill="#5a9e5a" stroke="#3f7a3f" strokeWidth="2" />
    <circle cx="24" cy="24" r="6.5" fill="#eef7ea" stroke="#3f7a3f" strokeWidth="1.6" />
    <text x="24" y="28" textAnchor="middle" fontSize="9" fontWeight="700" fill="#3f7a3f" fontFamily="sans-serif">$</text>
    <circle cx="10" cy="18" r="1.4" fill="#eef7ea" />
    <circle cx="38" cy="30" r="1.4" fill="#eef7ea" />
  </svg>
);

export const BarChartIcon: FC<IconProps> = ({ size = 36, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="7" y="26" width="8" height="14" rx="1" fill="#4f7fb0" />
    <rect x="20" y="14" width="8" height="26" rx="1" fill="#3f9e58" />
    <rect x="33" y="20" width="8" height="20" rx="1" fill="#e2a23b" />
    <line x1="4" y1="41" x2="44" y2="41" stroke="#8a6a4d" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const TacoIcon: FC<IconProps> = ({ size = 36, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M6 26a18 12 0 0 1 36 0Z" fill="#e8b95a" stroke="#b8873a" strokeWidth="2" strokeLinejoin="round" />
    <path d="M11 24c3-2 7-3 13-3s10 1 13 3" stroke="#3f9e58" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M13 27c3-1 6-2 11-2s8 1 11 2" stroke="#d64b3f" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

export const EaselIcon: FC<IconProps> = ({ size = 36, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="10" y="10" width="24" height="17" rx="1.5" fill="#2b2b2b" stroke="#7a5a38" strokeWidth="2" />
    <line x1="14" y1="16" x2="27" y2="16" stroke="#e8dcc4" strokeWidth="1.6" />
    <line x1="14" y1="20" x2="23" y2="20" stroke="#e8dcc4" strokeWidth="1.6" />
    <path d="M22 27 12 41M26 27 36 41M15 36h18" stroke="#7a5a38" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

export const RegisterIcon: FC<IconProps> = ({ size = 36, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="8" y="20" width="32" height="18" rx="2" fill="#5c6b78" stroke="#333d45" strokeWidth="2" />
    <rect x="12" y="10" width="24" height="12" rx="2" fill="#8a99a6" stroke="#333d45" strokeWidth="2" />
    <rect x="16" y="13" width="16" height="5" rx="1" fill="#dfe9ee" />
    {[0, 1, 2].map((r) =>
      [0, 1, 2].map((c) => (
        <rect key={`${r}-${c}`} x={13 + c * 8} y={25 + r * 4} width="5" height="2.6" rx="0.6" fill="#dfe9ee" />
      ))
    )}
  </svg>
);

export const GearIcon: FC<IconProps> = ({ size = 44, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path
      d="m24 6 2.6 4.5 5.1-1.2 1.2 5.1L37.4 17l-1.2 5.1 4.5 2.6-2.6 4.6 3.3 4-4 3.3-1.2 5.2-5.1-1.2-2.6 4.5-4.5-2.6-4.6 2.6-2.6-4.5-5.1 1.2-1.2-5.2-5.2-1.2 1.2-5.1L2.9 24l4.6-2.6L6.3 16l5.1-1.2 1.2-5.1 5.1 1.2Z"
      fill="#6a6f76"
      stroke="#3a3d42"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="24" r="7" fill="#aeb3ba" stroke="#3a3d42" strokeWidth="1.5" />
  </svg>
);

export const MoneyBagIcon: FC<IconProps> = ({ size = 44, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M18 10h12l4 7-3 3H17l-3-3Z" fill="#8a6a4d" />
    <path d="M15 20h18c4 6 5 12 2 18-3 5-9 6-11 6s-8-1-11-6c-3-6-2-12 2-18Z" fill="#c89b3c" stroke="#8a641f" strokeWidth="2" />
    <circle cx="24" cy="30" r="6" fill="#f6efd9" stroke="#8a641f" strokeWidth="1.4" />
    <text x="24" y="34" textAnchor="middle" fontSize="8" fontWeight="700" fill="#8a641f" fontFamily="sans-serif">$</text>
  </svg>
);

export const dashboardIconMap: Record<DashboardIconKind, FC<IconProps>> = {
  briefcase: BriefcaseIcon,
  invoice: InvoiceIcon,
  bookOpen: BookOpenIcon,
  booksStack: BooksStackIcon,
  cash: CashIcon,
  barChart: BarChartIcon,
  taco: TacoIcon,
  easel: EaselIcon,
  register: RegisterIcon,
  gear: GearIcon,
  moneyBag: MoneyBagIcon,
};
