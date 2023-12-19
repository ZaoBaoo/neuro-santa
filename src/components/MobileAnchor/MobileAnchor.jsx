import './MobileAnchor.scss';
import { scrollToBlock } from '../../utils/scrollToBlock.js';

const MobileAnchor = ({ inView }) => {
  const handleScrollTop = () => {
    scrollToBlock('.app');
  };
  return (
    <div className={`mobileAnchor ${inView ? '' : 'mobileAnchor_show'}`} onClick={handleScrollTop}>
      Вернуться к волшебству
    </div>
  );
};

export { MobileAnchor };
