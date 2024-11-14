import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { ButtonColorContext } from "../context/ButtonColor.context";

const Home = () => {
  const { mode } = useContext(ButtonColorContext);
  return (
    <div className={`${mode} w-full`}>
      <Navbar />
    </div>
  );
};

export default Home;
