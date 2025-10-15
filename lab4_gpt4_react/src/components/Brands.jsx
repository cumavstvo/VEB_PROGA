import brandsData from "../mockData/brandsData";

export const BrandsImage = ({ brand: { alt, src } }) => (
  <img className="brands_section__img" src={src} alt={alt} />
);

export const Brands = () => {
  return brandsData.map((brand, index) => (
    <BrandsImage key={index} brand={brand} />
  ));
};

export default Brands;
