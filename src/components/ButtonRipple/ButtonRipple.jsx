import { useState } from 'react';
import './ButtonRipple.scss';

const ButtonRipple = ({ text, flash, handlerNextProduct }) => {
  const [isAnimated, setAnimated] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const handlerClick = () => {
    // setIsClick(true);
    handlerNextProduct();
  };

  const handleHover = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const span = e.target.querySelector('span');

    if (span?.style && span?.style) {
      span.style.left = `${offsetX}px`;
      span.style.top = `${offsetY}px`;
    }

    if (flash) {
      setAnimated(true);
      e.target.addEventListener(
        'animationend',
        () => {
          setAnimated(false);
        },
        { once: true },
      );
    }
  };

  const handleMouseOut = (e) => {
    const span = e.target.querySelector('span');
    const { offsetX, offsetY } = e.nativeEvent;
    if (span?.style && span?.style) {
      span.style.left = `${offsetX}px`;
      span.style.top = `${offsetY}px`;
    }
  };

  return (
    <button
      className={`buttonRipple ${flash ? 'FLASH' : ''} ${isAnimated ? 'animated' : ''} ${
        isClick ? 'buttonRipple_disabled' : ''
      }`}
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      onClick={(() => {}) && handlerClick}
    >
      <span></span>
      <div className="buttonRipple__text">{text}</div>
    </button>
  );
};

export { ButtonRipple };
