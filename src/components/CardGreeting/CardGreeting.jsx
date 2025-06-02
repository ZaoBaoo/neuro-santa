import './CardGreeting.scss';
import { ButtonRipple } from '../ButtonRipple/ButtonRipple.jsx';

const CardGreeting = ({ handlerNextProduct }) => {
  return (
    <div className="cardGreeting">
      <h3 className="cardGreeting__title">Нажимай на кнопку и получай подарки!</h3>
      {/*<p className="cardGreeting__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
      <div className="cardGreeting__wrapper-btn">
        <ButtonRipple text="Хочу волшебство!" flash handlerNextProduct={handlerNextProduct} />
      </div>
      <img
        className="cardGreeting__image"
        src="https://www.technodom.kz/under/neuro-santa/greeting-image.png"
        alt=""
      />
    </div>
  );
};

export { CardGreeting };
