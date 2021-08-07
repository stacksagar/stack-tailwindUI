export default function GradientLight({ text }) {
  return (
    <div className="group p-0.5 rounded-full bg-gradient-to-r from-yellow-700 to-pink-600 hover:to-yellow-500 hover:from-pink-500">
      <button className="w-full h-full px-5 py-2 rounded-full outline-none bg-transparent group-hover:bg-gray-800">
        {text || ' Get Started > '}
      </button>
    </div>
  );
}
