import { GridBackgroundDemo } from "../components/GridBackGround";
import LigthBackGround from "../components/LigthBackGround";
import { NavBar } from "../components/NavBar";
import { Animated } from "../utils/AnimatedText";


function Hero() {
  return (
    <>
      <section className="hero-class overflow-hidden mb-6 md:mb-0">
        <GridBackgroundDemo />
        <LigthBackGround />

        <NavBar />
        <div className="flex flex-col text-center w-full h-full justify-center items-center pt-16 md:pt-0 gap-4">
          <Animated
            as="h1"
            delay={0.3}
            className="text-lg md:text-xl text-secondary font-medium tracking-wider pb-4"
          >
            Turning Ideas into Interactive Realities
          </Animated>
          <div className="w-[80%] sm:w-[70%] ">
            <Animated
              as="p"
              delay={0.5}
              className="text-5xl md:text-[92px]/20 font-bold"
            >
              Bridging the gap between design and
              <Animated
                as="span"
                delay={0.7}
                className="bg-gradient-to-l  from-fuchsia-400 to-purple-700 bg-clip-text text-transparent "
              >
                {" "}
                functionality.
              </Animated>
            </Animated>
          </div>
          <div className="w-full">
            <Animated
              as="p"
              delay={0.9}
              className="pt-4 text-secondary text-lg md:text-xl"
            >
              I'm Guilherme Dias — crafting modern web apps from Brazil.
            </Animated>

            <Animated
              as="a"
              delay={1.1}
              href="https://fonts.google.com/"
              className="mt-4 inline-block w-full sm:w-auto color-gradient border-2 border-[#272A3C] text-white py-4 px-8 rounded-lg text-sm font-medium"
            >
              View My Work
            </Animated>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
