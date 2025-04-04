import React from "react";
import ImageGallery from "./ImageGallery";
import Pansi from "./Pansi";
import Sidebarl from "./Sidebarl";

export default function App() {
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center sm:flex-row sm:gap-6 sm:py-4 border-b-1 border-b-white">
        <img
          className="block h-24 rounded-full sm:h-32 sm:mx-0 sm:shrink-0"
          src="/images/image.jpg"
          alt=""
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-bold text-white">BENJAMIN MANJOLO</p>
            <p className="font-medium text-gray-500">
              Product Engineer | 🎨 Graphic Designer | 👨‍💻 Front-end Developer |
              UI/UX Newbie | 📱 Mobile Photographer | 🛡️ Cybersecurity
              Enthusiast <br />| Founder @ nzaEazy
            </p>
          </div>
          <button className="border border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-4 py-2 rounded">
            Message
          </button>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="hidden sm:block">
          <Sidebar />
        </div>
        <ImageGallery />
        <div className="">
          <Sidebarl />
        </div>
      </div>
      <Pansi />
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="m-5">
      <div className="flex flex-col border-l-2 border-white-300 space-y-2 p-4 bg-white-500 shadow-2xl h-screen rounded-2xl">
        <nav className="p-4 w-44 h-fit">
          <ul className="items-center">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-50 hover:bg-orange-200 rounded"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-50 hover:bg-orange-200 rounded"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-50 hover:bg-orange-200 rounded"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-50 hover:bg-orange-200 rounded"
              >
                Messages
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div></div>
    </div>
  );
}
