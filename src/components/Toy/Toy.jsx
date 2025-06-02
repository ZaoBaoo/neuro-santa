import './Toy.scss';
import { scrollToBlock } from '../../utils/scrollToBlock.js';

const Toy = ({ image, text, selector }) => {
  const handlerScroll = () => {
    scrollToBlock(selector);
  };

  return (
    <div className="toy" onClick={handlerScroll}>
      <div className="toy__wrapper">
        <img className="toy__image" src={image} alt="" />
        <div className="toy__decor-active" />
      </div>
      <p className="toy__text">{text}</p>
    </div>
  );
};

export { Toy };
