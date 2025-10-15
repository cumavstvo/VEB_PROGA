import logoSvg from "../assets/img/logo.svg";

export const menuData = [
  {
    title: "Главная",
    href: "#",
  },
  {
    title: "Что такое GPT?",
    href: "#",
  },
  {
    title: "Open AI",
    href: "#",
  },
  {
    title: "Кейсы",
    href: "#",
  },
  {
    title: "Библиотека",
    href: "#",
  },
];

export const buttonsData = [
  {
    title: "Войти",
    href: "#",
    isPrimary: false,
  },
  {
    title: "Регистрация",
    href: "#",
    isPrimary: true,
  },
];

export const logoData = {
  alt: "logo",
  src: logoSvg,
  href: "#",
};

const headerData = {
  logoData,
  menuData,
  buttonsData,
};

export default headerData;
