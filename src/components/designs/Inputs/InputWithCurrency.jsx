// ::First you have to install icons run command > npm i @heroicons/react

// By default it width=w-96 you can change it easily from root <div>

import { useState } from 'react';
import {
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyPoundIcon,
  CurrencyRupeeIcon,
  CurrencyBangladeshiIcon,
  CurrencyYenIcon,
} from '@heroicons/react/solid'; 

export default function InputWithCurrency() {
  const [selectedCurrency, setSelectedCurrency] = useState('Dollar');
  const allCurrency = ['Dollar', 'Euro', 'Pound', 'Rupee', 'Taka', 'Yen'];

  const GetSelectedIcon = ({ iconType, className }) => {
    switch (iconType) {
      case 'Doller':
        return <CurrencyDollarIcon className={className} />;
      case 'Euro':
        return <CurrencyEuroIcon className={className} />;
      case 'Pound':
        return <CurrencyPoundIcon className={className} />;
      case 'Rupee':
        return <CurrencyRupeeIcon className={className} />;
      case 'Taka':
        return <CurrencyBangladeshiIcon className={className} />;
      case 'Yen':
        return <CurrencyYenIcon className={className} />;
      default:
        return <CurrencyDollarIcon className={className} />;
    }
  };

  return (
    <div className="sm:w-96 text-left">
      <label
        htmlFor="price"
        className="text-sm font-semibold mb-1 text-white tracking-wider"
      >
        Price
      </label>
      <div className="relative w-full">
        <span className="text-md text-blue-300 absolute inset-y-0 left-1 flex items-center text-sm">
          <GetSelectedIcon
            iconType={selectedCurrency}
            className="w-4 h-4 text-white bg-gray-700 rounded-full"
          />
        </span>

        <input
          id="price"
          className="p-2 pl-7 bg-gray-800 ring-2 focus:ring outline-none w-full rounded-sm duration-75"
          type="number"
          placeholder="0.0"
        />

        <select
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="tracking-wider font-semibold outline-none pl-2 text-xs bg-gray-800 focus:ring absolute inset-y-0 right-0 rounded-sm text-white"
        >
          {allCurrency.map((curreny) => (
            <option
              key={curreny}
              value={curreny}
              className="text-gray-300 bg-gray-700 tracking-wider"
            >
              {curreny}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
