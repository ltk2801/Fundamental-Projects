import React, { useEffect, useState } from "react";

import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(longList);

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + people.length) % people.length);
  };

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % people.length);
  };

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(sliderId);
    };
  }, [activeIndex]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className={`slide `}
            style={{
              transform: `translateX(${100 * (personIndex - activeIndex)}%)`,
              opacity: personIndex === activeIndex ? 1 : 0,
              visibility: personIndex === activeIndex ? "visible" : "hidden ",
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={() => prevSlide()}>
        {" "}
        <FiChevronLeft />{" "}
      </button>
      <button type="button" className="next" onClick={() => nextSlide()}>
        {" "}
        <FiChevronRight />{" "}
      </button>
    </section>
  );
};

export default Carousel;
