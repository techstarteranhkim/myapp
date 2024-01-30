import "./App.css";
import Navbar from "./components/layout/navbar";
import Gallery from "./components/layout/gallery";
import Content from "./components/layout/content";

function App() {
  return (
    <div className="body">
      <Navbar></Navbar>
      <Content></Content>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
