import React from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row mb-0 bg-blue-500 h-12 items-center">
      <div className="w-full ml-10 flex items-center">
        <h1 className="text-3xl font-bold">Test</h1>
      </div>
      <div className="w-full flex flex-row justify-evenly items-center">
        <Button text={"Home"} page={"/"} />
        <Button text={"Emoji World"} page={"/emogipage"} />
      </div>
    </nav>
  );
};
export default Navbar;
