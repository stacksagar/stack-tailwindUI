export default function CricleShow({ text }: { text?: any }) {
  return (
    <span
      className={`mx-3 w-8 h-8 rounded-full bg-gray-700 text-white right-4 inline-flex items-center justify-center`}
    >
      {text}
    </span>
  );
}
