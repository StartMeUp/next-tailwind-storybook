import { FC } from 'react';

export interface IButton {
  text: string;
  tlwStyle?: string | Record<string, string>;
}

const Button: FC<IButton> = ({ text, tlwStyle }) => {
  return (
    <button className={`rounded-lg px-4 py-1 ${tlwStyle && tlwStyle}`}>
      {text}
    </button>
  );
};

export default Button;
