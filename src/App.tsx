import "./App.css";
import AboutMe from "./components/about-me/AboutMe";
import Introduction from "./components/introduction/Introduction";
import MyProject from "./components/my-project/MyProject";

function App() {
  return (
    <div className="">
      <Introduction />
      <AboutMe />
      <MyProject />
    </div>
  );
}

export default App;
