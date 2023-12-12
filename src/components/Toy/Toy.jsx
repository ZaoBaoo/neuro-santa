import './Toy.scss';

const Toy = ({ image, text }) => {
  return (
    <div className="toy">
      <div className="toy__wrapper">
        <img className="toy__image" src={image} alt="" />
        <div className="toy__decor-active" />
      </div>
      <p className="toy__text">{text}</p>
    </div>
  );
};

export { Toy };
