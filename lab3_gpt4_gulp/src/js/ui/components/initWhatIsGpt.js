import whatIsGptData from "../../mockData/whatIsGptData.js";
import { whatIsGptTemplate } from "../templates/whatIsGptTemplate.js";

const initWhatIsGpt = (whatIsGptNode) => {
  whatIsGptNode.insertAdjacentHTML(
    "beforeend",
    whatIsGptTemplate(whatIsGptData)
  );
};

export default initWhatIsGpt;
