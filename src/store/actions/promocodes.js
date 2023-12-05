import {
  getProductsAction,
  setCityIdAction,
  setProductsRequestAction,
  setCurrentProductAction,
} from '../reducers/promocodes.js';
import { api } from '../../utils/Api.js';
import { slicingProducts } from '../../utils/slicingProducts.js';
import { transformNumberToString } from '../../utils/transformNumberToString.js';

export const getProducts = (cityId) => async (dispatch) => {
  try {
    if (!cityId) {
      const cityList = await api.getCityList();

      const magentoId = JSON.parse(localStorage.getItem('cityMagentoId'))?.data;

      cityId = cityList.cities.find((city) => city.city_magento_id === magentoId)?.city_id;

      dispatch(setCityIdAction(cityId));

      if (!cityId) {
        throw new Error('ID города не найден');
      }
    }

    // Получаем id города
    const promocodes = await api.getPromocodes(cityId);

    // Достаем только sku
    const productsSkus = promocodes.map((item) => item.sku);

    // Получаем данные о продуктах
    const productsRaw = await api.getProducts(cityId, productsSkus);

    // ДОстаем только нужные нам поля
    const productsModified = productsRaw.payload.map((product) => ({
      categories: product.categories || [],
      image: `https://api.technodom.kz/f3/api/v1/images/1080/1080/${product.images[0]}.jpg`,
      oldPrice: product.price,
      title: product.title,
      sku: product.sku,
      uri: product.uri,
    }));

    // Объединяем данные о продуктах и промокодах
    const mergeProducts = promocodes
      .map((promocode) => ({
        ...promocode,
        ...productsModified.find((item2) => item2.sku === promocode.sku),
      }))
      .filter((promocode) => Boolean(promocode.title));

    const mergeProductsModified = mergeProducts.map((product) => ({
      ...product,
      newPrice: Math.round(product.oldPrice - product.oldPrice * product.discount).toString(),
      discountPercentage: transformNumberToString(product.discount),
    }));

    const { item, newProducts } = slicingProducts(mergeProductsModified);

    dispatch(setCurrentProductAction(item));
    dispatch(getProductsAction(newProducts));
    dispatch(setProductsRequestAction(false));
  } catch (e) {
    console.log(e);
    // Вызвать попап с ошибкой
  }
};

export const setProductsRequest = (value) => (dispatch) =>
  dispatch(setProductsRequestAction(value));

export const setCurrentProduct = (value) => (dispatch) => dispatch(setCurrentProductAction(value));
