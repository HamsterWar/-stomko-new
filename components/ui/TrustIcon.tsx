type IconProps = { className?: string };

const baseProps = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const trustIcons: Record<string, (p: IconProps) => React.JSX.Element> = {
  shield: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M16 4l10 3v9c0 6-4 10-10 12-6-2-10-6-10-12V7l10-3z" fill="currentColor" fillOpacity="0.12" />
      <path d="M11 16l3.5 3.5L21 13" />
    </svg>
  ),
  spark: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M16 3l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="currentColor" fillOpacity="0.12" />
    </svg>
  ),
  wallet: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <rect x="4" y="8" width="24" height="18" rx="3" fill="currentColor" fillOpacity="0.12" />
      <path d="M4 12h24" />
      <circle cx="22" cy="18" r="2" fill="currentColor" />
    </svg>
  ),
  syringe: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M6 26l-2 2 4 0z" fill="currentColor" />
      <path d="M8 24l16-16M14 14l4 4M22 6l4 4-4 4-4-4z" fill="currentColor" fillOpacity="0.12" />
    </svg>
  ),
  clock: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="12" fill="currentColor" fillOpacity="0.12" />
      <path d="M16 9v7l5 3" />
    </svg>
  ),
  history: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M4 12V4h8" />
      <path d="M4 4l8 8" />
      <circle cx="18" cy="18" r="10" fill="currentColor" fillOpacity="0.12" />
      <path d="M18 12v6l4 2" />
    </svg>
  ),
  tech: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <rect x="4" y="6" width="24" height="16" rx="2" fill="currentColor" fillOpacity="0.12" />
      <path d="M12 26h8M10 22v4M22 22v4" />
      <circle cx="16" cy="14" r="3" />
    </svg>
  ),
  heart: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path
        d="M16 26s-9-5-9-12c0-3 2-6 5-6 2 0 3 1 4 2 1-1 2-2 4-2 3 0 5 3 5 6 0 7-9 12-9 12z"
        fill="currentColor"
        fillOpacity="0.12"
      />
    </svg>
  ),
};
