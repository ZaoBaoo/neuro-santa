import './App.scss';

// Components
import { ParticleFrame } from '../ParticleFrame/ParticleFrame.jsx';
import { Hero } from '../Hero/Hero.jsx';

function App() {
  return (
    <div className="app">
      <Hero />
      <ParticleFrame />
      <div className="app__orbit-decor" />
    </div>
  );
}

export { App };
