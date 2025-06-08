import React, { useState, useEffect } from "react";

export default function App() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    let timer;
    if (showPrompt) {
      timer = setTimeout(() => {
        setShowPrompt(false);
        // Redirect to portfolio section
        const portfolioSection = document.getElementById("portfolio");
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showPrompt]);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowPrompt(true);
    // Allow download to start by creating a temporary link and clicking it
    const link = e.currentTarget;
    const href = link.getAttribute("href");
    const tempLink = document.createElement("a");
    tempLink.href = href;
    tempLink.download = "";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  return (
    <>
      <div className="flex flex-col mt-20 justify-center p-5 items-center">
        <p className="text-bold text-4xl">DOWNLOAD</p>

        {showPrompt && (
          <div className="mb-4 p-2 bg-green-200 text-green-800 rounded">
            Downloading has started
          </div>
        )}
        <button className="bg-blue-500 h-auto w-auto rounded-2xl p-3 m-4 ">
          <a
            href="/Unima_1.0.0.apk"
            onClick={handleDownloadClick}
            className="text-black underline mb-2"
          >
            Unima
          </a>
        </button>
        <button className="bg-blue-500 h-auto w-auto rounded-2xl p-3 m-4 ">
          {" "}
          <a
            href="/Luanar_1.0.0.apk"
            onClick={handleDownloadClick}
            className="text-red-500 underline mb-2"
          >
            Luanar
          </a>
        </button>
        <button className="bg-blue-500 h-auto w-auto rounded-2xl p-3 m-4 ">
          <a
            href="/Cunima_1.0.0.apk"
            onClick={handleDownloadClick}
            className="text-white underline mb-2"
          >
            Cunima
          </a>
        </button>
        <button className="bg-blue-500 h-auto w-auto rounded-2xl p-3 m-4 ">
          {" "}
          <a
            href="/Kuhes_1.0.0.apk"
            onClick={handleDownloadClick}
            className="text-white underline mb-2"
          >
            Kuhes
          </a>
        </button>
        <button>PAY</button>
      </div>

      {/* Portfolio section at the bottom */}
      <div
        id="portfolio"
        className="mt-40 p-5 bg-gray-500 w-screen text-center"
      >
        <h2 className=" font-light mb-4">
          follow our facebook page Nzaeazy llc
          <p>@2025 Nzaeazy llc.</p>
        </h2>
      </div>
    </>
  );
}
