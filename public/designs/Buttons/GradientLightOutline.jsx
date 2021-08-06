export default function GradientLightOutLine({ text }) {
  return (
    <div className="transition duration-100 ease-in transform hover:scale-105 p-0.5 rounded-full bg-gradient-to-l from-yellow-500 hover:to-yellow-700 to-pink-500 hover:from-pink-700 group">
      <button className="w-full h-full px-5 py-2 rounded-full outline-none bg-gray-800 group-hover:bg-transparent">
        {text || 'Get Started >'}
      </button>
    </div>
  );
}
