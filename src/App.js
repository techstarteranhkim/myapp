import "./App.css";
import Navbar from "./components/layout/navbar";
import Gallery from "./components/layout/gallery";
import Content from "./components/layout/content";
import Background from "./components/layout/background";
import Profile from "./components/layout/profile";

function App() {
  return (
    <div className="body">
      <Background></Background>
      <Navbar></Navbar>
      <Content></Content>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
