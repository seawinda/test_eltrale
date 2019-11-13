import React, { Component } from "react";
import { directionsData } from "../directionsData";
import "../scss/directions.scss";

export default class Directions extends Component {
  state = {
    directions: directionsData
  };
  render() {
    return (
      <section className="directions">
        <div className="page-wrapper">
          <h2 className="section-title">
            Популярные направления
            <span className="section-title__comment">
              Экскурсии по всем городам мира!
            </span>
          </h2>
          <div className="directions__items">
            {this.state.directions.map(item => (
              <div
                className="directions__item"
                style={{
                  backgroundImage: `url(${item.dirimage})`
                }}
                key={item.id}
              >
                <div className="directions__town">{item.dirtown}</div>
                <a href="#" className="directions__count">
                  {item.dircount}
                  &nbsp;экскурсий
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
