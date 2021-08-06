import SvgPropsTypes from 'src/types/SvgPropsTypes';

export default function YenIcon({ fill, className }: SvgPropsTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || 'none'}
      className={`w-5 h-5 text-yellow-500 ` + className}
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
