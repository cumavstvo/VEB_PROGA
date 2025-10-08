import headerData from "../../mockData/headerData.js";
import { headerTemplate } from "../templates/headerTemplate.js";

const initHeader = (headerNode) => {
  headerNode.insertAdjacentHTML("beforeend", headerTemplate(headerData));
};

export default initHeader;
