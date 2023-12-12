import './LightBulbs.scss';
import { useEffect, useState } from 'react';

const LightBulbs = () => {
  const [action, setAction] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setAction((state) => !state);
    }, 3000);
  }, []);

  return (
    <div className={`lightBulbs ${action ? 'lightBulbs_action' : ''}`}>
      <div className="lightBulbs__light-active" />
      <div className="lightBulbs__light-disabled" />
    </div>
  );
};

export { LightBulbs };
