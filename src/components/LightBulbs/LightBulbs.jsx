import './LightBulbs.scss';
import { useInView } from 'react-intersection-observer';

const LightBulbs = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <div ref={ref} className={`lightBulbs ${inView ? 'lightBulbs_action' : ''}`}>
      <div className="lightBulbs__light-active" />
      <div className="lightBulbs__light-disabled" />
    </div>
  );
};

export { LightBulbs };
