import { bigCtaData } from "../../mockData/bigCtaData.js";
import { bigCtaTemplate } from "../templates/bigCtaTemplate.js";

const initBigCta = (bigCtaNode) => {
  bigCtaNode.insertAdjacentHTML("beforeend", bigCtaTemplate(bigCtaData));
};

export default initBigCta;
