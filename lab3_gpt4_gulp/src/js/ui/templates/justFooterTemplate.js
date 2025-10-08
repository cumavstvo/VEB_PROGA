export const createTitle = (title) => {
  return `
    <h1 class="footerok">${title}</h1>
  `;
};

export const createButton = (button) => {
  return `
    <button class="last_repeat">${button}</button>
  `;
};

export const createInfoGpt = ({src, alt, text, prava}) => {
  return `
    <div class="info_gpt">
        <img src="${src}" alt="${alt}" class="gpt3" />
        <p class="down_description">${text}</p>
        <p class="down_description">${prava}</p>
    </div>
  `;
};

export const createInfoTitle = (infoLinksTitle) => {
  return `
    <h4 class="h_down_d">${infoLinksTitle}</h4>
  `;
};

export const createLink = ({path, description}) => {
  return `
    <a href="${path}" class="grayy">${description}</a>
  `;
};

export const createInfoMestoAndPhoneNumber = ({text}) => {
  return `
    <p class="down_description">${text}</p>
  `;
};

export const createCopyright = (copyright) => {
  return `
    <div class="copyright">
        <p class="copyrights">${copyright}</p>
    </div>
  `;
};

export const justFooterTemplate = ({
  title,
  button,
  infoGpt,
  infoLinksTitle,
  infoLinks,
  infoCompanyTitle,
  infoCompany,
  infoContactsTitle,
  infoMestoAndPhoneNumber,
  infoMail,
  copyright,
}) => {
  const titleTemplate = createTitle(title);
  const buttonTemplate = createButton(button);

  const infoGptTemplate = createInfoGpt(infoGpt);

  const infoLinksTitleTemplate = createInfoTitle(infoLinksTitle);
  const infoLinksTemplate = infoLinks
    .map((item) => createLink(item))
    .join("");

  const infoCompanyTitleTemplate = createInfoTitle(infoCompanyTitle);
  const infoCompanyTemplate = infoCompany
    .map((item) => createLink(item))
    .join("");

  const infoContactsTitleTemplate = createInfoTitle(infoContactsTitle);
  const infoMestoAndPhoneNumberTemplate = infoMestoAndPhoneNumber
    .map((item) => createInfoMestoAndPhoneNumber(item))
    .join("");
  const infoMailTemplate = createLink(infoMail);

  const copyrightTemplate = createCopyright(copyright);

  const resultTemplate = `
    <div class="just_footer">
        <div class="on_big_back">
            <div class="inside_big_back">
                ${titleTemplate}
                ${buttonTemplate}
                <div class="info">
                    ${infoGptTemplate}
                    <div class="info_links">
                        ${infoLinksTitleTemplate}
                        ${infoLinksTemplate}
                    </div>
                    <div class="info_company">
                        ${infoCompanyTitleTemplate}
                        ${infoCompanyTemplate}
                    </div>
                    <div class="info_contacts">
                        ${infoContactsTitleTemplate}
                        ${infoMestoAndPhoneNumberTemplate}
                        ${infoMailTemplate}
                    </div>
                </div>
            </div>
        </div>
        ${copyrightTemplate}
    </div>
  `;
  return resultTemplate;

};