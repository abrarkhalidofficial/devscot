import FeatureSection from "@/components/FeatureSection";
import FeatureSectionMobile from "@/components/FeatureSectionMobile";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeSection from "../components/HomeSection";
import HomeTestimonials from "@/components/HomeTestimonials";
import HowWorkSection from "@/components/HowWorkSection";
import NumbersSection from "@/components/NumbersSection";
import SolutionSection from "@/components/SolutionSection";
import VideoSection from "@/components/VideoSection";

export default function Index() {
  return (
    <>
      <Header />
      <HomeSection />
      <section className="hero__section__aboutus">
        <div className="hero__section__aboutus__content">
          <div className="hero__section__aboutus__content__left">
            We unlock the potential of your business with creative digital
            solutions.
          </div>
          <div className="hero__section__aboutus__content__right">
            From traditional PR and thought leadership campaigns to storytelling
            and creative social media management we’ve got you covered.
            Something is not your average order-taking vendor. We are proud to
            be the go-to partner for some of the world’s biggest agencies and
            brands because they trust our expertise.
          </div>
        </div>
        <div className="line" />
      </section>
      <SolutionSection />
      <VideoSection />
      <NumbersSection />
      <HowWorkSection />
      <FeatureSection />
      <FeatureSectionMobile />
      <HomeTestimonials />
      <Footer />
    </>
  );
}
