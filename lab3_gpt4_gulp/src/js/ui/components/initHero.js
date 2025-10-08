import { heroData } from "../../mockData/heroData.js";
import { heroTemplate } from "../templates/heroTemplate.js";

const initHero = (heroNode) => {
  heroNode.insertAdjacentHTML("beforeend", heroTemplate(heroData));
};

export default initHero;
