import './CardMobile.scss';
import React, { useState } from 'react';
import { ButtonCopy } from '../ButtonCopy/ButtonCopy.jsx';
import { formatNumber } from '../../utils/formatNumber.js';

const CardMobile = ({ data }) => {
  const [isLoadedImage, setIsLoadedImage] = useState(false);
  const { sku, title, promocode, newPrice, oldPrice, image, discountPercentage, uri } = data;

  const handleLoad = () => {
    setTimeout(() => {
      setIsLoadedImage(true);
    }, 0);
  };

  return (
    <div className={`cardMobile ${isLoadedImage && 'cardMobile_show'}`}>
      <div className="cardMobile__left">
        <h2 className="cardMobile__title">Ву-а-ля, магия! Твой промокод:</h2>

        <div className="cardMobile__promocode-wrapper">
          <span className="cardMobile__promocode">{promocode}</span>
          <ButtonCopy promocode={promocode} />
        </div>

        <div className="cardMobile__wrapper-price">
          <div className="cardMobile__description-price">
            <span className="cardMobile__text-price">Цена по промокоду:</span>
            <div className="cardMobile__footer-price">
              <span className="cardMobile__current-price">{formatNumber(newPrice)}</span>
              <span className="cardMobile__old-price">{formatNumber(oldPrice)}</span>
            </div>
          </div>

          <div className="cardMobile__wrapper-discount">
            <span className="cardMobile__text-discount">скидка:</span>
            <span className="cardMobile__discount">-{discountPercentage}%</span>
          </div>
        </div>
      </div>

      <div className="cardMobile__right">
        <img className="cardMobile__image" src={image} onLoad={handleLoad} alt="" />
        <p className="cardMobile__title-card">{title}</p>
        <a className="cardMobile__link" href={`https://www.technodom.kz/p/${uri}`}>
          К товару
        </a>
      </div>
    </div>
  );
};

export { CardMobile };
