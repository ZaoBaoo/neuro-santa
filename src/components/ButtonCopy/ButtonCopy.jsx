import './ButtonCopy.scss';
import { useState } from 'react';

const ButtonCopy = ({ promocode = '1' }) => {
  const [isCopy, setIsCopy] = useState(false);

  const handlerCopy = () => {
    navigator.clipboard.writeText(promocode).then(() => {
      setIsCopy(true);
    });

    if (typeof TechnoAndroid !== 'undefined') {
      TechnoAndroid.copyToClipboard(promoCode);
      setIsCopy(true);
      return;
    }

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
