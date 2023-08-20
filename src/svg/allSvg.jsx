

export function allSvg(width) {
  const navSvg = {
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
  };

  return navSvg;
}
