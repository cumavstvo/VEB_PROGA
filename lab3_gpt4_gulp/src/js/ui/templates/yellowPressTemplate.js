export const createTitle = (title) => {
  return `
    <h1 class="name">${title}</h3>
  `;
};

export const createBigStatya = ({src, alt, date, title, description, link}) => {
  return `
    <div class="big_statya">
        <img src="${src}" alt="${alt}" />
        <div class="box_under_img">
            <div class="box_inside_left">
                <p class="data">${date}</p>
                <h3 class="povtorenye_mat_uchenie">${title}</h3>
                <a href="${link}" class="grayy">${description}</a>
            </div>
        </div>
    </div>
  `;
}

export const createMalayaStatya = ({src, alt, date, title, description, link}) => {
  return `
    <div class="malaya_statya">
        <img src="${src}" alt="${alt}" />
        <div class="korobka_under_img">
            <div class="box_inside">
                <p class="data">${date}</p>
                <h3 class="povtorenye_mat_uchenie">${title}</h3>
                <a href="${link}" class="grayy">${description}</a>
            </div>
        </div>
    </div>
  `;
}

export const yellowPressTemplate = ({
  title,
  bigStatya,
  twoLeftMalayaStatya,
  twoRightMalayaStatya,
}) => {

  const titleTemplate = createTitle(title);
  const bigStatyaTemplate = createBigStatya(bigStatya);
  const twoLeftMalayaStatyiTemplate = twoLeftMalayaStatya
    .map((item) => createMalayaStatya(item))
    .join("");

  const twoRightMalayaStatyiTemplate = twoRightMalayaStatya
    .map((item) => createMalayaStatya(item))
    .join("");

  const resultTemplate = `
        <div class="yellow_press">
            ${titleTemplate}
            <div class="statyi">
                <div class="statya_left">
                    ${bigStatyaTemplate}
                </div>
                <div class="two_left">
                    ${twoLeftMalayaStatyiTemplate}
                </div>
                <div class="two_right">
                    ${twoRightMalayaStatyiTemplate}
                </div>
            </div>
        </div>
  `;
  return resultTemplate;
}