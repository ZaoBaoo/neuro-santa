import './PromoSale.scss';

const PromoSale = () => {
  return (
    <div className="promoSale">
      <div className="promoSale__container">
        <div className="promoSale__content">
          <div className="promoSale__left">
            <div className="promoSale__wrapper-text">
              <h2 className="promoSale__title">Новогодняя распродажа</h2>
              <p className="promoSale__text">
                Скидки до 70% и рассрочка до 0-0-24 на желанную технику
              </p>
              <a className="promoSale__link" href="#">
                Подробнее
              </a>
            </div>
          </div>
          <div className="promoSale__right">
            <img
              className="promoSale__image"
              src="https://www.technodom.kz/under/neuro-santa/promo-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PromoSale };
