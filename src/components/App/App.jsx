import './App.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Hero } from '../Hero/Hero.jsx';
import { InnerCards } from '../InnerCards/InnerCards.jsx';
import { CardMobile } from '../CardMobile/CardMobile.jsx';
import { CardGreeting } from '../CardGreeting/CardGreeting.jsx';
import { LightBulbs } from '../LightBulbs/LightBulbs.jsx';
import { Toys } from '../Toys/Toys.jsx';
import { PromoSale } from '../PromoSale/PromoSale.jsx';
import { PromoOnePlusOne } from '../PromoOnePlusOne/PromoOnePlusOne.jsx';

// Store
import { getProducts } from '../../store/actions/promocodes.js';
import { slicingProducts } from '../../utils/slicingProducts.js';
import { getProductsAction, setCurrentProductAction } from '../../store/reducers/promocodes.js';
import { Kaspi } from '../Kaspi/Kaspi.jsx';
import { getCookie } from '../../utils/getCookies.js';
import { MotionAnimate } from 'react-motion-animate';
import { Accordions } from '../accordions/Accordions.jsx';
import { MobileAnchor } from '../MobileAnchor/MobileAnchor.jsx';
import { useInView } from 'react-intersection-observer';

const isMobile = window.innerWidth < 700;

let segmentSend = true;

function App() {
  const [product, setProduct] = useState(null);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { currentProduct, products, cityId } = useSelector((state) => state.promocodesData);
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  const dispatch = useDispatch();

  const handlerNextProduct = () => {
    if (!getCookie('accessToken')) {
      window.signInHelper && window.signInHelper();
      return;
    }

    if (window.r46 && segmentSend) {
      segmentSend = false;

      r46('segment', 'add', {
        segment_id: '10873',
      });
    }

    setIsFirstRender(false);

    if (products?.length === 0) {
      dispatch(getProducts(cityId));
      return;
    }

    const { item, newProducts } = slicingProducts(products);

    dispatch(setCurrentProductAction(item));
    dispatch(getProductsAction(newProducts));
  };

  useEffect(() => {
    setProduct(null);

    if (currentProduct) {
      setTimeout(() => {
        setProduct(currentProduct);
      }, 2000);
    }
  }, [currentProduct]);

  return (
    <div className="app">
      <Hero handlerNextProduct={handlerNextProduct} />

      {isMobile && (
        <InnerCards>
          {product && <CardMobile data={product} handlerNextProduct={handlerNextProduct} />}

          {isFirstRender && <CardGreeting handlerNextProduct={handlerNextProduct} />}
        </InnerCards>
      )}

      <Toys ref={ref} />

      <LightBulbs />

      <div className="anchor-1" />

      <MotionAnimate animation="fadeInUp" reset={false} distance={200} delay={0.1} speed={1}>
        <PromoSale />
      </MotionAnimate>

      <div className="anchor-2" />

      <MotionAnimate animation="fadeInUp" reset={false} distance={200} delay={0.1} speed={1}>
        <PromoOnePlusOne />
      </MotionAnimate>

      <LightBulbs />

      <Kaspi />

      <Accordions />

      <MobileAnchor inView={inView} />
    </div>
  );
}

export { App };
