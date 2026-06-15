"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Tooth3D({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={reduced ? undefined : { y: [0, -14, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 400 480" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="toothBody" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#E0F7FB" />
            <stop offset="100%" stopColor="#7DD3E0" />
          </radialGradient>
          <linearGradient id="toothShine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="toothShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2680B3" stopOpacity="0" />
            <stop offset="100%" stopColor="#2680B3" stopOpacity="0.45" />
          </linearGradient>
          <radialGradient id="cleanRing" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4BA9D9" stopOpacity="0" />
            <stop offset="60%" stopColor="#4BA9D9" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#4BA9D9" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="200" cy="430" rx="120" ry="22" fill="url(#toothShadow)" />

        <motion.circle
          cx="200"
          cy="220"
          r="180"
          fill="url(#cleanRing)"
          animate={reduced ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 220px" }}
        />

        <path
          d="M200 60
             C 270 60, 320 110, 320 180
             C 320 230, 305 270, 290 310
             L 270 380
             C 260 410, 240 430, 225 430
             C 215 430, 208 420, 205 400
             L 200 360
             L 195 400
             C 192 420, 185 430, 175 430
             C 160 430, 140 410, 130 380
             L 110 310
             C 95 270, 80 230, 80 180
             C 80 110, 130 60, 200 60 Z"
          fill="url(#toothBody)"
          stroke="#2680B3"
          strokeOpacity="0.18"
          strokeWidth="2"
        />

        <path
          d="M150 100
             C 170 85, 195 80, 220 90
             C 240 95, 255 110, 260 130"
          fill="none"
          stroke="url(#toothShine)"
          strokeWidth="22"
          strokeLinecap="round"
          opacity="0.85"
        />

        <motion.g
          animate={reduced ? undefined : { scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "300px 130px" }}
        >
          <path
            d="M300 110 L305 125 L320 130 L305 135 L300 150 L295 135 L280 130 L295 125 Z"
            fill="#4BA9D9"
            opacity="0.85"
          />
        </motion.g>

        <motion.g
          animate={reduced ? undefined : { scale: [1, 1.3, 1], opacity: [0.4, 0.85, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          style={{ transformOrigin: "90px 200px" }}
        >
          <path
            d="M85 185 L90 197 L102 200 L90 203 L85 215 L80 203 L68 200 L80 197 Z"
            fill="#2680B3"
            opacity="0.7"
          />
        </motion.g>

        <motion.g
          animate={reduced ? undefined : { scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          style={{ transformOrigin: "335px 280px" }}
        >
          <circle cx="335" cy="280" r="8" fill="#FF7A59" opacity="0.6" />
          <circle cx="335" cy="280" r="3.5" fill="#FF7A59" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
