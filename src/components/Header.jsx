import React, { Component } from "react";
import logo from "../imgs/logogo.svg";
import login from "../imgs/login.svg";
import local from "../imgs/local.png";
import "../scss/header.scss";

export default class Header extends Component {
  render() {
    const ready = callback => {
      if (document.readyState !== "loading") callback();
      else document.addEventListener("DOMContentLoaded", callback);
    };
    ready(() => {
      const firstScreen = document.querySelector(".first-screen");
      const menu = document.querySelector(".fixed_menu");
      document.addEventListener("scroll", e => {
        const scrolled = window.pageYOffset;
        if (scrolled > firstScreen.clientHeight - 100) {
          menu.classList.add("fixed_menu--active");
        } else {
          menu.classList.remove("fixed_menu--active");
        }
      });
    });
    return (
      <header className="header fixed_menu">
        <div className="page-wrapper">
          <img src={logo} className="header__logo" alt="logo" />
          <nav className="header__menu mainmenu">
            <a href="#" className="mainmenu__link">
              Авиабилеты
            </a>
            <a href="#" className="mainmenu__link">
              Туры
            </a>
            <a href="#" className="mainmenu__link">
              Отели
            </a>
            <a href="#" className="mainmenu__link">
              Страны
            </a>
            <a href="#" className="mainmenu__link">
              О компании
            </a>
          </nav>
          <a href="#" className="header__login">
            <img src={login} alt="" />
            Войти
          </a>
          <button type="button" className="button header__local local-button">
            <img
              src={local}
              width="16"
              height="18"
              alt=""
              className="local-button__icon"
            />
            ₽
          </button>
        </div>
      </header>
    );
  }
}
