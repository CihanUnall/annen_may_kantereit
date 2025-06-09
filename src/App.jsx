import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/About";
import Album from "./pages/album/Album";
import Home from "./pages/home/Home";
import Youtube from "./pages/youtube/Youtube";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/pagenotfound/PageNotFound";
import Parent from "./pages/parent/Parent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/album",
        element: <Album />,
      },
      {
        path: "/youTube",
        element: <Youtube />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
