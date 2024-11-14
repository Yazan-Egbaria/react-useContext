import { ButtonColorProvider } from "./context/ButtonColor.context";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="flex h-screen w-full">
      <ButtonColorProvider>
        <Home />
      </ButtonColorProvider>
    </div>
  );
}
