import React from "react";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => (
  <svg
    role="img"
    aria-labelledby="aranLogoTitle aranLogoDesc"
    viewBox="0 0 420 220"
    className={className}
  >
    <title id="aranLogoTitle">ARAN Trade Mark</title>
    <desc id="aranLogoDesc">
      Stylized ARAN logotype with upward momentum arrow and market pillars.
    </desc>
    <defs>
      <linearGradient id="aran-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="50%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
      <linearGradient id="aran-base" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="rgba(15,23,42,0.9)" />
        <stop offset="100%" stopColor="rgba(8,15,28,0.9)" />
      </linearGradient>
      <radialGradient id="aran-glow" cx="50%" cy="35%" r="65%">
        <stop offset="0%" stopColor="rgba(96,165,250,0.45)" />
        <stop offset="100%" stopColor="rgba(15,23,42,0)" />
      </radialGradient>
      <filter id="aran-soft" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="12" result="blur" />
        <feBlend in="SourceGraphic" in2="blur" mode="lighter" />
      </filter>
      <clipPath id="aran-clip">
        <rect x="40" y="40" width="340" height="140" rx="28" ry="28" />
      </clipPath>
    </defs>

    <rect x="28" y="28" width="364" height="164" rx="32" fill="#0f172a" stroke="rgba(148,163,184,0.3)" />
    <rect x="28" y="28" width="364" height="164" rx="32" fill="url(#aran-glow)" />
    <rect x="40" y="40" width="340" height="140" rx="28" fill="url(#aran-base)" />

    <g clipPath="url(#aran-clip)">
      <g opacity="0.2">
        {Array.from({ length: 12 }).map((_, index) => (
          <line
            key={`grid-${index}`}
            x1={60 + index * 28}
            y1={40}
            x2={60 + index * 28}
            y2={180}
            stroke="rgba(148,163,184,0.28)"
            strokeWidth={0.6}
          />
        ))}
        {Array.from({ length: 4 }).map((_, index) => (
          <line
            key={`axis-${index}`}
            x1={40}
            y1={75 + index * 28}
            x2={380}
            y2={75 + index * 28}
            stroke="rgba(148,163,184,0.18)"
            strokeWidth={0.6}
          />
        ))}
      </g>

      <g filter="url(#aran-soft)">
        <path
          d="M110 165L158 75l24 50 24-50 48 90z"
          fill="url(#aran-gradient)"
          opacity="0.45"
        />
      </g>

      <g transform="translate(0, 6)">
        <g fill="url(#aran-gradient)">
          <path d="M122 148h-20l44-88h18l44 88h-21l-9.2-20.2h-48.5zm52-36.8l-16.3-35.6-16.4 35.6z" />
          <path d="M211 60h47.2c22 0 35.8 11.9 35.8 30.6 0 14.4-8.3 25-21.8 28.9l24.5 42.5h-23.2l-22.1-39.4h-21.4V162H211zm21.5 18.3v28.2h23.6c11 0 17.3-5.4 17.3-14.4 0-8.9-6.3-13.8-17.3-13.8z" />
          <path d="M336 60h18l44 88h-21l-9.2-20.2h-48.5l-9.3 20.2H288zm32 51.2l-16.3-35.6-16.4 35.6z" />
        </g>
      </g>

      <g transform="translate(0, -8)">
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M142 150c18-26 44-41 70-41 25.3 0 47.4 13 63.3 37.3"
            stroke="rgba(148,163,184,0.45)"
            strokeWidth={4}
          />
          <path
            d="M265 140l18.5-26.3h0.2l18.5 26.3"
            stroke="url(#aran-gradient)"
            strokeWidth={6}
          />
        </g>
      </g>

      <g transform="translate(48, 36)">
        <rect x="0" y="76" width="28" height="44" rx="8" fill="rgba(94,234,212,0.3)" />
        <rect x="48" y="56" width="28" height="64" rx="8" fill="rgba(56,189,248,0.45)" />
        <rect x="96" y="32" width="28" height="88" rx="8" fill="rgba(129,140,248,0.45)" />
        <rect x="144" y="12" width="28" height="108" rx="8" fill="rgba(192,132,252,0.55)" />
      </g>
    </g>
  </svg>
);

export default Logo;
