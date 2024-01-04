import './MobileAnchor.scss';
import { scrollToBlock } from '../../utils/scrollToBlock.js';
import { isApp } from '../../utils/isApp.js';

const MobileAnchor = ({ inView }) => {
  const handleScrollTop = () => {
    scrollToBlock('.app');
  };

  return (
    <div
      className={`mobileAnchor ${inView ? '' : 'mobileAnchor_show'}`}
      style={isApp() ? {} : { bottom: '70px' }}
      onClick={handleScrollTop}
    >
      Вернуться к волшебству
    </div>
  );
};

export { MobileAnchor };
