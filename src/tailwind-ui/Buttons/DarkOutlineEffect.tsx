export default function DarkOutlineEffect() { 

  return (
    <button className="z-30 group relative sm:px-10 sm:h-10 px-9 h-8 border-2 border-gray-500  rounded focus:ring-4 overflow-hidden">

      <span className="w-full h-full flex items-center justify-center absolute inset-0 transform origin-right z-20 hover:translate-x-full duration-500 bg-white text-gray-500 group-hover:bg-transparent group-hover:text-transparent">
        Button
      </span>

      <span className="w-full h-full flex items-center justify-center text-white bg-gray-500 absolute inset-0">
        Button
      </span>

    </button>
  );
}
