// By default it width=w-96 you can change it easily from root <div>

export default function InputWithDollerIcon() {
  return (
    <div className="sm:w-96 text-left">
      <label
        htmlFor="price"
        className="text-sm font-semibold mb-1 text-white tracking-wider"
      >
        Price
      </label>
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-2 m-auto w-3 h-3 p-2 text-xs flexjcic rounded-full bg-gray-700 text-white">
          $
        </span>

        <input
          id="price"
          className="p-2 pl-8 bg-gray-800 ring-2 focus:ring outline-none w-full rounded-sm duration-75"
          type="number"
          placeholder="0.0"
        />

        <span className="text-gray-300 tracking-wider absolute inset-y-0 right-8 flex items-center">
          USD
        </span>
      </div>
    </div>
  );
}
