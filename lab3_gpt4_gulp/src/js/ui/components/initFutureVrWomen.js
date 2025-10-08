import { futureVrWomenData } from "../../mockData/futureVrWomenData.js";
import { futureVrWomenTemplate } from "../templates/futureVrWomenTemplate.js";

const initFutureVrWomen = (futureVrWomenNode) => {
  futureVrWomenNode.insertAdjacentHTML("beforeend", futureVrWomenTemplate(futureVrWomenData));
};

export default initFutureVrWomen;
