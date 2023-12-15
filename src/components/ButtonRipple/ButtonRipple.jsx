import './ButtonRipple.scss';
import { useState } from 'react';

const ButtonRipple = ({ flash, handlerNextProduct }) => {
  const [isAnimated, setAnimated] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isButtonPress, setIsButtonPress] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handlerClick = () => {
    setIsButtonPress(true);
    handlerNextProduct();

    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 3000);
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
      className={`buttonRipple ${flash ? 'FLASH' : ''} ${isAnimated ? 'animated' : ''}`}
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      onClick={handlerClick}
      disabled={isButtonDisabled}
    >
      <span></span>
      <div className={`buttonRipple__text ${isButtonPress ? 'buttonRipple__text_magic' : ''}`}>
        {isButtonPress ? 'Повторить ' : 'Хочу волшебство! '}
      </div>
    </button>
  );
};

export { ButtonRipple };
