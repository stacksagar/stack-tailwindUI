import SvgPropsTypes from 'src/types/SvgPropsTypes';

export default function TakaIcon({ fill, className }: SvgPropsTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 text-yellow-500 `+className}
      fill={fill || 'none'}
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
