import "./App.css";
import Header from "./components/layout/header";
import Gallery from "./components/layout/gallery";
import Content from "./components/layout/content";

function App() {
  return (
    <div>
      <div className="body">
        <div className="header">
          <Header></Header>{" "}
        </div>
        <div className="content">
          <Content></Content>
        </div>
        <div className="gallery">
          <Gallery></Gallery>
        </div>
      </div>
    </div>
  );
}

export default App;
