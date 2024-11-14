import Father from "./Father";
import { GiftArrayProvider } from "../context/GiftArray.context";

const Grandfather = () => {
  return (
    <GiftArrayProvider>
      <Father />
    </GiftArrayProvider>
  );
};

export default Grandfather;
