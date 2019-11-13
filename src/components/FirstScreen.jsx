import React, { Component } from "react";
import "../scss/firstscreen.scss";

export default class FirstScreen extends Component {
  render() {
    return (
      <section className="first-screen">
        <div className="page-wrapper">
          <h1 className="main-title first-screen__title">
            Поиск Экскурсий, Отелей, Интересных мест
          </h1>
          <form action="" className="first-screen__search form">
            <label className="form__input-label">
              <input
                type="text"
                className="form__input form__input--search"
                placeholder=" "
                required="required"
                autocomplite="on"
              ></input>
              <span className="form__placeholder form__placeholder--search">
                Я ищу
              </span>
            </label>
            <button
              type="submit"
              className="button form__button form__button--search"
            >
              Найти
            </button>
          </form>
        </div>
      </section>
    );
  }
}
