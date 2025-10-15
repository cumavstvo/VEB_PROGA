import yellowPressData from "../mockData/yellowPressData";

function Title({ html }) {
  return <h1 className="name" dangerouslySetInnerHTML={{ __html: html }} />;
}

function Article({ src, alt, date, title, description, link, variant = "small" }) {
  const isBig = variant === "big";
  return (
    <div className={isBig ? "big_statya" : "malaya_statya"}>
      <img src={src} alt={alt} />
      <div className={isBig ? "box_under_img" : "korobka_under_img"}>
        <div className={isBig ? "box_inside_left" : "box_inside"}>
          <p className="data">{date}</p>
          <h3 className="povtorenye_mat_uchenie">{title}</h3>
          <a href={link} className="grayy">{description}</a>
        </div>
      </div>
    </div>
  );
}

export default function YellowPress({ data = yellowPressData }) {
  const { title, bigStatya, twoLeftMalayaStatya, twoRightMalayaStatya } = data;

  return (
    <div className="yellow_press">
      <Title html={title} />
      <div className="statyi">
        <div className="statya_left">
          <Article {...bigStatya} variant="big" />
        </div>
        <div className="two_left">
          {twoLeftMalayaStatya.map((item, i) => (
            <Article key={`l-${i}`} {...item} />
          ))}
        </div>
        <div className="two_right">
          {twoRightMalayaStatya.map((item, i) => (
            <Article key={`r-${i}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
