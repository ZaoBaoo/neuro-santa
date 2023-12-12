import './Tays.scss';
import { Toy } from '../Toy/Toy.jsx';

const Toys = () => {
  return (
    <div className="toys">
      <Toy
        image="https://www.technodom.kz/under/neuro-santa/toy-1.png"
        text="Новогодняя распродажа"
      />

      <Toy
        image="https://www.technodom.kz/under/neuro-santa/toy-2.png"
        text="Новогодняя Kaspi рассрочка"
      />

      <Toy image="https://www.technodom.kz/under/neuro-santa/toy-3.png" text="Techno Выгода" />
    </div>
  );
};

export { Toys };
