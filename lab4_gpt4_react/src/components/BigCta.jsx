import { bigCtaData } from "../mockData/bigCtaData";

function BlackLink({ path, text }) {
  return (
    <a href={path} className="blackk">
      {text}
    </a>
  );
}

function Title({ children }) {
  return <h3 className="content_text">{children}</h3>;
}

function CtaButton({ children }) {
  return (
    <button className="big_cta_btn">
      {children}
    </button>
  );
}

export default function BigCta({ data = bigCtaData }) {
  const { link, title, button } = data;

  return (
    <div className="big_cta">
      <div className="rectangle_backg">
        <BlackLink {...link} />
        <div className="under_a">
          <Title>{title}</Title>
          <CtaButton>{button}</CtaButton>
        </div>
      </div>
    </div>
  );
}
