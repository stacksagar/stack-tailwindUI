import DollerIcon from 'svgs/currency/DollerIcon';

export default function InputWithoutCurrency() {
  return (
    <div className="w-full text-left">
      <label
        htmlFor="price"
        className="text-sm font-semibold mb-1 text-white tracking-wider"
      >
        Price
      </label>
      <div className="relative w-full">
        <span className="text-md text-blue-300 absolute inset-y-0 left-1 flex items-center text-sm">
          <DollerIcon />
        </span>

        <input
          id="price"
          className="p-2 pl-7 bg-gray-800 ring-2 focus:ring outline-none w-full rounded-sm duration-75"
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
