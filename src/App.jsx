import { useEffect } from "react";

import logo from "./assets/logo.svg";
import menuIcon from "./assets/icon-menu.svg";
import menuCloseIcon from "./assets/icon-menu-close.svg";
import heroImg from "./assets/image-web-3-desktop.jpg";

import { MenuItem } from "./components/MenuItem";
import { Article } from "./components/Article";

import "./App.css";

export function App() {
  function openMenu() {
    document.querySelector(".wrapper").classList.add("menu-expanded");
  }

  function closeMenu() {
    document.querySelector(".wrapper").classList.remove("menu-expanded");
  }

  useEffect(() => {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", () => {
        closeMenu();
      });
    });
  });

  return (
    <div className="wrapper">
      <nav className="navigationbar">
        <img src={logo} alt="Logo" />
        <div className="menu">
          <ul className="menu-list">
            <MenuItem name="Home" href="#home" />
            <MenuItem name="New" href="#new" />
            <MenuItem name="Popular" href="#" />
            <MenuItem name="Trending" href="#" />
            <MenuItem name="Categories" href="#" />
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

      <main id="home">
        <header>
          <img className="hero-image" src={heroImg} alt="Hero Image" />
          <div className="hero-info">
            <h1>The Bright Future of Web 3.0?</h1>
            <div className="info-wrapper">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <a className="button" href="#">
                Read more
              </a>
            </div>
          </div>
        </header>
        <aside id="new">
          <h2>New</h2>
          <div className="articles-wrapper">
            <Article
              title="Hydrogen VS Electric Cars"
              description="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <Article
              title="The Downsides of AI Artistry"
              description="What are the possible adverse effects of on-demand AI image generation?"
            />
            <Article
              title="Is VC Funding Drying Up?"
              description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
            />
          </div>
        </aside>
      </main>
    </div>
  );
}
