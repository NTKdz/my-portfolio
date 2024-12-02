import React from "react";
import MonacoEditor from "@monaco-editor/react";

export default function CodeEditor() {
  return (
    <div className="h-full flex flex-col justify-center gap-4">
      <div className="">Khoi Nguyen The</div>
      <div className="flex gap-6">
        <button className="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          View projects
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Contact me
        </button>
      </div>
    </div>
  );
}
