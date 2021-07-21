// src/CodeBlock.js
import React, { useEffect, useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import jsxToString from 'jsx-to-string';

interface JsxHighiLightProps {
  code: any;
}

export default function JsxHightLight({ code }: JsxHighiLightProps) {
  const [previewCode, setPreviewCode] = useState(null);

  useEffect(() => {
    if (typeof code == 'string') {
      setPreviewCode(code.trim());
    } else {
      setPreviewCode(jsxToString(code(), {}));
    }
  }, []);

  return (
    <Highlight {...defaultProps} code={code.trim()} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <small className="text-right inline-block w-6 mr-6">
                {i + 1}
              </small>
              {line.map((token, key) => {
                console.log(token.content);
                return (
                  <span
                    id={`${token.content == '{' || token.content == '}' ? 'bracket' : ''}${token.content == '=>' ? 'arrowSign' : ''}`}
                    key={key}
                    {...getTokenProps({ token, key })}
                  />
                );
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
