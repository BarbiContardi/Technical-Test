import { FC } from "react";

interface ButtonProps {
  texto?: string;
  ruta?: string;
}
const Button: FC<ButtonProps> = ({ texto, ruta }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 transition duration-300 ease-out"
    >
      <a href={ruta}>{texto}</a>
    </button>
  );
};

export default Button;
