import Highlight, { defaultProps } from 'prism-react-renderer';

interface JsxHighiLightProps {
  previewCode: any;
  classes?: string;
}

export default function JsxHightLight({
  previewCode,
  classes,
}: JsxHighiLightProps) {
  return (
    <Highlight {...defaultProps} code={previewCode.trim()} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{
            background: '#111827 !important',
            minHeight: '300px !important',
          }}
          className={
            className +
            ' col-span-12 sidebarScroll flexjcis flex-col overflow-x-scroll m-3 p-3 ' +
            classes
          }
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <small className="relative text-right inline-block w-6 mr-6">
                {i + 1}
              </small>
              {line.map((token, key) => (
                <span
                  id={`${
                    token.content == '{' || token.content == '}'
                      ? 'bracket'
                      : ''
                  }${token.content == '=>' ? 'arrowSign' : ''}`}
                  key={key}
                  {...getTokenProps({ token, key })}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
