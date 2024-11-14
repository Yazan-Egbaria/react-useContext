import React, { useContext } from "react";
import { ButtonColorContext } from "../context/ButtonColor.context";

const Navbar = () => {
  const { mode, setMode } = useContext(ButtonColorContext);
  return (
    <div className="flex h-20 w-full items-center justify-between bg-blue-300 px-8">
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
      </ul>

      <button
        onClick={() => {
          setMode(mode === "bg-white" ? "bg-black" : "bg-white");
        }}
      >
        Make Night
      </button>
    </div>
  );
};

export default Navbar;
