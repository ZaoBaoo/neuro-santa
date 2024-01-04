import './Kaspi.scss';
import { useInView } from 'react-intersection-observer';
import { LinkRipple } from '../LinkRipple/LinkRipple.jsx';

const Kaspi = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="kaspi" ref={ref}>
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
          className={`kaspi__image-text ${inView ? 'kaspi__image-text_animation' : ''}`}
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
          className={`kaspi__image-sany ${inView ? 'kaspi__image-sany_animation' : ''}`}
          src="https://www.technodom.kz/under/neuro-santa/kaspi-sany.png"
          alt=""
        />
      </picture>

      <div className="kaspi__description">
        <p className="kaspi__text">
          Дни выгодного шопинга начинаются! Выбирай сертифицированную технику, покупай в рассрочку
          до 24 месяцев и наслаждайся покупкой без переплат.
        </p>
        <LinkRipple text="Подробнее" to="/credit" className={`kaspi__link`} />
      </div>
    </div>
  );
};

export { Kaspi };
