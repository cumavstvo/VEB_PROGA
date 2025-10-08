export const rightContainerTemplate = ({ title, description }) => {
  const template = `
    <div class="right__container">
      <h3 class="container__header lined_header">
          ${title}
      </h3>
      <p class="container__content">
          ${description}
      </p>
    </div>
`;

  return template;
};

export const futureHereTemplate = (data) => {
  const rightContainerTpl = data.map((item) => rightContainerTemplate(item));

  const parentTemplate = `
    <div class="future_here__left">
        <h2 class="left__header">
            Будущее Уже Наступило и Тебе Нужно Лишь Осознать. Шагни в Будущее и
            Воплоти Его.
        </h2>
        <a href="#" class="left__cta">Запросить ранний доступ</a>
    </div>
    <div class="future_here__right">
`;

  const resultTemplate = parentTemplate + rightContainerTpl + `</div>`;

  return resultTemplate;
};
