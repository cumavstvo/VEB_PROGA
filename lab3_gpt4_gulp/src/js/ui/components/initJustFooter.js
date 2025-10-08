import justFooterData from "../../mockData/justFooterData.js";
import { justFooterTemplate } from "../templates/justFooterTemplate.js";

const initJustFooter = (justFooterNode) => {
  justFooterNode.insertAdjacentHTML("beforeend", justFooterTemplate(justFooterData));
};

export default initJustFooter;
