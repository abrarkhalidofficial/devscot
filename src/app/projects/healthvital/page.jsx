"use client";

import "swiper/css";
import "@/styles/health.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import Fade from "@/components/Fade";
import Footer from "@/components/Footer";
import Footermobile from "@/components/Footermobile";
import GetDemo from "@/components/GetDemo";
import Header from "@/components/Header";
import Link from "next/link";
import splitText from "@/utils/splitText";

const aboutArray = [
  {
    heading: "Client Goals",
    text: "The primary design goal for Health Bit was to create an engaging and functional user experience, allowing users to easily view their health details and monitor health issues.",
  },
  {
    heading: "User-Centered Design:",
    text: "The app should prioritize the end-user, offering an intuitive and user-friendly interface that meets their needs and expectations.",
  },
  {
    heading: "Brand Consistency:",
    text: " The app design should reflect the company's brand identity and values, ensuring a consistent user experience across all touchpoints.",
  },
  {
    heading: "Functionality and Usability:",
    text: "The app should perform its intended functions effectively and efficiently while being easy to navigate and use.",
  }
  ,{
    heading: "Our Solution:",
    text: "The complete design process for this app took two months. We focused on simplicity and ease of use, while maintaining brand consistency throughout. The client was very supportive and clear about their requirements, which facilitated a smooth design process.",
  },{
    heading: "Project Summary:",
    text :"The client was highly satisfied with the design and our design process, which is of utmost importance to us. Consequently, the project concluded successfully."

  }
];

export default function ProjectDetails() {
  const [swiperSlides, setSwiperSlides] = useState(6);

  const checkWidth = () => {
    if (window.innerWidth > 1366) {
      setSwiperSlides(5.8);
    } else if (window.innerWidth > 1200) {
      setSwiperSlides(5.3);
    } else if (window.innerWidth > 900) {
      setSwiperSlides(3);
    } else if (window.innerWidth > 730) {
      setSwiperSlides(2.5);
    } else if (window.innerWidth > 600) {
      setSwiperSlides(2.3);
    } else {
      setSwiperSlides(1.3);
    }
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [swiperSlides]);
  const heading = splitText("Health Vital");

  return (
    <>
      <Header />
      <div className="project__details__container">
        <div className="project__details__text__header__container">
          <div className="project__details__text__header__container__left">
            <div className="project__details__text__header__container__left__heading">
              {heading}
            </div>
            <Fade up delay={100}>
              <div className="project__details__text__header__container__left__subheading">
              Health VItal is a comprehensive health monitoring app designed to track and analyze your vital signs, physical activity, and overall wellness. With real-time data and personalized insights, Health Vitals empowers you to take control of your health and make informed decisions. Achieve your wellness goals and maintain a healthier lifestyle with StayWell.

              </div>
            </Fade>
            <Fade up delay={100}>
              <div className="project__details__text__header__container__left__btn">
                <Link href="/contact" style={{ margin: "0px" }} className="btn">
                  Contact us
                </Link>
              </div>
            </Fade>
          </div>
          <Fade up delay={100}>
            <div className="project__details__text__header__container__right">
              <div className="project__details__text__header__container__right__logo__title">
                CLIENT
              </div>
              <div className="project__details__text__header__container__right__logo">
                <img src="/healthlogo.webp" alt="logo" />
              </div>
              <div className="project__details__right__text__services">
                SERVICES WE PROVIDED
              </div>
              <div className="project__details__right__text__services__title">
                UX/UI Design
              </div>
              <div className="project__details__right__text__services__title">
                Graphic Design
              </div>
            </div>
          </Fade>
        </div>
        <div className="project__header__imags__slider__over">
          <div className="project__header__imags__slider">
            <Swiper spaceBetween={20} slidesPerView={swiperSlides}>
              <SwiperSlide className="specialslider"></SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/health1.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/health2.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/health3.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/health4.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/health5.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/health1.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/health2.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/health3.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/health4.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/health5.webp" alt="image" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div
          className="project__details__text__header__container__bg"
          style={{
            background:
              "linear-gradient(120deg, #247266 3.95%, #135134 96.98%)",
          }}
        />
        <div className="project__details__about__container">
          <Fade up delay={100}>
            <div className="project__details__about__container__heading">
              ABOUT THE PROJECT
            </div>
          </Fade>
          {aboutArray.map(({ heading, text }, index) => (
            <div
              className="project__details__about__container__text__wraper"
              key={index}
            >
              <Fade up delay={100}>
                <div className="project__details__about__container__text__wraper__heading">
                  {heading}
                </div>
              </Fade>
              <Fade up delay={300}>
                <div className="project__details__about__container__text__wraper__sub__heading">
                  {text}
                </div>
              </Fade>
            </div>
          ))}
        </div>
        <div className="project__main__full__img">
          <img src="/healthvideo.webp" alt="devscot" />
        </div>
        <Fade up delay={100}>
          <div className="process__image">
            <img src="/healthsvg.svg" alt="" />
          </div>
        </Fade>
        <div className="Emphasizing__main__container">
          <Fade up delay={100}>
            <div className="Emphasizing__main__container__logo">
              <img src="/healthlogo.webp" alt="meal" />
            </div>
          </Fade>
          <Fade up delay={100}>
            <div className="Emphasizing__main__container__heading">
              Emphasizing consistency: creating a self-sufficient ecosystem
              within Infinity
            </div>
          </Fade>
          <Fade up delay={300}>
            <div className="Emphasizing__main__container__subheading">
              Our client is a visionary company that aims to simplify
              decentralized finance. With features offering convenience
            </div>
          </Fade>
          <Fade up delay={500}>
            <div className="Emphasizing__main__container__project__img">
              <img src="/healthimg.webp" alt="" />
            </div>
          </Fade>
        </div>
        <div className="Emphasizing__main__container__bg__over">
          <div className="Emphasizing__main__container__bg">
            <svg
              width="793"
              height="1533"
              viewBox="0 0 793 1533"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_1224_126)">
                <circle
                  cx="26.5"
                  cy="766.5"
                  r="254.5"
                  fill="#247266"
                  fillOpacity="0.58"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_1224_126"
                  x="-739.638"
                  y="0.361969"
                  width="1532.28"
                  height="1532.28"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="255.819"
                    result="effect1_foregroundBlur_1224_126"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="guide__section__wraper">
          <Fade up delay={100}>
            <div className="guide__section__wraper__heading">
              Visual Style Guide Creation
            </div>
          </Fade>
          <Fade up delay={300}>
            <div className="guide__section__wraper__sub__heading">
              We created a visual style guide, which was a milestone in the
              design consistency of the project. Just like the design system, it
              encompassed all visual elements that can be used across the
              Infinity platform.
            </div>
          </Fade>
          <div className="guide__section__card__wraper">
            <Fade up delay={100}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #247266 ",
                }}
              >
                #247266
              </div>
            </Fade>
            <Fade up delay={300}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #139948",
                  color: "BLACK",
                }}
              >
                #139948
              </div>
            </Fade>
            <Fade up delay={500}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #33373B",
                }}
              >
                #33373B
              </div>
            </Fade>
            <Fade up delay={700}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #FFFFFF",
                  color: "BLACK",
                }}
              >
                #FFFFFF
              </div>
            </Fade>
          </div>
          <div className="guide__section__card__font">
            <Fade up delay={500}>
              <div className="guide__section__card__font__left">
                <div className="guide__section__card__font__title">
                  Typography
                </div>
                <div className="guide__section__card__font__left__name">
                  Inter
                </div>
                <div className="guide__section__card__font__left__sub__name">
                  Semi-bold
                </div>
              </div>
            </Fade>
            <Fade up delay={800}>
              <div className="guide__section__card__font__right">
                <div className="guide__section__card__font__title">
                  Heading Font
                </div>
                <div className="guide__section__card__font__right__name">
                  Aa Bb Cc Dd Ee Ff Gg Hh li Kk LI Mm Nn Oo Pp Qq Rr Ss Tt Vv Xx
                  Yy Zz
                </div>
                <div className="guide__section__card__font__right__sub__name">
                  0123456789!@#$%*&*()_+
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="result__container__over">
          <div className="result__container">
            <Fade up delay={100}>
              <div className="result__container__heading">THE RESULT</div>
            </Fade>
            <div className="result__container__text__wraper__container">
              <Fade up delay={200}>
                <div className="result__container__text__wraper">
                  <div className="result__container__text__wraper__number">
                    80%
                  </div>
                  <div className="result__container__text__wraper__heading">
                    User satisfaction rate
                  </div>
                  <div className="result__container__text__wraper__subheading">
                    Our Web 3.0 development and design services left most users
                    satisfied.
                  </div>
                </div>
              </Fade>
              <Fade up delay={200}>
                <div className="result__container__text__wraper">
                  <div className="result__container__text__wraper__number">
                    40%
                  </div>
                  <div className="result__container__text__wraper__heading">
                    User satisfaction rate
                  </div>
                  <div className="result__container__text__wraper__subheading">
                    Our Web 3.0 development and design services left most users
                    satisfied.
                  </div>
                </div>
              </Fade>
              <Fade up delay={500}>
                <div className="result__container__text__wraper">
                  <div className="result__container__text__wraper__number">
                    25%
                  </div>
                  <div className="result__container__text__wraper__heading">
                    User satisfaction rate
                  </div>
                  <div className="result__container__text__wraper__subheading">
                    Our Web 3.0 development and design services left most users
                    satisfied.
                  </div>
                </div>
              </Fade>
              <Fade up delay={500}>
                <div className="result__container__text__wraper">
                  <div className="result__container__text__wraper__number">
                    5%
                  </div>
                  <div className="result__container__text__wraper__heading">
                    User satisfaction rate
                  </div>
                  <div className="result__container__text__wraper__subheading">
                    Our Web 3.0 development and design services left most users
                    satisfied.
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <GetDemo />
      </div>
      <Footer />
      <Footermobile />
    </>
  );
}
