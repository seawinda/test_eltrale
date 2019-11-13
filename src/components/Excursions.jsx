import React, { Component } from "react";
import { excursionsData } from "../excursionsData";
import Slider from "react-slick";
import "../scss/excursions.scss";
import clock from "../imgs/clock.svg";
import star from "../imgs/star.svg";

export default class Excursions extends Component {
  state = {
    excursions: excursionsData
  };
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,

      responsive: [
        {
          breakpoint: 1025,
          settings: {
            dots: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots: true
          }
        }
      ]
    };

    return (
      <section className="excursions">
        <h2 className="section-title">
          Экскурсии и развлечения
          <span className="section-title__comment">
            Места и достопримечательности от частных гидов и компаний.
          </span>
        </h2>
        <div className="excursions__items page-wrapper">
          <Slider {...settings}>
            {this.state.excursions.map(item => (
              <div className="excursions__item" key={item.id}>
                <img
                  className="excursions__image"
                  src={item.excuimage}
                  alt=""
                />
                <div className="excursions__descr">
                  <h3 className="excursions__title">{item.excutitle}</h3>
                  <div className="excursions__text">{item.excutext}</div>
                  <div className="excursions__price">
                    <span className="excursions__price_value">
                      {item.excuprice}
                    </span>
                    &nbsp;с человека
                  </div>
                </div>
                <div className="excursions__info">
                  <div className="excursions__duration">
                    <img src={clock} width="16" alt="Время" />
                    &nbsp;{item.excuduration}
                  </div>
                  <div className="excursions__review">
                    <div className="excursions__stars stars">
                      <img src={star} width="11" alt="" />
                      <img src={star} width="11" alt="" />
                      <img src={star} width="11" alt="" />
                      <img src={star} width="11" alt="" />
                      <img src={star} width="11" alt="" />
                    </div>
                    {item.excureview}
                    &nbsp;отзывов
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="excursions__pager pager"></div>
      </section>
    );
  }
}
