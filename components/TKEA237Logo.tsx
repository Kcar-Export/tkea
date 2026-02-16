// *********************
// Role of the component: TKEA237 Logo Display
// Name of the component: TKEA237Logo.tsx
// Purpose: Displays the TKEA237 branding with TKEA in black and 237 in white
// *********************

import React from "react";

interface TKEA237LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const TKEA237Logo: React.FC<TKEA237LogoProps> = ({
  width = 200,
  height = 60,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-0.5 font-black ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <span
        className="text-black leading-none"
        style={{
          fontSize: `${(width / 200) * 32}px`,
          letterSpacing: "-1px",
        }}
      >
        TKEA
      </span>
      <span
        className="text-white bg-black rounded px-1"
        style={{
          fontSize: `${(width / 200) * 32}px`,
          letterSpacing: "-1px",
          lineHeight: "1",
          padding: "2px 4px",
        }}
      >
        237
      </span>
    </div>
  );
};

export default TKEA237Logo;
