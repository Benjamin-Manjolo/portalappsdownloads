import react from "react";

export default function Pansi() {
  return (
    <div className="border-t-2 border-gray-500 bg-black">
      <div className="flex flex-col gap-4 justify-center items-center sm:flex-row sm:gap-6 sm:py-4">
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-serif text-center text-white/70">
              nzaEazy group
            </p>
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
    </div>
  );
}
