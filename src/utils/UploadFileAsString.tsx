import JsxHightLight from 'components/code/JsxHighiLight';
import { useRef, useState } from 'react';

const ReadFile = () => {
  const upload: any = useRef();
  const [fileString, setFileString] = useState<string | any>('');

  function readFileAsString() {
    var files = upload.current.files;
    if (files.length === 0) return;
    var reader = new FileReader();
    reader.onload = function (event) {
      setFileString(event.target.result);
    };
    reader.readAsText(files[0]);
  }

  return (
    <div>
      <input
        ref={upload}
        onChange={readFileAsString}
        id="upload"
        type="file"
        className="bg-gray-900 p-5"
    />
    
    <div>
     <JsxHightLight
      code={fileString}
     /> 
    </div>

    </div>
  );
};

export default ReadFile;
