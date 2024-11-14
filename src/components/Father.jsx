import { useContext } from "react";
import Son from "./Son";
import { GiftArray } from "../context/GiftArray.context";

const Father = () => {
  const { setGifts } = useContext(GiftArray);
  return (
    <div>
      <button
        onClick={() => {
          setGifts(["Yazan", "Ibrahim", "Dania", "Noor"]);
        }}
      >
        CLICK MEEEEE
      </button>
      <Son />
    </div>
  );
};

export default Father;
