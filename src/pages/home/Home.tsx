import { useNavigate } from "react-router";
import "./styles.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col justify-center gap-8 pl-8 relative overflow-hidden">
      <div id="text-animation" className="text-7xl">
        Khoi Nguyen The
      </div>
      <div className="uppercase text-xl text-blue-500">fullstack developer</div>
      <div className="flex gap-6">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => {
            navigate("/projects");
          }}
        >
          View projects
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => navigate("/contact")}
        >
          Contact me
        </button>
      </div>

      <div className="sm:block hidden animate-spin-duration-10 absolute right-4 top-4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-60" />
      <div className="sm:block hidden animate-spin-duration-9 absolute right-40 bottom-10 w-80 h-80 bg-gradient-to-r from-[#fc00ff] to-blue-500 rounded-full opacity-50" />
    </div>
  );
}
