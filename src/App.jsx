import { useState } from "react";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Calendar from "./components/calendar";
import Graph from "./components/graph";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Calendar />,
  },
  {
    path: "/graph",
    element: <Graph />,
  },
]);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <RouterProvider router={router} />
     <Outlet/>
    </>
  );
}

export default App;
