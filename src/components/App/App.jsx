import './App.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Hero } from '../Hero/Hero.jsx';
import Card from '../Card/Card.jsx';
import { Container } from '../Container/Container.jsx';

// Store
import { getProducts } from '../../store/actions/promocodes.js';
import { slicingProducts } from '../../utils/slicingProducts.js';
import { getProductsAction, setCurrentProductAction } from '../../store/reducers/promocodes.js';
import { scrollToBlock } from '../../utils/scrollToBlock.js';
import { CardMobile } from '../CardMobile/CardMobile.jsx';
import { CardGreeting } from '../CardGreeting/CardGreeting.jsx';
import { LightBulbs } from '../LightBulbs/LightBulbs.jsx';

const isMobile = window.innerWidth < 700;

function App() {
  const [product, setProduct] = useState(null);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { currentProduct, products, cityId } = useSelector((state) => state.promocodesData);

  const dispatch = useDispatch();

  const handlerNextProduct = () => {
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
      <Container>
        {product && isMobile && (
          <CardMobile data={product} handlerNextProduct={handlerNextProduct} />
        )}

        {isFirstRender && <CardGreeting />}
      </Container>

      <LightBulbs />
    </div>
  );
}

export { App };
