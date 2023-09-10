import logo from "../../public/logo.avif"


export default function Header() {
  const setThemeMode = (e) => {
    if (e.target.checked) {
      document.body.setAttribute("aria-theme", "light");
      document.querySelector("#root").style.colorScheme = "light";
    } else {
      document.body.setAttribute("aria-theme", "dark");
      document.querySelector("#root").style.colorScheme = "dark";
    }
  };
  return (
    <nav>
      <div className="container">
        <div className="nav--logo">
          <img src={logo} alt="this is our logo" />
          <span>jokeHub</span>
        </div>
        <input
          type="checkbox"
          className="theme-toggle"
          name="theme-changer-btn"
          id="themechangerbtn"
          onChange={setThemeMode}
        />
      </div>
    </nav>
  );
}
