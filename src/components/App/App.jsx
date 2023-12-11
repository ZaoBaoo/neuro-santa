import './App.scss';
import { useEffect } from 'react';
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

const isMobile = window.innerWidth < 700;

function App() {
  const { currentProduct, products, cityId } = useSelector((state) => state.promocodesData);

  const dispatch = useDispatch();

  const handlerNextProduct = () => {
    if (products?.length === 0) {
      dispatch(getProducts(cityId));
      return;
    }

    const { item, newProducts } = slicingProducts(products);

    // console.log(item['categories']);

    dispatch(setCurrentProductAction(item));
    dispatch(getProductsAction(newProducts));
  };

  // useEffect(() => {
  //   if (currentProduct) {
  //     scrollToBlock('.app__scroll-point');
  //   }
  // }, [currentProduct]);

  return (
    <div className="app">
      <Hero handlerNextProduct={handlerNextProduct} />

      {/*<div className="app__scroll-point" />*/}

      <Container>
        {currentProduct && isMobile && (
          <CardMobile data={currentProduct} handlerNextProduct={handlerNextProduct} />
        )}

        <CardGreeting />
      </Container>
    </div>
  );
}

export { App };
