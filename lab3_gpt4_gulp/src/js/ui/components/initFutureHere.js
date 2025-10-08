import futureHereData from "../../mockData/futureHereData.js";
import { futureHereTemplate } from "../templates/futureHereTemplate.js";

const initFutureHere = (futureHereNode) => {
  futureHereNode.insertAdjacentHTML(
    "beforeend",
    futureHereTemplate(futureHereData)
  );
};

export default initFutureHere;
