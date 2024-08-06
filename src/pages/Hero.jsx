import heroImage from "../assets/hero.jpg";
import bgImage from "../assets/bgImg.jpg";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <section 
      className="grid grid-cols-1 md:grid-cols-2 gap-8 py-24 mt-20 px-8 md:px-24 lg:px-48"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="grid grid-cols-1 gap-4 mt-12 md:mt-0 items-center">
        <p className="font-['Cambria'] text-3xl md:text-4xl lg:text-5xl text-orange-700">
          <TypeAnimation
            sequence={[
              'Embark On a Journey To Discover Your Next Literary Treasure.',
              5000,
              'Find Thousands Of Books On Single Click.',
              5000,
              'Explore Trending Litrature.',
              5000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </p>
      </div>
      <div className="flex flex-col mt-10 md:mt-0 items-center md:items-start">
        <img
          src={heroImage}
          className="w-full max-w-md rounded-lg shadow-2xl"
          alt="A Book Reader"
        />
      </div>
    </section>
  );
}

export default Hero;
