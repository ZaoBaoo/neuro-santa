import './ParticleFrame.scss';
import React, { useEffect, useState } from 'react';
import ParticleImage, { Vector, forces } from 'react-particle-image';
import { ButtonRipple } from '../ButtonRipple/ButtonRipple.jsx';
import { useSelector } from 'react-redux';
import { findImageByCategory } from '../../utils/findImageByCategory.js';
import { productMatches } from '../../data/productMatches.js';

const size = {
  height: window.innerWidth > 700 ? '500' : '500',
  width: window.innerWidth > 700 ? '500' : '500',
};

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => '#fff',
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 30,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 30);
};

const ParticleFrame = () => {
  const [entropy, setEntropy] = useState(600);
  const [scale, setScale] = useState(1.5);
  const [srcImage, setSrcImage] = useState(
    'https://new.technodom.kz/under/neuro-santa/particle-toy.png',
  );

  const { currentProduct } = useSelector((state) => state.promocodesData);

  useEffect(() => {
    if (currentProduct) {
      const category = currentProduct['categories'][0];

      const image = findImageByCategory(productMatches, category);

      setEntropy(600);
      setSrcImage(image);
    }

    setTimeout(() => {
      setEntropy(60);
      setScale(1.4);
    }, 1500);
  }, [currentProduct]);

  useEffect(() => {
    // setTimeout(() => {
    //   setEntropy(60);
    //   setScale(1.4);
    // }, 2000);
    //
    // setTimeout(() => {
    //   setSrcImage('https://new.technodom.kz/under/neuro-santa/particle-2.png');
    //   setEntropy(600);
    //   setScale(1.5);
    // }, 4000);
    //
    // setTimeout(() => {
    //   setEntropy(60);
    //   setScale(1.4);
    // }, 6000);
    //
    // setTimeout(() => {
    //   setSrcImage('https://new.technodom.kz/under/neuro-santa/particle-3.png');
    //   setEntropy(600);
    //   setScale(1.5);
    // }, 8000);
    //
    // setTimeout(() => {
    //   setEntropy(60);
    //   setScale(1.4);
    // }, 10000);
    //
    // setTimeout(() => {
    //   setSrcImage('https://new.technodom.kz/under/neuro-santa/particle-start.png');
    //   setEntropy(600);
    //   setScale(1.5);
    // }, 12000);
    //
    // setTimeout(() => {
    //   setEntropy(60);
    //   setScale(1.4);
    // }, 14000);
    //
    // setTimeout(() => {
    //   setSrcImage('https://new.technodom.kz/under/neuro-santa/particle-2.png');
    //   setEntropy(600);
    //   setScale(1.5);
    // }, 16000);
    //
    // setTimeout(() => {
    //   setEntropy(60);
    //   setScale(1.4);
    // }, 18000);
    //
    // setTimeout(() => {
    //   setSrcImage('https://new.technodom.kz/under/neuro-santa/particle-3.png');
    //   setEntropy(600);
    //   setScale(1.5);
    // }, 20000);
    //
    // setTimeout(() => {
    //   setEntropy(60);
    //   setScale(1.4);
    // }, 22000);
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
    </div>
  );
};

export { ParticleFrame };
