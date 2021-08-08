export default function Wave({
  className,
  style,
}: {
  className?: string;
  style?: any;
}) {
  return (
    <svg
      className={`hero-waves text-yellow-500 ` + className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      style={{ ...style }}
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <path
          id="wave-path"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        ></path>
      </defs>
      <g className="wave1">
        <use xlinkHref="#wave-path" x="50" y="3" fill="#33333355"></use>
      </g>
      <g className="wave2">
        <use xlinkHref="#wave-path" x="50" y="0" fill="#22222255"></use>
      </g>
      <g className="wave3">
        <use xlinkHref="#wave-path" x="50" y="9" fill="#44444455"></use>
      </g>
    </svg>
  );
}
