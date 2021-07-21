export default function LightOutlineEffect() {
  return (
    <button className="z-30 group relative sm:px-10 sm:h-10 px-9 h-8 border-2 border-white rounded focus:ring-4 overflow-hidden">
      <span className="w-full h-full flex items-center justify-center absolute inset-0 bg-gray-800 transform origin-right z-20 hover:translate-x-full hover:text-transparent group-hover:bg-white group-hover:text-gray-900 duration-500">
        Button
      </span>
      <span className="w-full h-full flex items-center justify-center bg-white text-gray-900 absolute inset-0">
        Button
      </span>
    </button>
  );
}
