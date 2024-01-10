import './PromoSale.scss';
import { LinkRipple } from '../LinkRipple/LinkRipple.jsx';

const PromoSale = () => {
  return (
    <div className="promoSale">
      <div className="promoSale__container">
        <div className="promoSale__content">
          <div className="promoSale__left">
            <div className="promoSale__wrapper-text">
              <h2 className="promoSale__title">фейерверк скидок</h2>
              <p className="promoSale__text">
                Скидки до 50% и рассрочка до 0-0-15 на желанную технику
              </p>
              <LinkRipple text="Подробнее" to="/sale" />
            </div>
          </div>
          <div className="promoSale__right">
            <img
              className="promoSale__image-body"
              src="https://www.technodom.kz/under/neuro-santa/promo-1-body.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PromoSale };
