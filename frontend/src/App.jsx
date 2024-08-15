import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, BookNow, HomeLayout, LandingPage, Error } from "./pages";
import GlobalStyle from "./assets/global-styles/globalFonts";

// implement error handling page
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <LandingPage />,
        errorElement: <h2>a single page error occurred</h2>,
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
