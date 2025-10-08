import fotolupiData from "../../mockData/fotolupiData.js";
import { fotolupiTemplate } from "../templates/fotolupiTemplate.js";

const initFotolupi = (fotolupiNode) => {
  fotolupiNode.insertAdjacentHTML("beforeend", fotolupiTemplate(fotolupiData));
};

export default initFotolupi;
