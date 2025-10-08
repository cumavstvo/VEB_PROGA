export const createImageWomen = ({src, alt}) => {
  return `
    <img src="${src}" alt="${alt}" />
  `;
};

export const createWhiteLink = ({path, text}) => {
  return `
    <a href="${path}" class="whitee">${text}</a>
  `;
};

export const createTitle = (title) => {
  return `
    <h2>${title}</h2>
  `;
};

export const createText = (description) => {
  return `
    <p class="container__content">${description}</p>
  `;
};

export const createOrangeLink = ({path, text}) => {
  return `
    <a href="${path}" class="orangee">${text}</a>
  `;
};

export const futureVrWomenTemplate = ({
  womenImage,
  title,
  description,
  link,
}) => {
  const imageWomenTemplate = createImageWomen(womenImage);
  const whiteLinkTemplate = createWhiteLink(link);
  const titleTemplate = createTitle(title);
  const textTemplate = createText(description);
  const orangeLinkTemplate = createOrangeLink(link);

  const resultTemplate = `
    <div class="future_vr_women">
        ${imageWomenTemplate}
        <div class="content">
            ${whiteLinkTemplate}
            ${titleTemplate}
            ${textTemplate}
            ${orangeLinkTemplate}
        </div>
    </div>
    `;

  return resultTemplate;
};
