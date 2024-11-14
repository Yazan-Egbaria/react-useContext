import { useContext } from "react";
import { GiftArray } from "../context/GiftArray.context";

const Grandson = () => {
  const { gifts } = useContext(GiftArray);

  return (
    <div>
      {gifts.map((gift) => {
        return <p className="text-black">{gift}</p>;
      })}
      {console.log(gifts)}
    </div>
  );
};

export default Grandson;
