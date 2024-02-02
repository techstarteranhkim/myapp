import "./App.css";
import Navbar from "./components/layout/navbar";
import Gallery from "./components/layout/gallery";
import Content from "./components/layout/content";
import Background from "./components/layout/background";
import DatabaseResponse from "./utils";

function App() {
  return (
    <div className="body">
      <Background></Background>
      <Navbar></Navbar>
      <Content profile={DatabaseResponse.profile}></Content>
      <Gallery
        profile={DatabaseResponse.profile}
        posts={DatabaseResponse.posts}
      ></Gallery>
    </div>
  );
}

export default App;
