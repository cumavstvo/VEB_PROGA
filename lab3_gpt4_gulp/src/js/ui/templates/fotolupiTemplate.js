export const createFotolupiImageTemplate = ({ src, alt }) => `
    <img class="persons" src="${src}" alt="${alt}" />
`;

export const createFotolupiTextTemplate = (fotolupiDescription) => {
  return `
    <div class="okolo_lits">
        ${fotolupiDescription}
    </div>
  `;
};

export const createFotolupiKrugTemplate = (fotolupiKrug) => {
  return `
    <div class="text_ellipse">${fotolupiKrug}</div>
  `;
};

export const fotolupiTemplate = ({
    fotolupiImage,
    fotolupiKrug,
    fotolupiDescription
}) => {

  const fotolupiImageTemplate = fotolupiImage
    .map((fotolupiImage) => createFotolupiImageTemplate(fotolupiImage))
    .join("");

  const fotolupiKrugTemplate = createFotolupiKrugTemplate(fotolupiKrug);
  const fotolupiTextTemplate = createFotolupiTextTemplate(fotolupiDescription);

  const resultFotolupi = `
    <div class="fotolupi_inside">
    <div class="kruglishki">
        ${fotolupiImageTemplate}
        <div class="krugleshok">
            <div class="ellipse">
                ${fotolupiKrugTemplate}
            </div>
        </div>
    </div>
    ${fotolupiTextTemplate}
    </div>
    `;

  return resultFotolupi;
};
