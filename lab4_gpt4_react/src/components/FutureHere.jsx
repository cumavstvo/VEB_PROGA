import futureHereData from "../mockData/futureHereData";

export const RightContainer = ({ item }) => {
  const { title, description } = item;

  return (
    <div className="right__container">
      <h3 className="container__header lined_header">{title}</h3>
      <p className="container__content">{description}</p>
    </div>
  );
};

const FutureHere = () => {
  return (
    <>
      <div className="future_here__left">
        <h2 className="left__header">
          Будущее Уже Наступило и Тебе Нужно Лишь Осознать. Шагни в Будущее и
          Воплоти Его.
        </h2>
        <a href="/future-here" className="left__cta">
          Запросить ранний доступ
        </a>
      </div>
      <div className="future_here__right">
        {futureHereData.map((item, index) => (
          <RightContainer key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default FutureHere;
