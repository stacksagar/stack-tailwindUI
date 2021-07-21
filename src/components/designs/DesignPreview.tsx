import InputWithCurrency from 'tailwind-ui/Inputs/InputWithCurrency';
import EyeIcon from 'svgs/EyeIcon';
import CodeIcon from 'svgs/CodeIcon';
import { useState } from 'react';

interface DesignPreviewProps {
  title: string;
  children: any;
  lightTheme?: boolean;
}

export default function DesignPreview({
  title,
  children,
  lightTheme,
}: DesignPreviewProps) {
  const [copyText, setCopyText] = useState('<> Copy');
  return (
    <div className={`w-full border-2 ${lightTheme ? 'bg-gray-200 border-gray-300':'bg-gray-900 border-gray-800'} rounded overflow-hidden mb-10`}>
      <div className="flex md:justify-between justify-end items-center bg-gray-800 text-gray-200 p-2 w-full">
        <p className="font-semibold lg:text-sm text-xs md:block hidden ">
          {title}
        </p>

        <div className="flex justify-between items-center">
          <div className="bg-gray-900 flex rounded overflow-hidden">
            <button className=" py-1 px-2  hover:bg-gray-700 focus:bg-gray-700 flex items-center justify-between">
              <EyeIcon /> <span className="ml-1">Preview</span>
            </button>

            <button className=" py-1 px-2  hover:bg-gray-700 focus:bg-gray-700 flex items-center justify-between">
              <CodeIcon /> <span className="ml-1">Code</span>
            </button>
          </div>

          <select className="mx-3 outline-none border-8 text-xs border-gray-900 rounded bg-gray-900">
            <option>React</option>
            <option>Vue</option>
            <option>HTML</option>
          </select>

          <button
            onClick={() => {
              setCopyText('Copied');
              setTimeout(() => {
                setCopyText('<> Copy');
              }, 1000);
            }}
            className="p-1 px-3 focus:ring bg-gray-700 rounded"
          >
            {copyText}
          </button>
        </div>
      </div>
 

      <div style={{ minHeight: '250px' }} className="w-full flex items-center justify-center p-5">
      {children}
      </div>

    </div>
  );
}
