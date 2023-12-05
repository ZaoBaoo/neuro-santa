import { BASE_URL } from './constants.js';

class Api {
  getPromocodes(cityId) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}technodom/product/new_year_2023?city_id=${cityId}`)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  getCityList() {
    return new Promise((resolve, reject) => {
      fetch('https://api.technodom.kz/config-discovery/api/v1/cities')
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  getProducts(cityId, arraySkus) {
    return new Promise((resolve, reject) => {
      fetch('https://api.technodom.kz/katalog/api/v1/products/landings', {
        method: 'POST',
        'Content-Type': 'application/json',
        body: JSON.stringify({
          skus: arraySkus,
          city_id: cityId,
          limit: 10,
          page: 1,
        }),
      })
        .then((data) => data.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}

export const api = new Api();
