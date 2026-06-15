type IconProps = { className?: string };

const baseProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const serviceIcons: Record<string, (p: IconProps) => React.JSX.Element> = {
  implant: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M24 6c-7 0-11 5-11 10 0 3 1 5 2 8l4 11c1 2 2 3 5 3s4-1 5-3l4-11c1-3 2-5 2-8 0-5-4-10-11-10z" />
      <path d="M24 14v3M19 16v2M29 16v2" />
      <path d="M18 38l1 4M30 38l-1 4" />
      <path d="M16 42h16" strokeWidth="2.4" />
    </svg>
  ),
  tooth: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M24 6c-7 0-12 5-12 11 0 4 1 7 2 10l4 12c1 2 2 3 4 3s3-1 4-3l2-7 2 7c1 2 2 3 4 3s3-1 4-3l4-12c1-3 2-6 2-10 0-6-5-11-12-11z" />
      <path d="M17 14c2-3 5-4 7-4M30 14c-2-3-5-4-7-4" />
    </svg>
  ),
  scalpel: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M8 40L28 20" strokeWidth="2.2" />
      <path d="M28 20l8-12-2-2L20 18l-2 4 6 6 4-2z" fill="currentColor" fillOpacity="0.15" />
      <path d="M8 40l4 0M8 40l0-4" />
    </svg>
  ),
  crown: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M8 30l4-12 6 8 6-12 6 12 6-8 4 12" />
      <path d="M8 30v6h32v-6" />
      <circle cx="12" cy="18" r="1.6" fill="currentColor" />
      <circle cx="24" cy="14" r="1.6" fill="currentColor" />
      <circle cx="36" cy="18" r="1.6" fill="currentColor" />
    </svg>
  ),
  braces: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <rect x="8" y="18" width="6" height="12" rx="1.5" />
      <rect x="16" y="16" width="6" height="14" rx="1.5" />
      <rect x="24" y="16" width="6" height="14" rx="1.5" />
      <rect x="32" y="18" width="6" height="12" rx="1.5" />
      <path d="M6 24h36" strokeWidth="2.2" />
    </svg>
  ),
  sparkle: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path
        d="M24 6l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path d="M38 30l1.5 4.5L44 36l-4.5 1.5L38 42l-1.5-4.5L32 36l4.5-1.5z" />
      <path d="M10 32l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
    </svg>
  ),
  child: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <circle cx="24" cy="14" r="5" />
      <path d="M14 38c0-7 4-12 10-12s10 5 10 12" />
      <path d="M20 30l-2 4M28 30l2 4" />
      <circle cx="21" cy="14" r="0.8" fill="currentColor" />
      <circle cx="27" cy="14" r="0.8" fill="currentColor" />
    </svg>
  ),
  scan: ({ className }) => (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M8 14V8h6M40 14V8h-6M8 34v6h6M40 34v6h-6" strokeWidth="2.2" />
      <circle cx="24" cy="24" r="7" />
      <path d="M14 24h2M32 24h2M24 14v2M24 32v2" />
    </svg>
  ),
};
