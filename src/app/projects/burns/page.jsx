"use client";

import "swiper/css";
import "@/styles/burns.scss";

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
    heading: "The client",
    text: "DevScot proudly collaborated with Burns, a dynamic blogging and news platform committed to delivering engaging and informative content. Our partnership focused on designing a user interface (UI) that enhances user experience and facilitates seamless interaction with diverse topics and articles. Burns’ dedication to providing a platform for insightful discussions and up-to-date news aligns perfectly with DevScot’s mission to deliver innovative UI/UX solutions. Through extensive consultations and a deep understanding of Burns’ audience and editorial vision, we aimed to create a UI design that reflects their commitment to quality journalism and community engagement.",
  },
  {
    heading: "Challenge",
    text: "Designing for Burns presented specific challenges that demanded strategic solutions. These included creating a visually appealing and intuitive interface that caters to both casual readers and avid contributors, ensuring robust content management capabilities for editors, and optimizing the platform for performance across various devices and screen sizes. Additionally, incorporating features such as user-generated content moderation, real-time updates, and seamless social media integration posed technical complexities. DevScot addressed these challenges through thorough research, iterative design processes, and collaboration with Burns’ editorial team to ensure the UI design meets industry standards and enhances user interaction and engagement.",
  },
  {
    heading: "Our solution",
    text: "DevScot approached the UI design for Burns with a user-centric approach aimed at enhancing usability and visual appeal. We began by conducting comprehensive user research and usability testing to understand user behaviors and preferences in consuming and interacting with news and blog content. This informed our design decisions, enabling us to create a clean, intuitive interface that encourages exploration and engagement. Leveraging modern UI design principles, we implemented features such as personalized content recommendations, seamless navigation between categories and articles, and interactive elements for enhanced user interaction. Through continuous iteration and feedback loops with Burns, we refined the UI design to achieve optimal performance, accessibility, and user satisfaction. The result is a sophisticated and user-friendly UI for Burns that elevates the blogging and news reading experience, fostering a vibrant community of readers and contributors alike.",
  },
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
  const heading = splitText("Burns");

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
              Introducing Burns, your ultimate platform for blogging and staying updated with the latest news. Explore a diverse range of topics, from lifestyle and technology to current events, curated by passionate writers and journalists. Engage with insightful content, share your thoughts, and stay informed with Burns, where knowledge meets community.






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
                <img src="/burnslogo.webp" alt="logo" />
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
                  <img src="/burnsone.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/burnstwo.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/burnsthree.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/burnsfour.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/burnsfive.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/burnsone.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/burnstwo.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/burnsthree.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/burnsfour.webp" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project__header__imags__slider__card">
                  <img src="/burnsfive.webp" alt="image" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div
          className="project__details__text__header__container__bg"
          style={{
            background:
              "linear-gradient(120deg, #f2e72f 3.95%, #1f1709 96.98%)",
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
          <img src="/burnvideo.webp" alt="devscot" />
        </div>
        <Fade up delay={100}>
          <div className="process__image">
            <img src="/burnsvgg.svg" alt="" />
          </div>
        </Fade>
        <div className="Emphasizing__main__container">
          <Fade up delay={100}>
            <div className="Emphasizing__main__container__logo">
              <img src="/burnslogo.webp" alt="meal" />
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
              <img src="/burnimg.webp" alt="" />
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
                  fill="#F2E72F"
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
                  backgroundColor: " #F2E72F",
                }}
              >
                #F2E72F
              </div>
            </Fade>
            <Fade up delay={300}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #1F1709",
                  color: "BLACK",
                }}
              >
                #1F1709
              </div>
            </Fade>
            <Fade up delay={500}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #E0E0E0",
                }}
              >
                #E0E0E0
              </div>
            </Fade>
            <Fade up delay={700}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #868686",
                  color: "BLACK",
                }}
              >
                #868686
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
                  Poppines
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
