import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="header"><Header></Header> </div>
      <div className="body">
        <div className="content"><Content></Content></div>
        <div className="gallery"><Gallery></Gallery></div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <a href="index.html" className="logo-container">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/11/27/Cat-logo-Graphics-20826806-1.jpg" alt="Logo" width="60" height="50" />
      </a>
      <div className="button-container">
        <button onClick={() => window.location.href='login.html'}>Log in</button>
        <button onClick={() => window.location.href='signup.html'}>Sign up</button>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/05/01/Black-cat-simple-logo-design-Graphics-11560780-1-1-580x387.jpg" alt="techstarter_gmbh_logo" />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Cat Fanatics</h2>
        <h3>🐾 Welcome to Cat Fanatics! We’re a community that’s more tangled up in yarn than your grandma’s knitting basket, and we wouldn’t have it any other way!</h3>
        <h3>😸 Our love for cats is like a ball of yarn in a kitten’s paws, unending and a little bit chaotic. From the tiniest mew of a newborn kitten to the distinguished roar of a senior cat, we’re here for it all. We’re not kitten around when we say our members might just love cats more than catnip! So come join us, and let’s be crazy cat people together!</h3>
        <h3>🐈‍⬛ #CatFanatics #CrazyForCats</h3>
        <button>Follow</button>
        <button>Message</button>
      </div>
    </div>
  );
}

function Gallery() {
  const imageUrls = [
    'https://t4.ftcdn.net/jpg/00/97/58/97/240_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
    "https://t3.ftcdn.net/jpg/03/31/21/08/240_F_331210846_9yjYz8hRqqvezWIIIcr1sL8UB4zyhyQg.jpg",
    'https://t4.ftcdn.net/jpg/01/02/62/81/240_F_102628155_ZPiAaNEDRSZU2S0LAkbcgvwLyMmr9c2Y.jpg'
    // ...
  ];

  return (
    <div>
      <h2 className="centered-text">Catmazing Galerie</h2>
      <div className="grid-container">
        {imageUrls.map((url, index) => (
          <div key={index} className="image-container">
            <img src={url} alt={`Gallery image ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;