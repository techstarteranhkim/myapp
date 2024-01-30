function Content() {
  return (
    <div className="content">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2021/05/01/Black-cat-simple-logo-design-Graphics-11560780-1-1-580x387.jpg"
            alt="techstarter_gmbh_logo"
          />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Cat Fanatics</h2>
          <h3>
            🐾 Welcome to Cat Fanatics! We’re a community that’s more tangled up
            in yarn than your grandma’s knitting basket, and we wouldn’t have it
            any other way!
          </h3>
          <h3>
            😸 Our love for cats is like a ball of yarn in a kitten’s paws,
            unending and a little bit chaotic. From the tiniest mew of a newborn
            kitten to the distinguished roar of a senior cat, we’re here for it
            all. We’re not kitten around when we say our members might just love
            cats more than catnip! So come join us, and let’s be crazy cat
            people together!
          </h3>
          <h3>🐈‍⬛ #CatFanatics #CrazyForCats</h3>
          <button>Follow</button>
          <button>Message</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
