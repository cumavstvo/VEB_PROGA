import fotolupiData from "../mockData/fotolupiData";

function FotolupiImage({ src, alt }) {
  return <img className="persons" src={src} alt={alt} />;
}

function FotolupiKrug({ value }) {
  return (
    <div className="krugleshok">
      <div className="ellipse">
        <div className="text_ellipse">{value}</div>
      </div>
    </div>
  );
}

function FotolupiText({ children }) {
  return <div className="okolo_lits">{children}</div>;
}

export default function Fotolupi({ data = fotolupiData }) {
  const { fotolupiImage, fotolupiKrug, fotolupiDescription } = data;

  return (
    <div className="fotolupi_inside">
      <div className="kruglishki">
        {fotolupiImage.map((img, i) => (
          <FotolupiImage key={i} {...img} />
        ))}
        <FotolupiKrug value={fotolupiKrug} />
      </div>
      <FotolupiText>{fotolupiDescription}</FotolupiText>
    </div>
  );
}
