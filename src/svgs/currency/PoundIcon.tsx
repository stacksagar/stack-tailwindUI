import SvgPropsTypes from 'types/SvgPropsTypes';

export default function PoundIcon({ fill, className }: SvgPropsTypes) {
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
        d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
