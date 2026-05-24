import { useRef, useState } from "react";

import { motion } from 'framer-motion';

import backgroundImage from '../assets/background.png';
import characterImage from '../assets/character.png';
import characterWhiteImage from '../assets/character-white.png';
import Eye from './Eye';
import leftEyeImage from "../assets/left-eye.png";
import rightEyeImage from "../assets/right-eye.png";
import logoImage from '../assets/logo.png';

const MAX_MOVE_X = 5;
const MAX_MOVE_Y = 1;

function HeroIllustration() {
  // eyeball interaction
  const wrapperRef = useRef(null);

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();

    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    let normalizedX = (relativeX - centerX) / centerX;
    let normalizedY =(relativeY - centerY) / centerY;

    // circular clamp
    const length = Math.sqrt(
      normalizedX ** 2 + normalizedY ** 2
    );

    if (length > 1) {
      normalizedX /= length;
      normalizedY /= length;
    }

    setMousePos({
      x: normalizedX,
      y: normalizedY,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({
      x: 0,
      y: 0,
    });
  };

  const eyeX = mousePos.x * MAX_MOVE_X;
  const eyeY = mousePos.y * MAX_MOVE_Y;

  return (
    <section
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave} 
      className="w-full overflow-hidden"
    >
      <div className="relative w-full">
        <div
          className="
            relative
            aspect-[1440/823]
            w-full
            max-w-[1440px]
            origin-top-left
          "
        >
          {/* background */}
          <img
            src={backgroundImage}
            alt="background"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          {/* character-white */}
          <img
            src={characterWhiteImage}
            alt="character white"
            className="
              absolute
              left-0
              top-0
              h-full
              w-auto
              z-10
              object-contain
            "
          />

          {/* character */}
          <img
            src={characterImage}
            alt="character"
            className="
              absolute
              left-0
              top-0
              h-full
              w-auto
              z-20
              object-contain
              mix-blend-multiply
            "
          />

          {/* left eye */}
          <Eye
            eyeImage={leftEyeImage}
            x={eyeX}
            y={eyeY}
            className="
              left-[40.42%]
              top-[37.4%]
              w-[2.77%]
              rotate-[0.68deg]
            "
          />

          {/* right eye */}
          <Eye
            eyeImage={rightEyeImage}
            x={eyeX}
            y={eyeY}
            className="
              left-[50.63%]
              top-[36.7%]
              w-[2.29%]
              rotate-[11.93deg]
            "
          />

          {/* logo */}
          <motion.img
            src={logoImage}
            alt="logo"
            className="
              absolute
              left-[56.74%]
              top-[42.53%]
              w-[37.5%]
              h-auto
              z-30
            "
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroIllustration;