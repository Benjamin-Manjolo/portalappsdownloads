import React from "react";
import ImageGallery from "./ImageGallery";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ServicesPage from "./Services";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-4 bg-white">
          <div className="text-gray-600">Docs</div>
          <div className="flex space-x-4">
            <Link to="/services" className="text-gray-600 hover:underline">
              Services
            </Link>
            <div className="text-gray-600">Products</div>
            <div className="text-gray-600">Pricing</div>
          </div>
        </nav>

        <Routes>
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section className="flex flex-col items-center text-center p-2">
                  <h1 className="text-green-500 text-2xl font-medium">
                    nzaEazy
                  </h1>
                  <h2 className="text-green-500 text-1xl font-bold ">
                    BETTER IN TECHNOLOGY
                  </h2>
                  <p className="text-gray-700 text-sm">
                    inspiring innovative mindset among youths
                  </p>
                </section>

                {/* Our Team Section */}
                <section className="px-4 py-6 w-3/4">
                  <h2 className="text-green-500 text-3xl font-bold mb-2">
                    Our team
                  </h2>
                  <p className="text-gray-700">
                    Benjamin Manjolo founder, is a graphic designer, software
                    engineer and also a photographer who is currently staying in
                    Blantyre.
                  </p>
                </section>

                {/* Our Goal Section */}
                <section className="px-3 pl-22 py-6 flex flex-col items-end text-right ">
                  <h2 className="text-green-500 text-3xl font-bold mb-2">
                    Our goal
                  </h2>
                  <p className="text-gray-700 max-w-xs">
                    nzaEazy aims at promoting youths in Malawi to embrace
                    technology and how they can make a good life out of it
                  </p>
                </section>

                {/* Join Us Section */}
                <section className="px-4 py-6">
                  <h2 className="text-green-500 text-3xl font-bold mb-4">
                    Hire us
                  </h2>
                  <button className="bg-green-500 text-white px-4 py-2 uppercase font-medium">
                    Message
                  </button>
                </section>

                {/* Explore Section */}
                <section className="py-8">
                  <ImageGallery />
                </section>

                {/* Footer */}
                <footer className="mt-auto bg-green-800 text-white p-4">
                  <p className="text-center">&copy; 2025 nzaEazy</p>
                </footer>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
