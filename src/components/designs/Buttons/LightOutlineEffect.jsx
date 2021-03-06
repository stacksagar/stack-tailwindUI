export default function LightOutlineEffect() {
  return (
    <button className="px-9 py-4 2xl:px-14 2xl:py-6 z-30 group focus:outline-none relative border-2 border-white rounded focus:ring-4 overflow-hidden text-white cursor-pointer">
      <span className="w-full h-full flex items-center justify-center absolute inset-0 bg-gray-800 transform origin-right z-20 hover:translate-x-full hover:text-transparent duration-500">
        Hover
      </span>
      <span className="w-full h-full flex items-center justify-center bg-gray-900 text-white absolute inset-0">
        Click
      </span>
    </button>
  );
}
