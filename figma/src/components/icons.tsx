import type { FC } from "react";

export type IconKind = "house" | "crown" | "sun" | "moon" | "key" | "lock";

interface IconProps {
  size?: number;
  className?: string;
}

export const HouseIcon: FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path
      d="M6 22 24 7l18 15"
      stroke="#c1440e"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 19v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V19"
      stroke="#8f3009"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="20" y="27" width="8" height="14" rx="1" fill="#c1440e" />
    <rect x="14" y="24" width="6" height="6" rx="1" stroke="#8f3009" strokeWidth="2" />
  </svg>
);

export const CrownIcon: FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path
      d="M8 20 15 26 24 12 33 26 40 20 37 34H11L8 20Z"
      fill="#b8873a"
      stroke="#8a641f"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="9" r="2.6" fill="#8a641f" />
    <circle cx="8" cy="17" r="2.3" fill="#8a641f" />
    <circle cx="40" cy="17" r="2.3" fill="#8a641f" />
    <rect x="11" y="34" width="26" height="4" rx="1" fill="#8a641f" />
  </svg>
);

export const SunIcon: FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="20" cy="16" r="8" fill="#f2b13a" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <line
        key={deg}
        x1="20"
        y1="16"
        x2="20"
        y2="16"
        stroke="#ad8438"
        strokeWidth="2.5"
        strokeLinecap="round"
        transform={`rotate(${deg} 20 16) translate(0 -14)`}
      />
    ))}
    <path d="M8 34a7 7 0 0 1 13-3.5A6 6 0 0 1 30 34Z" fill="#2f7fb8" opacity="0.85" />
    <path d="M16 38a6 6 0 0 1 11-3 5 5 0 0 1 9 3Z" fill="#2f7fb8" />
  </svg>
);

export const MoonIcon: FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M28 8a14 14 0 1 0 12 20A11 11 0 0 1 28 8Z" fill="#313a63" />
    <circle cx="17" cy="15" r="1.3" fill="#dfe3f5" />
    <circle cx="24" cy="10" r="0.9" fill="#dfe3f5" />
    <path d="M10 36a6 6 0 0 1 11-3 5 5 0 0 1 9 3Z" fill="#8b93bd" opacity="0.9" />
  </svg>
);

export const KeyIcon: FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="8" cy="15" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M11 12 20 3M17 6l2 2M14 9l2 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const LockIcon: FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const iconMap: Record<IconKind, FC<IconProps>> = {
  house: HouseIcon,
  crown: CrownIcon,
  sun: SunIcon,
  moon: MoonIcon,
  key: KeyIcon,
  lock: LockIcon,
};
