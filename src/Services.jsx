import React from "react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 bg-white"></nav>

      {/* Services Header */}
      <section className="px-6 pt-8">
        <h1 className="text-green-400 text-3xl font-light mb-4">Services</h1>

        {/* Service Categories */}
        <div className="flex space-x-8 text-sm mb-6">
          <div className="font-medium">Photography</div>
          <div className="text-gray-500">Web development</div>
          <div className="text-gray-500">Graphic designing</div>
        </div>
      </section>

      {/* Photography Portfolio */}
      <section className="px-6 pb-12">
        {/* Scenarios Row */}
        <div className="mb-6">
          <p className="text-xs text-gray-600 mb-2">scenarios</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 aspect-square"></div>
            <div className="bg-gray-200 aspect-square"></div>
          </div>
        </div>

        {/* Portraits Row */}
        <div className="mb-6">
          <p className="text-xs text-gray-600 mb-2">portraits</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 aspect-square"></div>
            <div className="bg-gray-200 aspect-square"></div>
          </div>
        </div>

        {/* Random Row */}
        <div className="mb-6">
          <p className="text-xs text-gray-600 mb-2">random</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 aspect-square"></div>
            <div className="bg-gray-200 aspect-square"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-green-800 h-12"></footer>
    </div>
  );
}
