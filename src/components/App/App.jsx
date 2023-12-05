import './App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { ParticleFrame } from '../ParticleFrame/ParticleFrame.jsx';
import { Hero } from '../Hero/Hero.jsx';
import Card from '../Card/Card.jsx';
import { Container } from '../Container/Container.jsx';

// Store
import { getProducts } from '../../store/actions/promocodes.js';
import { slicingProducts } from '../../utils/slicingProducts.js';
import { getProductsAction, setCurrentProductAction } from '../../store/reducers/promocodes.js';
import { scrollToBlock } from '../../utils/scrollToBlock.js';

function App() {
  const { currentProduct, products, cityId } = useSelector((state) => state.promocodesData);

  const dispatch = useDispatch();

  const handlerNextProduct = () => {
    if (products?.length === 0) {
      dispatch(getProducts(cityId));
      return;
    }

    const { item, newProducts } = slicingProducts(products);

    dispatch(setCurrentProductAction(item));
    dispatch(getProductsAction(newProducts));
  };

  useEffect(() => {
    if (currentProduct) {
      scrollToBlock('.buttonRipple');
    }
  }, [currentProduct]);

  return (
    <div className="app">
      <Hero />
      <ParticleFrame handlerNextProduct={handlerNextProduct} />
      <Container>
        {currentProduct && <Card data={currentProduct} handlerNextProduct={handlerNextProduct} />}
      </Container>
      <div className="app__orbit-decor" />
    </div>
  );
}

export { App };
