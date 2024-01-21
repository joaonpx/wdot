import logo from "./assets/logo.svg";
import menuIcon from "./assets/icon-menu.svg";
import menuCloseIcon from "./assets/icon-menu-close.svg";
import { MenuItem } from "./components/MenuItem";
import "./App.css";

export function App() {
  function openMenu() {
    document.querySelector(".container").classList.add("menu-expanded");
  }

  function closeMenu() {
    document.querySelector(".container").classList.remove("menu-expanded");
  }

  return (
    <div className="container">
      <nav className="navigationbar">
        <img src={logo} alt="Logo" />
        <div className="menu">
          <ul className="menu-list">
            <MenuItem name="Home" />
            <MenuItem name="New" />
            <MenuItem name="Popular" />
            <MenuItem name="Trending" />
          </ul>
        </div>
        <button className="open-menu-button" onClick={openMenu}>
          <img className="menu-icon" src={menuIcon} alt="Open Icon" />
        </button>
        <button className="close-menu-button" onClick={closeMenu}>
          <img
            className="menu-icon"
            src={menuCloseIcon}
            alt="Menu Close Icon"
          />
        </button>
      </nav>
    </div>
  );
}
