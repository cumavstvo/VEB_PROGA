import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Fotolupi from "../components/Fotolupi";
import FutureVrWomen from "../components/FutureVrWomen";
import BigCta from "../components/BigCta";
import YellowPress from "../components/YellowPress";
import JustFooter from "../components/JustFooter";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section fotolupi_section">
        <Fotolupi />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section future_vr_women_section">
        <FutureVrWomen />
      </section>
      <section className="section big_cta_section">
        <BigCta />
      </section>
      <section className="section yellow_press_section">
        <YellowPress />
      </section>
      <section className="section just_footer_section">
        <JustFooter />
      </section>
    </>
  );
};

export default Home;
