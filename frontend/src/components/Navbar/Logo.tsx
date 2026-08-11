import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" aria-label="VerifyIt home" className="inline-flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 380 90"
        className="h-10 w-auto"
        fill="none"
        role="img"
      >
        <defs>
          <linearGradient
            id="v-shield-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <linearGradient
            id="v-check-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        {/* Icon Mark */}
        <g transform="translate(10, 5)">
          {/* Outer Geometric Shield Frame */}
          <path
            d="M40 8 C58 8 72 15 74 30 C74 54 40 76 40 76 C40 76 6 54 6 30 C8 15 22 8 40 8 Z"
            stroke="url(#v-shield-grad)"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Checkmark */}
          <path
            d="M25 40 L35 51 L56 26"
            stroke="url(#v-check-grad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Link Node Accents */}
          <circle cx="56" cy="26" r="3.5" fill="#06b6d4" />
          <circle cx="25" cy="40" r="3" fill="#2563eb" />
        </g>

        {/* Typography */}
        <text
          x="102"
          y="56"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="40"
          fill="#0f172a"
          letterSpacing="-1"
        >
          Verify
          <tspan fill="#2563eb">It</tspan>
        </text>

        {/* Trust Status Dot */}
        <circle cx="330" cy="30" r="4" fill="#06b6d4" />
      </svg>
    </Link>
  );
}