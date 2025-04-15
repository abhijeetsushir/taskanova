import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Purple Checklist Box */}
      <rect x="20" y="40" width="40" height="45" rx="4" fill="#7C3AED" />
      
      {/* Checkmarks */}
      <path
        d="M30 55 L35 60 L45 50"
        stroke="white"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M30 70 L35 75 L45 65"
        stroke="white"
        strokeWidth="3"
        fill="none"
      />
      
      {/* Blue Rocket */}
      <path
        d="M35 15 L50 30 L65 15 L50 0 Z"
        fill="#3B82F6"
      />
      <circle
        cx="50"
        cy="15"
        r="5"
        fill="white"
      />
    </svg>
  );
};

export const LogoWithText: React.FC<LogoProps> = ({ className = '', width = 200, height = 50 }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo width={height} height={height} />
      <span className="text-2xl font-semibold">
        <span className="text-[#3B82F6]">task</span>
        <span className="text-[#7C3AED]">anova</span>
      </span>
    </div>
  );
}; 