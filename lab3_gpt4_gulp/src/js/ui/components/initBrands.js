import brandsData from "../../mockData/brandsData.js";
import { brandsTemplate } from "../templates/brandsTemplate.js";

const initBrands = (brandsNode) => {
  brandsNode.insertAdjacentHTML("beforeend", brandsTemplate(brandsData));
};

export default initBrands;
