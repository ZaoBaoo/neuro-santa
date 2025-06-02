import './accordions.scss';
import { useEffect } from 'react';

const Accordions = () => {
  useEffect(() => {
    const accordionButtons = document.querySelectorAll('.accordion__btn');

    accordionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.toggle('accordion__btn_active');
        const container = button.nextElementSibling;
        container.style.maxHeight = container.style.maxHeight
          ? null
          : `${container.scrollHeight}px`;
      });
    });
  }, []);

  return (
    <div className="accordion">
      <div className="container-custom">
        <h2 className="accordion__title">Что ещё нужно знать?</h2>
        <div className="accordion__inner">
          <div className="accordion__item">
            <button className="accordion__btn" type="button">
              <span>Как долго действуют промокоды?</span>
              <img
                src="https://api.technodom.kz/f3/api/v1/images/chevron.svg_974325f9e89e528394199679ce8dc0b5"
                alt=""
              />
            </button>
            <div className="accordion__wrapper">
              <p>Промокоды будут действовать до 31 декабря.</p>
            </div>
          </div>

          <div className="accordion__item">
            <button className="accordion__btn" type="button">
              <span>Где их можно будет использовать?</span>
              <img
                src="https://api.technodom.kz/f3/api/v1/images/chevron.svg_974325f9e89e528394199679ce8dc0b5"
                alt=""
              />
            </button>
            <div className="accordion__wrapper">
              <p>Только в приложении Technodom</p>
            </div>
          </div>

          <div className="accordion__item">
            <button className="accordion__btn" type="button">
              <span>Можно ли воспользоваться промокодом вместе с рассрочкой?</span>
              <img
                src="https://api.technodom.kz/f3/api/v1/images/chevron.svg_974325f9e89e528394199679ce8dc0b5"
                alt=""
              />
            </button>
            <div className="accordion__wrapper">
              <p>
                Нет, промокод действует только с оплатой за наличный расчёт или через карту банка.
              </p>
            </div>
          </div>

          <div className="accordion__item">
            <button className="accordion__btn" type="button">
              <span>Сколько раз можно получить промокод?</span>
              <img
                src="https://api.technodom.kz/f3/api/v1/images/chevron.svg_974325f9e89e528394199679ce8dc0b5"
                alt=""
              />
            </button>
            <div className="accordion__wrapper">
              <p>Трясти волшебный шар и получить новый промокод можно сколько захочется.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Accordions };
