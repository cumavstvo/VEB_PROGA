export const createBrandsImageTemplate = ({ src, alt }) => `
    <img class="brands_section__img" src="${src}" alt="${alt}" />      
`;

export const brandsTemplate = (brandsData) => {
  const brandsImagesTemplate = brandsData
    .map((brandData) => createBrandsImageTemplate(brandData))
    .join("");

  return brandsImagesTemplate;
};
