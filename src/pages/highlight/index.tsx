import JsxHightLight from 'components/code/JsxHighiLight'; 

function JSX() {
  return (
    <div className="Hello">
      <div>
        <div>
          <div>
            <div>
              <button> Button </button>
              <button> Button </button>
              <button> Button </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function highlight() {
  return (
    <div>
      <JsxHightLight
        code={JSX}
      />
    </div>
  );
}
