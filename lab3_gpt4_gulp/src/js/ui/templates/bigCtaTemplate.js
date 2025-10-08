export const createBlackLink = ({path, text}) => {
  return `
    <a href="${path}" class="blackk">${text}</a>
  `;
};

export const createTitle = (title) => {
  return `
    <h3 class="content_text">${title}</h3>
  `;
};

export const createButton = (button) => {
  return `
    <button class="big_cta_btn">${button}</button>
  `;
};

export const bigCtaTemplate = ({
  link,
  title,
  button,
}) => {
  const blackLinkTemplate = createBlackLink(link);
  const titleTemplate = createTitle(title);
  const buttonTemplate = createButton(button);

  const resultTemplate = `
    <div class="big_cta">
        <div class="rectangle_backg">
            ${blackLinkTemplate}
            <div class="under_a">
                ${titleTemplate}
                ${buttonTemplate}
            </div>
        </div>
    </div>
    `;

  return resultTemplate;
};
