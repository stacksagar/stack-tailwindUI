import SvgPropsTypes from 'src/types/SvgPropsTypes';

export default function ChevronDown({ fill, className }: SvgPropsTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ` + className}
      fill={fill || 'none'}
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
