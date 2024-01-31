import styles from "./Content.module.css";

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.flexContainer}>
        <div className={styles.imageContainer}>
          <img
            src="https://png2.cleanpng.com/sh/f933908e9895e43774565fb2d18cc597/L0KzQYm3WMEzN5DBgJH0aYP2gLBuTfNifF5oedg2d3jsg7zskwMua5JrfZ9sYYTpdX73jPVie5YyedZ4cISwc7L7TgBqdl5oeeZvZT24cofthMIxOGI5TKs5MD67RIW7WcIzQGI6S6Y5NUS8QYO3WMMyNqFzf3==/kisspng-cat-caf-whiskers-cafe-catfe-please-adopt-cat-pin-catfe-5b6fd200144900.8444922815340549120831.png"
            alt="techstarter_gmbh_logo"
          />
        </div>
        <div className={styles.textContainer}>
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
