import './ParticleFrame.scss';
import React, { useEffect, useState } from 'react';
import ParticleImage, { Vector, forces } from 'react-particle-image';
import { ButtonRipple } from '../ButtonRipple/ButtonRipple.jsx';

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => '#fff',
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 30);
};

const ParticleFrame = ({ handlerNextProduct }) => {
  const [entropy, setEntropy] = useState(800);
  const [scale, setScale] = useState(1.2);
  const [srcImage, setSrcImage] = useState(
    'https://new.technodom.kz/under/neuro-santa/particle-start.png',
  );

  useEffect(() => {
    setTimeout(() => {
      setEntropy(60);
      setScale(1.2);
    }, 2000);
    //
    // setTimeout(() => {
    //   setSrcImage('https://new.technodom.kz/under/neuro-santa/particle-2.png');
    //   setEntropy(800);
    //   setScale(1.5);
    // }, 6000);
    //
    // setTimeout(() => {
    //   setEntropy(60);
    //   setScale(1.2);
    // }, 8000);
    //
    // setTimeout(() => {
    //   setSrcImage('https://new.technodom.kz/under/neuro-santa/particle-3.png');
    //   setEntropy(800);
    //   setScale(1.5);
    // }, 12000);
    //
    // setTimeout(() => {
    //   setEntropy(60);
    //   setScale(1.2);
    // }, 14000);
    //
    // setTimeout(() => {
    //   setSrcImage('https://new.technodom.kz/under/neuro-santa/particle-start.png');
    //   setEntropy(800);
    //   setScale(1.5);
    // }, 18000);
    //
    // setTimeout(() => {
    //   setEntropy(60);
    //   setScale(1.2);
    // }, 20000);
    //
    // setTimeout(() => {
    //   setSrcImage('https://new.technodom.kz/under/neuro-santa/particle-2.png');
    //   setEntropy(800);
    //   setScale(1.5);
    // }, 24000);
    //
    // setTimeout(() => {
    //   setEntropy(60);
    //   setScale(1.2);
    // }, 26000);
    //
    // setTimeout(() => {
    //   setSrcImage('https://new.technodom.kz/under/neuro-santa/particle-3.png');
    //   setEntropy(800);
    //   setScale(1.5);
    // }, 30000);
    //
    // setTimeout(() => {
    //   setEntropy(60);
    //   setScale(1.2);
    // }, 32000);
  }, []);

  return (
    <div className="particleFrame">
      <ParticleImage
        className="particleFrame__particle"
        src={srcImage}
        scale={scale}
        entropy={entropy}
        maxParticles={8000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        backgroundColor="transparent"
        width="1000"
        height="1000"
      />
      <div className="particleFrame__wrapper-btn">
        <ButtonRipple text="Хочу волшебство!" handlerNextProduct={handlerNextProduct} />
      </div>
    </div>
  );
};

export { ParticleFrame };
