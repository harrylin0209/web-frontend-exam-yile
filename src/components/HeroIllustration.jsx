import backgroundImage from '../assets/background.png';
import characterImage from '../assets/character.png';
import characterWhiteImage from '../assets/character-white.png';
import logoImage from '../assets/logo.png';

function HeroIllustration() {
  return (
    <section className="w-full overflow-hidden">
      {/* responsive wrapper */}
      <div className="relative w-full">
        {/* Figma canvas */}
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
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* white base */}
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

          {/* logo */}
          <img
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
          />
        </div>
      </div>
    </section>
  );
}

export default HeroIllustration;