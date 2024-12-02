import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center gap-8 pl-8 relative">
      <div id="text-animation" className="text-7xl">
        Khoi Nguyen The
      </div>
      <div className="uppercase text-xl text-[#00dbde]">
        fullstack developer
      </div>
      <div className="flex gap-6">
        <button className="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          View projects
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Contact me
        </button>
      </div>

      <div className="absolute right-4 top-4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-60" />
      <div className="absolute right-40 bottom-10 w-80 h-80 bg-gradient-to-r from-[#fc00ff] to-[#00dbde] rounded-full opacity-50" />
    </div>
  );
}
