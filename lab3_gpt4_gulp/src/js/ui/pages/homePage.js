import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initFotolupi from "./../components/initFotolupi.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initFutureVrWomen from "./../components/initFutureVrWomen.js";
import initBigCta from "./../components/initBigCta.js";
import initYellowPress from "./../components/initYellowPress.js";
import initJustFooter from "./../components/initJustFooter.js";
import initBurger from "./../components/initBurger.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section fotolupi_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section future_vr_women"></section>
    <section class="section big_cta"></section>
    <section class="section yellow_press"></section>
    <section class="section just_footer"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация картинок с лицами запросивших доступ
  const fotolupiNode = rootNode.querySelector(".fotolupi_section");
  initFotolupi(fotolupiNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация запроса раннего доступа с тёткой
  const futureVrWomenNode = rootNode.querySelector(".future_vr_women");
  initFutureVrWomen(futureVrWomenNode);

  // инициализация big CTA
  const bigCtaNode = rootNode.querySelector(".big_cta");
  initBigCta(bigCtaNode);

  // инициализация статей
  const yellowPressNode = rootNode.querySelector(".yellow_press");
  initYellowPress(yellowPressNode);

  // инициализация футера
  const justFooterNode = rootNode.querySelector(".just_footer");
  initJustFooter(justFooterNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
