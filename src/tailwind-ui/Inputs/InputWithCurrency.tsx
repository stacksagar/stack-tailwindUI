import DollerIcon from 'svgs/currency/DollerIcon';
import EuroIcon from 'svgs/currency/EuroIcon';
import PoundIcon from 'svgs/currency/PoundIcon';
import RupeeIcon from 'svgs/currency/RupeeIcon';
import TakaIcon from 'svgs/currency/TakaIcon';
import YenIcon from 'svgs/currency/YenIcon';
import React, { useState } from 'react';

export default function InputWithCurrency() {
  const [selectedCurrency, setSelectedCurrency] = useState('Doller');
  const allCurrency = ['Doller', 'Euro', 'Pound', 'Rupee', 'Taka', 'Yen'];

  const GetSelectedCurrency = () => {
    const allIcons = [
      DollerIcon,
      EuroIcon,
      PoundIcon,
      RupeeIcon,
      TakaIcon,
      YenIcon,
    ];
    const GetIcon = allIcons.find((icon) => icon.name.includes(selectedCurrency));  
    return <GetIcon />
  }

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
          <GetSelectedCurrency />
        </span>

        <input
          id="price"
          className="p-2 pl-7 bg-gray-800 ring-2 focus:ring outline-none w-full rounded-sm duration-75"
          type="number"
          placeholder="0.0"
        />

        <select
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="tracking-wider font-semibold outline-none pl-2 text-xs bg-gray-800 focus:ring absolute inset-y-0 right-0 rounded-sm"
        >
          {allCurrency.map((curreny) => (
            <option
              key={curreny}
              value={curreny}
              className="bg-gray-300 text-gray-800 tracking-wider">
              {curreny}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}