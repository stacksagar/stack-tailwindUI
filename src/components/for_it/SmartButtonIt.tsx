import { useState } from 'react';

export default function SmartButtonIt({
  text,
  className,
  children,
  onClick,
  ringNone,
}: {
  text?: string;
  className?: string;
  children?: any;
  onClick?: any;
  ringNone?: boolean;
}) {
  const [focus, setFocus] = useState(false);
  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick();
        }
        setFocus(true);
        setTimeout(() => {
          setFocus(false);
        }, 333);
      }}
      className={
        `relative w-8 h-8 rounded-full bg-gray-600 ${
          !ringNone && 'focus:ring-4'
        } flex items-center justify-center ` + className
      }
    >
      <span>{children || text}</span>
      {focus && (
        <span
          style={{
            animationDuration: '1s !important',
          }}
          className={`absolute w-7 h-7 inset-0 m-auto rounded-full bg-opacity-30 bg-white animate-ping`}
        />
      )}
    </button>
  );
}
