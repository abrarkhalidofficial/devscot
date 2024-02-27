import React, { useState } from "react";

import devscot1 from "../assets/devscot1.png";
import devscot2 from "../assets/devscot2.png";

export default function SolutionSection() {
  const entries = [
    {
      id: "web",
      heading: "Web App Development",
      text: "We create, products, brands, apps & websites for the companies all around the world class digital products",
    },
    {
      id: "mobile",
      heading: "Mobile App Development",
      text: "We create, products, brands, apps & websites for the companies all around the world class digital products",
    },
    {
      id: "ecommerce",
      heading: "E-commerce Solutions",
      text: "We create, products, brands, apps & websites for the companies all around the world class digital products",
    },
    {
      id: "design",
      heading: "UI/UX Designs",
      text: "We create, products, brands, apps & websites for the companies all around the world class digital products",
    },
    {
      id: "3d",
      heading: "3D Graphics & Animations",
      text: "We create, products, brands, apps & websites for the companies all around the world class digital products",
    },
  ];

  const [isMouseHover, setIsMouseHover] = useState("mobile");
  const selectedEntry = entries.find((entry) => entry.id === isMouseHover);

  return (
    <div className="solution__section">
      <div className="solution__section__content">
        <div className="solution__section__content__heading">
          Solutions We Provide
        </div>
        <div className="solution__section__content__data">
          <div
            className="solution__section__content__data__left"
            style={{
              background: "linear-gradient(to bottom, #42AA8C, #1C6D55)",
            }}
          >
            <img
              src={devscot2}
              className="solution__section__content__data__left__backgound"
            />
            <img
              className="solution__section__content__data__left__img"
              src={devscot1}
            />
            <div className="solution__section__content__data__info">
              <div className="solution__section__content__data__info__text">
                {selectedEntry.heading}
              </div>
              <div className="solution__section__content__data__info__btn">
                Order Now
                <svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5164 6.5164C16.8016 6.2312 16.8016 5.7688 16.5164 5.4836L11.8688 0.836022C11.5836 0.550823 11.1212 0.550823 10.836 0.836022C10.5508 1.12122 10.5508 1.58362 10.836 1.86882L14.9672 6L10.836 10.1312C10.5508 10.4164 10.5508 10.8788 10.836 11.164C11.1212 11.4492 11.5836 11.4492 11.8688 11.164L16.5164 6.5164ZM0 6.7303H16V5.2697H0V6.7303Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="solution__section__content__data__right">
            {entries.map((entry, index) => (
              <div
                className={
                  isMouseHover === entry.id
                    ? "solution__section__content__data__right__entry__hover"
                    : "solution__section__content__data__right__entry"
                }
                id={index}
                onMouseEnter={() => setIsMouseHover(entry.id)}
              >
                <div
                  className={
                    isMouseHover === entry.id
                      ? "solution__section__content__data__right__entry__heading__hover"
                      : "solution__section__content__data__right__entry__heading"
                  }
                >
                  {entry.heading}
                </div>
                <div className="solution__section__content__data__right__entry__text">
                  {entry.text}
                </div>
                <div
                  className={
                    isMouseHover === entry.id
                      ? "solution__section__content__data__right__entry__btn__hover"
                      : "solution__section__content__data__right__entry__btn"
                  }
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.4289 2C20.4289 1.21086 19.7891 0.571131 19 0.571131L6.14018 0.57113C5.35104 0.571131 4.71131 1.21086 4.71131 2C4.71131 2.78914 5.35104 3.42887 6.14018 3.42887L17.5711 3.42887L17.5711 14.8598C17.5711 15.649 18.2109 16.2887 19 16.2887C19.7891 16.2887 20.4289 15.649 20.4289 14.8598L20.4289 2ZM3.01036 20.0104L20.0104 3.01036L17.9896 0.989637L0.989637 17.9896L3.01036 20.0104Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}