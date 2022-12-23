import "@fontsource/metropolis";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="max-w-[1280px] w-[94%] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
