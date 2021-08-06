export default function ReactIcon({
  className,
  width,
  height,
}: {
  className?: string;
  width?: string;
  height?: string;
}) {
  return (
    <svg
      viewBox="0 0 29 29"
      width={width || '15'}
      height={height || '15'}
      fill="none"
      className={`flex-none mr-2 ` + className}
    >
      <g filter="url(#react-logo-filter-0)">
        <ellipse
          cx="14.75"
          cy="14.106"
          rx="13.25"
          ry="5.25"
          stroke="#4B5563"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></ellipse>
      </g>
      <g filter="url(#react-logo-filter-1)">
        <ellipse
          cx="14.75"
          cy="14.099"
          rx="13.25"
          ry="5.25"
          transform="rotate(-60 14.75 14.1)"
          stroke="#4B5563"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></ellipse>
      </g>
      <g filter="url(#react-logo-filter-2)">
        <ellipse
          cx="14.75"
          cy="14.1"
          rx="13.25"
          ry="5.25"
          transform="rotate(-120 14.75 14.1)"
          stroke="#4B5563"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></ellipse>
      </g>
      <circle
        cx="14.75"
        cy="14.106"
        r="2"
        fill="#1F2937"
        stroke="#9CA3AF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <defs>
        <filter
          id="react-logo-filter-0"
          x=".75"
          y="7.106"
          width="28"
          height="13"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dy="-1"></feOffset>
          <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow"></feBlend>
        </filter>
        <filter
          id="react-logo-filter-1"
          x="5.964"
          y=".575"
          width="17.572"
          height="26.047"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dy="-1"></feOffset>
          <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow"></feBlend>
        </filter>
        <filter
          id="react-logo-filter-2"
          x="5.964"
          y=".576"
          width="17.572"
          height="26.047"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dy="-1"></feOffset>
          <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow"></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
