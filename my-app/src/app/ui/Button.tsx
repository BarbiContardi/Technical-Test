import { FC } from "react";

interface ButtonProps {
  text?: string;
  page?: string;
  onClick?: () => void;
}
const Button: FC<ButtonProps> = ({ text, page, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 ease-out hover:bg-blue-800" onClick={onClick}>
      <a href={page}>{text}</a>
    </button>
  );
};

export default Button;
