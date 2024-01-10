import './Tays.scss';
import { Toy } from '../Toy/Toy.jsx';
import { forwardRef } from 'react';

const Toys = forwardRef((props, ref) => {
  return (
    <div className="toys" ref={ref}>
      <Toy
        image="https://www.technodom.kz/under/neuro-santa/toy-1.png"
        text="Новогодняя рассрочка"
        selector=".kaspi"
      />

      <Toy
        image="https://www.technodom.kz/under/neuro-santa/toy-2.png"
        text="Фейерверк скидок"
        selector=".anchor-1"
      />

      <Toy
        image="https://www.technodom.kz/under/neuro-santa/toy-3.png"
        text="Techno Выгода"
        selector=".anchor-2"
      />
    </div>
  );
});

export { Toys };
