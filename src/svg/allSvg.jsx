

export function allSvg(width) {
  const allSvg = {
    menuBtn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 48 48"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="4"
        >
          <path stroke-linejoin="round" d="M40 28L24 40L8 28" />
          <path d="M8 10H40" />
          <path d="M8 18H40" />
        </g>
      </svg>
    ),
    closeBtn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
        />
      </svg>
    ),
    arrowLeft: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <g transform="translate(24 0) scale(-1 1)">
          <path
            fill="currentColor"
            d="M11.273 3.687a1 1 0 1 1 1.454-1.374l8.5 9a1 1 0 0 1 0 1.374l-8.5 9.001a1 1 0 1 1-1.454-1.373L19.125 12l-7.852-8.313Z"
          />
        </g>
      </svg>
    ),
    basket: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20.756 5.345A1.003 1.003 0 0 0 20 5H6.181l-.195-1.164A1 1 0 0 0 5 3H2.75a1 1 0 1 0 0 2h1.403l1.86 11.164l.045.124l.054.151l.12.179l.095.112l.193.13l.112.065a.97.97 0 0 0 .367.075H18a1 1 0 1 0 0-2H7.847l-.166-1H19a1 1 0 0 0 .99-.858l1-7a1.002 1.002 0 0 0-.234-.797zM18.847 7l-.285 2H15V7h3.847zM14 7v2h-3V7h3zm0 3v2h-3v-2h3zm-4-3v2H7l-.148.03L6.514 7H10zm-2.986 3H10v2H7.347l-.333-2zM15 12v-2h3.418l-.285 2H15z"
        />
        <circle cx="8.5" cy="19.5" r="1.5" fill="currentColor" />
        <circle cx="17.5" cy="19.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    arrowSides: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 512 512"
      >
        <g transform="rotate(90 256 256)">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="m112 244l144-144l144 144M256 120v292"
          />
        </g>
      </svg>
    ),
    jp: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 36 36"
      >
        <path
          fill="#EEE"
          d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"
        />
        <circle cx="18" cy="18" r="7" fill="#ED1B2F" />
      </svg>
    ),
    en: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 640 480"
      >
        <path fill="#bd3d44" d="M0 0h640v480H0" />
        <path
          stroke="#fff"
          stroke-width="37"
          d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
        />
        <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
        <marker id="flagUs4x30" markerHeight="30" markerWidth="30">
          <path fill="#fff" d="m14 0l9 27L0 10h28L5 27z" />
        </marker>
        <path
          fill="none"
          marker-mid="url(#flagUs4x30)"
          d="m0 0l16 11h61h61h61h61h60L47 37h61h61h60h61L16 63h61h61h61h61h60L47 89h61h61h60h61L16 115h61h61h61h61h60L47 141h61h61h60h61L16 166h61h61h61h61h60L47 192h61h61h60h61L16 218h61h61h61h61h60L0 0"
        />
      </svg>
    ),
  };

  return allSvg;
}
