import { yellowPressData } from "../../mockData/yellowPressData.js";
import { yellowPressTemplate } from "../templates/yellowPressTemplate.js";

const initYellowPress = (yellowPressNode) => {
  yellowPressNode.insertAdjacentHTML("beforeend", yellowPressTemplate(yellowPressData));
};

export default initYellowPress;
