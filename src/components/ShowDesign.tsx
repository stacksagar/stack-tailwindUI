import { useRouter } from 'next/router';
import EyeIcon from 'src/svgs/EyeIcon';
import { useRef, useState } from 'react';
import JsxHightLight from './others/JsxHighiLight';
import { XIcon, MinusSmIcon } from '@heroicons/react/solid';
import { useEffect } from 'react';

interface DesignPreviewProps {
  index?: any;
  title?: string;
  children?: any;
  parentLight?: boolean;
}

export default function ShowDesign({
  title,
  index,
  children,
  parentLight,
}: DesignPreviewProps) {
  const router = useRouter();
  const copyTextarea: any = useRef();
  const [codeString, setCodeString] = useState('');
  const [copyText, setCopyText] = useState('<> Copy');
  const [preview, setPreview] = useState<string>('preview');

  const copyHandler = () => {
    var copyText = copyTextarea.current;
    copyText.select();
    document.execCommand('copy');
    setCopyText('Copied');
    setTimeout(() => {
      setCopyText('<> Copy');
    }, 1000);
  };

  useEffect(() => {
    fetch(`${router.asPath}/${children.type.name}.jsx`)
      .then((response) => response.text())
      .then(setCodeString);
  }, []);

  const codeClickHandler = () => {
    setPreview('code');
  };

  return (
    <div
      className={`${
        (index + 1) % 2 == 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'
      } rounded mb-10 max-w-full p-0.5 from-pink-500 to-yellow-500 `}
    >
      <div
        className={`${
          parentLight && preview == 'preview' ? ' bg-white ' : ' bg-gray-900 '
        } rounded`}
      >
        <ThisHeader
          {...{
            copyText,
            codeClickHandler,
            copyHandler,
            preview,
            setPreview,
            title,
          }}
        />

        <div
          style={{ minHeight: '250px' }}
          className={`w-full h-full ${
            preview == 'preview' ? 'flexjcic p-5' : 'grid grid-cols-12'
          }`}
        >
          {preview == 'preview' ? (
            children
          ) : (
            <JsxHightLight previewCode={codeString} />
          )}
        </div>

        <textarea
          ref={copyTextarea}
          value={codeString}
          className="opacity-0 absolute z-0"
          onChange={() => {}}
        />
      </div>
    </div>
  );
}

function ThisHeader({
  title,
  preview,
  setPreview,
  codeClickHandler,
  copyHandler,
  copyText, 
}) {
  return (
    <div
      style={{ background: '#111820' }}
      className="flex md:justify-between justify-end items-center text-gray-200 p-2 md:pl-4 w-full relative"
    >
      <div className="font-semibold lg:text-sm text-xs md:flex hidden">
        {preview == 'preview' ? (
          <p className=" italic tracking-wider text-green-500 ">{title}</p>
        ) : (
          <>
            <div
              onClick={() => setPreview('preview')}
              className="w-3 h-3 rounded-full ml-3 cursor-pointer bg-red-500 flexjcic group overflow-hidden"
            >
              <XIcon className="w-2 h-2 opacity-0 group-hover:opacity-100" />
            </div>
            <div className="w-3 h-3 rounded-full ml-2 cursor-pointer bg-yellow-500"></div>
            <div
              onClick={() => setPreview('preview')}
              className="w-3 h-3 rounded-full ml-2 cursor-pointer bg-green-500 flexjcic group overflow-hidden"
            >
              <MinusSmIcon className="w-3 h-3 opacity-0 group-hover:opacity-100" />
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="bg-gray-900 flex rounded-lg">
          <button
            onClick={() => setPreview('preview')}
            className={`rounded py-1 px-2 flex items-center justify-between hover:bg-gray-700 ${
              preview == 'preview' && 'bg-gray-700 ring'
            }`}
          >
            <EyeIcon /> <span className="ml-1">Preview</span>
          </button>

          <button
            onClick={codeClickHandler}
            className={`rounded py-1 px-2 flex items-center justify-between hover:bg-gray-700 ${
              preview == 'code' && 'bg-gray-700 ring'
            }`}
          >
            {`<>`} <span className="ml-1">Code</span>
          </button>
        </div>

        <select className="mx-3 outline-none border-8 text-xs bg-gray-800 border-gray-800 rounded">
          <option>JSX</option>
          <option disabled={true}>Coming soon</option>
        </select>

        <button
          onClick={copyHandler}
          className={`p-1 px-3 focus:ring bg-gray-700 rounded`}
        >
          {copyText}
        </button>
      </div>
    </div>
  );
}
