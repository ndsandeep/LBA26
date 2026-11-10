import React from "react";

export default function PhoenixLogo({ size = 54 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Golden phoenix"
    >
      <defs>
        <linearGradient id="birdGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff4bf" />
          <stop offset="35%" stopColor="#ffc85b" />
          <stop offset="70%" stopColor="#d99125" />
          <stop offset="100%" stopColor="#fff0ac" />
        </linearGradient>
      </defs>

      {/* Left wing */}
      <path
        d="M59 53 C43 22 23 15 4 5
           C9 26 22 38 39 48
           C23 36 10 35 2 34
           C12 52 25 59 44 62
           C27 55 15 57 8 59
           C19 74 33 76 49 74Z"
        fill="url(#birdGold)"
      />

      {/* Right wing */}
      <path
        d="M61 53 C77 22 97 15 116 5
           C111 26 98 38 81 48
           C97 36 110 35 118 34
           C108 52 95 59 76 62
           C93 55 105 57 112 59
           C101 74 87 76 71 74Z"
        fill="url(#birdGold)"
      />

      {/* Wing feathers */}
      <path
        d="M50 60 Q20 39 9 14
           M46 66 Q20 51 8 40
           M70 60 Q100 39 111 14
           M74 66 Q100 51 112 40"
        stroke="#fff0ae"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Neck and body */}
      <path
        d="M58 78 C47 61 47 44 60 34
           C65 29 70 27 75 29
           L84 35 L72 37
           C65 43 67 50 70 57
           C77 72 68 84 61 90Z"
        fill="url(#birdGold)"
      />

      {/* Eye */}
      <circle cx="70" cy="33" r="1.8" fill="#4c270c" />

      {/* Tail feathers */}
      <path
        d="M57 78 Q43 92 50 113
           Q55 100 61 95
           Q64 108 70 116
           Q73 94 65 78Z"
        fill="url(#birdGold)"
      />

      {/* Pedestal */}
      <path
        d="M39 109 H81 L87 117 H33Z"
        fill="url(#birdGold)"
      />
    </svg>
  );
}