import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import FileSelector from "./components/file-selector/FileSelector";
import NavBar from "./components/nav-bar/NavBar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen flex flex-col">
        <div className="border-b border-b-[rgba(255,255,255,0.1)] flex p-1 items-center">
          <div className="h-[24px] px-2">
            <img src="src\assets\icon.png" className="h-full w-full"></img>
          </div>
          {["File", "Edit", "View", "Go", "Run", "Terminal", "Help"].map(
            (item) => (
              <div className="py-1">
                {" "}
                <div
                  key={item}
                  className="px-2 text-sm rounded hover:bg-[rgba(255,255,255,0.1)] hover:cursor-pointer"
                >
                  {item}
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex flex-1">
          <NavBar />

          <div className="flex-1 flex flex-col">
            <FileSelector />
            <div className="flex-1 min-w-0 bg-zinc-900">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<About />} />
                <Route path="/contact" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
