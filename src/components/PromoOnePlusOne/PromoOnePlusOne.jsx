import './PromoOnePlusOne.scss';

const PromoOnePlusOne = () => {
  return (
    <div className="promoOnePlusOne">
      <div className="promoOnePlusOne__container">
        <div className="promoOnePlusOne__content">
          <div className="promoOnePlusOne__right">
            <img
              className="promoOnePlusOne__image"
              src="https://www.technodom.kz/under/neuro-santa/promo-2.png"
              alt=""
            />
          </div>
          <div className="promoOnePlusOne__left">
            <div className="promoOnePlusOne__wrapper-text">
              <h2 className="promoOnePlusOne__title">TECHNO ВЫГОДА</h2>
              <p className="promoOnePlusOne__text">
                Техника со скидками до 70%, с подарками за покупки и в рассрочку 0-0-24!
              </p>
              <a
                className="promoOnePlusOne__link"
                href="https://www.technodom.kz/cms/promo/trojnaja-vygoda"
              >
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PromoOnePlusOne };
