// for icon run command:: npm i @heroicons/react

import { PhotographIcon, PlusCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useRef } from 'react';

export default function UploadPhoto() {
  // you can access uploaded file info file from inputRef
  const inputRef = useRef();
  // you can access uploaded preview from here
  const [file, setFile] = useState();

  const handleUpload = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event) => {
      setFile(event.target.result);
    };
  };

  return (
    <div
      onBeforeInput={() => inputRef.current?.click()}
      className="relative w-full h-32 p-5 border-2 border-gray-500 rounded border-dashed flex flex-col items-center justify-center "
    >
      <div className="h-12 relative">
        <PhotographIcon className="h-full" />
        <PlusCircleIcon className="h-5 absolute top-0 right-0 text-pink-500 shadow-xl" />
      </div>
      <p>
        Upload a File <small className="text-gray-500">or drag and drop</small>
      </p>
      <small className="text-gray-300">image any/format up to 9MB</small>

      {file && (
        <img src={file} className="h-full p-5 absolute right-0 rounded" />
      )}
      <input
        ref={inputRef}
        type="file"
        onChange={handleUpload}
        className="bg-black p-20 opacity-0 w-full h-full inset-0 m-auto absolute"
      />
    </div>
  );
}
