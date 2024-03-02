"use client";

import Fade from "react-reveal/Fade";
import { useState } from "react";

const entries = [
  {
    number: "25K+",
    text: "Project Completed",
    delay: "100",
  },
  {
    number: "8K+",
    text: "Happy Costomers",
    delay: "500",
  },
  {
    number: "25K+",
    text: "Years Experiences",
    delay: "800",
  },
  {
    number: "25K+",
    text: "Awards Achievement",
    delay: "1200",
  },
];

export default function NumbersSection() {
  const [isMouseHover, setIsMouseHover] = useState(2);

  return (
    <div className="numbers__section">
      <div className="numbers__section__content">
        {entries.map((entry, index) => (
          <Fade up delay={parseInt(entry.delay)} key={index}>
            <div
              className={
                isMouseHover === index
                  ? "numbers__section__content__entry__hover"
                  : "numbers__section__content__entry"
              }
              key={index}
              onMouseEnter={() => setIsMouseHover(index)}
            >
              <div className="numbers__section__content__entry__number">
                {entry.number}
              </div>
              <div
                className={
                  isMouseHover === index
                    ? "numbers__section__content__entry__text__hover"
                    : "numbers__section__content__entry__text"
                }
              >
                {entry.text}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

function NumberSectionEntry({}) {
  return (
    <div className="numbers__section__content__entry">
      <div className="numbers__section__content__entry__number">25k+</div>
      <div className="numbers__section__content__entry__text">
        Project Completed
      </div>
    </div>
  );
}
