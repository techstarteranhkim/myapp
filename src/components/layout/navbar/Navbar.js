import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <a href="index.html" className="logo-container">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2021/11/27/Cat-logo-Graphics-20826806-1.jpg"
          alt="Logo"
        />
      </a>
      <div className="button-container">
        <button onClick={() => (window.location.href = "login.html")}>
          Log in
        </button>
        <button onClick={() => (window.location.href = "signup.html")}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
