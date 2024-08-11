import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { NavBarProvider } from "./app-context/nav-bar-context/navBarContext.jsx";
import { HeroProvider } from "./app-context/home-page-context/hero-context/heroContext.jsx";
import { AboutProvider } from "./app-context/home-page-context/about-context/aboutContext.jsx";
import { ServiceProvider } from "./app-context/home-page-context/service-context/serviceContext.jsx";
import { ImageSliderProvider } from "./app-context/home-page-context/image-slider-context/imageSliderContext.jsx";
import { TestimonialProvider } from "./app-context/home-page-context/testimonial-context/testimonialContext.jsx";
import { SecHeroProvider } from "./app-context/home-page-context/second-hero-context/secHeroContext.jsx";
import { FormDataProvider } from "./app-context/home-page-context/form-data-context/formDataContext.jsx";
import { AboutPageProvider } from "./app-context/about-page-context/AboutPageContext.jsx";
import { DestinationPageProvider } from "./app-context/book-now-context/destinationPageContext.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NavBarProvider>
        <HeroProvider>
          <AboutProvider>
            <ServiceProvider>
              <ImageSliderProvider>
                <TestimonialProvider>
                  <SecHeroProvider>
                    <FormDataProvider>
                      <AboutPageProvider>
                        <DestinationPageProvider>
                          <App />
                        </DestinationPageProvider>
                      </AboutPageProvider>
                    </FormDataProvider>
                  </SecHeroProvider>
                </TestimonialProvider>
              </ImageSliderProvider>
            </ServiceProvider>
          </AboutProvider>
        </HeroProvider>
      </NavBarProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
