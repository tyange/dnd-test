import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return (
    <div id="App">
      <RouterProvider router={router} />
    </div>
  );
}
