import { futureVrWomenData } from "../mockData/futureVrWomenData";

function ImageWomen({ src, alt }) {
  return <img src={src} alt={alt} />;
}

function WhiteLink({ path, text }) {
  return (
    <a href={path} className="whitee">
      {text}
    </a>
  );
}

function OrangeLink({ path, text }) {
  return (
    <a href={path} className="orangee">
      {text}
    </a>
  );
}

function Title({ children }) {
  return <h2>{children}</h2>;
}

function Text({ children }) {
  return <p className="container__content">{children}</p>;
}

export default function FutureVrWomen({ data = futureVrWomenData }) {
  const { womenImage, title, description, link } = data;

  return (
    <div className="future_vr_women">
      <ImageWomen {...womenImage} />
      <div className="content">
        <WhiteLink {...link} />
        <Title>{title}</Title>
        <Text>{description}</Text>
        <OrangeLink {...link} />
      </div>
    </div>
  );
}
