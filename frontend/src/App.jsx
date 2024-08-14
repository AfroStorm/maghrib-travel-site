import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, BookNow, HomeLayout, LandingPage } from "./pages";
import GlobalStyle from "./assets/global-styles/globalFonts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        element: <LandingPage />,
        index: true,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "book-now",
        element: <BookNow />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
