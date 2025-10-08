export const createWhatIsGptTopTemplate = ({ header, content }) => {
  const template = `
        <h3 class="top__header lined_header">
            ${header}
        </h3>
        <p class="top__content">
            ${content}
        </p>
    `;

  return template;
};

export const createWhatIsGptMiddleTemplate = ({
  header,
  button: { href, title },
}) => {
  const template = `
        <h2 class="middle__header">
            ${header}
        </h2>
        <a href="${href}" class="middle_cta">${title}</a>
    `;

  return template;
};

export const createWhatIsGptContainerTemplate = ({ header, content }) => {
  return `
    <div class="bottom__container">
        <h3 class="container__header lined_header">${header}</h3>
        <p class="container__content">
            ${content}
        </p>
    </div>
    `;
};

export const createWhatIsGptBottomTemplate = (whatIsGptBottomData) => {
  const template = whatIsGptBottomData
    .map((item) => createWhatIsGptContainerTemplate(item))
    .join("");

  return template;
};

export const whatIsGptTemplate = ({
  whatIsGptTopData,
  whatIsGptMiddleData,
  whatIsGptBottomData,
}) => {
  const whatIsGptTopTemplate = createWhatIsGptTopTemplate(whatIsGptTopData);
  const whatIsGptMiddleTemplate =
    createWhatIsGptMiddleTemplate(whatIsGptMiddleData);
  const whatIsGptBottomTemplate =
    createWhatIsGptBottomTemplate(whatIsGptBottomData);

  const resultTemplate = `
        <div class="what_is_chatgpt_section__top">
           ${whatIsGptTopTemplate}
        </div>
        <div class="what_is_chatgpt_section__middle">
           ${whatIsGptMiddleTemplate}
        </div>
        <div class="what_is_chatgpt_section__bottom">
           ${whatIsGptBottomTemplate}
        </div>
    `;

  return resultTemplate;
};
