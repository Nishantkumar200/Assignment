import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Headers from "./components/Header/Headers";
import Footers from "./components/Footer/Footers";
import router from "./router";

function App() {
  return (
    <Suspense fallback={null}>
      <Headers />
      <RouterProvider router={router} />
      <Footers />
    </Suspense>
  );
}

export default App;
