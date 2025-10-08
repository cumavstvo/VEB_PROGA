// функция создания шаблона с параметрами логотипа
export const createLogoTemplate = ({ alt, src, href }) => {
  const template = `
    <div class="header__logo">
        <a href="${href}" class="logo__link">
            <img class="link__name" src="${src}" alt="${alt}" />
        </a>
    </div>
  `;

  return template;
};

// просто шаблон без параметров, не функция создания
// потому и называется сразу template
export const burgerTemplate = `
  <div class="header__burger_menu">
    <div class="burger_menu__line"></div>
    <div class="burger_menu__line"></div>
    <div class="burger_menu__line"></div>
  </div>
`;

export const createMenuItemTemplate = ({ title, href }) => {
  // TODO: есть у нас class="active", который отмечает на каком разделе мы сейчас находимся
  // что с ним делаем? как реализуем?
  const template = `
    <li class="menu__item">
      <a href="${href}" class="item__link">${title}</a>
    </li>
  `;

  return template;
};

// функция создания шаблона с параметрами CTA-кнопки
// добавлен логический параметр isPrimary для определения стилей кнопки
// основная или второстепенная
export const createButtonTemplate = ({ title, href, isPrimary }) => {
  const template = `
    <a href="${href}">
      <button class="cta_buttons__signin btn${isPrimary ? " primary-btn" : ""}">
        ${title}
      </button>
    </a>
  `;

  return template;
};

// функция создания шаблона с параметрами правой части меню
export const createRightHeaderTemplate = ({
  menuItemsTemplate,
  ctaButtonsTemplate,
}) => {
  const template = `
    <div class="header__right hidden">
      <aside class="header__menu">
        <div class="menu__close">
          <div class="menu__line"></div>
          <div class="menu__line"></div>
        </div>
        <ul class="menu">
          ${menuItemsTemplate} 
        </ul>
      </aside>
      <div class="cta_buttons">
        ${ctaButtonsTemplate}
      </div>
    </div>
  `;

  return template;
};

export const headerTemplate = ({ logoData, menuData, buttonsData }) => {
  // вызываются функции создания шаблона для создания соответствующих шаблонов
  const logoItemsTemplate = createLogoTemplate(logoData);

  const menuItemsTemplate = menuData
    .map((menuItem) => createMenuItemTemplate(menuItem))
    // join нужен т.к. шаблонизатор `` объединяем массив по умолчанию через запятую
    // и в DOM-дереве получаются лишние элементы
    .join("");

  const ctaButtonsTemplate = buttonsData
    .map((buttonsItem) => createButtonTemplate(buttonsItem))
    .join("");

  const rightHeaderTemplate = createRightHeaderTemplate({
    // используем объект для передачи полей
    // чтобы не зависеть от порядка передачи параметров в функцию создания шаблона
    menuItemsTemplate,
    ctaButtonsTemplate,
  });

  const resultTemplate =
    logoItemsTemplate + burgerTemplate + rightHeaderTemplate;

  return resultTemplate;
};
