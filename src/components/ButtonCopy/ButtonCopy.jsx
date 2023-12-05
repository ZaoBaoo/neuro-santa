import './ButtonCopy.scss';
import { useState } from 'react';

const ButtonCopy = () => {
  const [isCopy, setIsCopy] = useState(false);

  const handlerCopy = () => {
    setIsCopy(true);

    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  };

  return (
    <button className={`buttonCopy ${isCopy && 'buttonCopy_active'}`} onClick={handlerCopy}>
      Скопировать
    </button>
  );
};

export { ButtonCopy };
