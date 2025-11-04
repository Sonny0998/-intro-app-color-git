export default function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle cx="30" cy="30" r="25" fill="#2563eb" opacity="0.1" />
      
      {/* Book icon */}
      <path
        d="M20 18 L20 42 L30 38 L40 42 L40 18 L30 22 Z"
        fill="#2563eb"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Graduation cap accent */}
      <path
        d="M15 20 L30 15 L45 20 L30 25 Z"
        fill="#059669"
        opacity="0.8"
      />
      
      {/* Text EDHA */}
      <text
        x="60"
        y="38"
        fontFamily="Poppins, sans-serif"
        fontSize="28"
        fontWeight="800"
        fill="#1e293b"
      >
        EDHA
      </text>
      
      {/* Subtitle */}
      <text
        x="60"
        y="50"
        fontFamily="Poppins, sans-serif"
        fontSize="8"
        fontWeight="400"
        fill="#64748b"
        letterSpacing="1"
      >
        EDUCATION • DEVELOPMENT
      </text>
    </svg>
  );
}
