import './Kaspi.scss';

const Kaspi = () => {
  return (
    <div className="kaspi">
      <picture>
        <source
          srcSet="https://www.technodom.kz/under/neuro-santa/kaspi-body-m.png"
          media="(max-width: 700px)"
        />
        <img
          className="kaspi__image-main"
          src="https://www.technodom.kz/under/neuro-santa/kaspi-body.png"
          alt=""
        />
      </picture>

      <picture>
        <source
          srcSet="https://www.technodom.kz/under/neuro-santa/kaspi-text-m.png"
          media="(max-width: 700px)"
        />
        <img
          className="kaspi__image-text"
          src="https://www.technodom.kz/under/neuro-santa/kaspi-text.png"
          alt=""
        />
      </picture>

      <picture>
        <source
          srcSet="https://www.technodom.kz/under/neuro-santa/kaspi-sany-m.png"
          media="(max-width: 700px)"
        />
        <img
          className="kaspi__image-sany"
          src="https://www.technodom.kz/under/neuro-santa/kaspi-sany.png"
          alt=""
        />
      </picture>

      <div className="kaspi__description">
        <p className="kaspi__text">
          Дни выгодного шопинга начинаются! Выбирай сертифицированную технику, покупай в рассрочку
          до 24 месяцев и наслаждайся покупкой без переплат.
        </p>
        <a className="kaspi__link" href="/credit">
          Подробнее
        </a>
      </div>
    </div>
  );
};

export { Kaspi };
