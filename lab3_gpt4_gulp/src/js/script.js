import homePage from "./ui/pages/homePage.js";

// вешаем на окно прослушку загрузки DOM-дерева
// по окнчании загрузки, будет запущена функция инициализации подключаемых модулей
window.onload = () => {
  homePage();
};
