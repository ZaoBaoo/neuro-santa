import './Hero.scss';

// Components
import { ParticleFrame } from '../ParticleFrame/ParticleFrame.jsx';
import { ButtonRipple } from '../ButtonRipple/ButtonRipple.jsx';
import Card from '../Card/Card.jsx';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const isMobile = window.innerWidth < 700;

const Hero = ({ handlerNextProduct }) => {
  const [isDed, setIsDed] = useState(true);
  const [product, setProduct] = useState(null);
  const { currentProduct, products, cityId } = useSelector((state) => state.promocodesData);

  useEffect(() => {
    if (currentProduct) {
      setIsDed(false);
    }
  }, [currentProduct]);

  useEffect(() => {
    setProduct(null);

    if (currentProduct) {
      setTimeout(() => {
        setProduct(currentProduct);
      }, 2000);
    }
  }, [currentProduct]);

  return (
    <div className={`hero ${isDed ? 'hero_ded' : ''}`}>
      <div className="container-custom">
        <div className="hero__content">
          <img
            className="hero__title-image-mobile"
            src="https://www.technodom.kz/under/neuro-santa/mobile-title.png"
            alt=""
          />
          <div className="hero__sphere">
            <div className="hero__sphere-header">
              <picture>
                <source
                  srcSet="https://www.technodom.kz/under/neuro-santa/sphere-decor.png"
                  media="(max-width: 700px)"
                />
                <img className="hero__sphere-decor" src="" alt="" width="" height="" />
              </picture>

              <ParticleFrame handlerNextProduct={handlerNextProduct} />
            </div>
            <img
              className="hero__sphere-footer"
              src="https://www.technodom.kz/under/neuro-santa/sphere-footer.png"
              alt=""
            />
            <div className="hero__wrapper-btn">
              <ButtonRipple handlerNextProduct={handlerNextProduct} flash />
            </div>
          </div>

          {product && !isMobile && <Card data={product} handlerNextProduct={handlerNextProduct} />}
        </div>
      </div>
    </div>
  );
};

export { Hero };
