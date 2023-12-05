import './Card.scss';
import { formatNumber } from '../../utils/formatNumber.js';
import { ButtonCopy } from '../ButtonCopy/ButtonCopy.jsx';
import { withFade } from '../../hocs/withFade.jsx';
import { useEffect, useLayoutEffect, useState } from 'react';

const CardBase = ({ data, handlerNextProduct }) => {
  const [isLoadedImage, setIsLoadedImage] = useState(false);
  const { sku, title, promocode, newPrice, oldPrice, image, discountPercentage, uri } = data;

  const handleLoad = () => {
    setIsLoadedImage(true);
  };

  useEffect(() => {
    setIsLoadedImage(false);
  }, [image]);

  return (
    <div className={`card ${isLoadedImage && 'card_show'}`}>
      <div className="card__wrapper-content">
        <h2 className="card__title">Ву-а-ля, магия! Твой промокод:</h2>
        <div className="card__promocode-control">
          <span className="card__promocode-inner">{promocode}</span>
          <ButtonCopy />
        </div>

        <p className="card__description">{title}</p>

        <div className="card__wrapper-price">
          <div className="card__description-price">
            <span className="card__text-price">Цена по промокоду:</span>
            <span className="card__current-price">{formatNumber(newPrice)} ₸</span>
            <span className="card__old-price">{formatNumber(oldPrice)} ₸</span>
          </div>

          <div className="card__wrapper-discount">
            <span className="card__text-discount">скидка:</span>
            <span className="card__discount">-{discountPercentage}%</span>
          </div>
        </div>

        <div className="card__wrapper-buttons">
          <a className="card__link" href={`https://www.technodom.kz/p/${uri}`} target="_blank">
            К товару
          </a>
          <button className="card__button-action" onClick={handlerNextProduct}>
            Испытать волшебство ещё раз
          </button>
        </div>
      </div>
      <div className="card__wrapper-image">
        <img className="card__image" src={image} onLoad={handleLoad} alt="" />
      </div>
    </div>
  );
};

const Card = withFade(CardBase);

export default Card;
