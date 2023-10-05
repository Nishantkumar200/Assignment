import { createBrowserRouter } from "react-router-dom";
import Videos from "../components/VideoSeries/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Videos />,
  },
  {
    path: "/admin",
    element: <h2>Hello</h2>,
  },
]);

export default router;
