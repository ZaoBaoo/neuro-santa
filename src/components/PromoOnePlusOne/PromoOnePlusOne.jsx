import './PromoOnePlusOne.scss';
import { LinkRipple } from '../LinkRipple/LinkRipple.jsx';

const PromoOnePlusOne = () => {
  return (
    <div className="promoOnePlusOne">
      <div className="promoOnePlusOne__container">
        <div className="promoOnePlusOne__content">
          <div className="promoOnePlusOne__right">
            <img
              className="promoOnePlusOne__image-main"
              src="https://www.technodom.kz/under/neuro-santa/promo-2-part-1.png"
              alt=""
            />
            <img
              className="promoOnePlusOne__image-part"
              src="https://www.technodom.kz/under/neuro-santa/promo-2-part-2.png"
              alt=""
            />
          </div>
          <div className="promoOnePlusOne__left">
            <div className="promoOnePlusOne__wrapper-text">
              <h2 className="promoOnePlusOne__title">TECHNO ВЫГОДА</h2>
              <p className="promoOnePlusOne__text">
                Техника со скидками до 50%, с подарками за покупки и в рассрочку 0-0-15!
              </p>
              <LinkRipple text="Подробнее" to="/promo/trojnaja-vygoda" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PromoOnePlusOne };
