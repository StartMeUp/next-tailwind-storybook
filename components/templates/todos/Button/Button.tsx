import { FC, MouseEventHandler } from 'react';

export interface IButton {
  text: string;
  tlwStyle?: string | Record<string, string>;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<IButton> = ({ text, tlwStyle, onClick }) => {
  return (
    <button
      className={`rounded-lg px-4 py-1 ${tlwStyle && tlwStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
