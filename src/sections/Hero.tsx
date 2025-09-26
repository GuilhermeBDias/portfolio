import { GridBackground } from "../components/GridBackGround";
import LigthBackGround from "../components/LigthBackGround";
import { NavBar } from "../components/NavBar";
import { Animated } from "../utils/AnimatedText";
import { GoArrowUpRight } from "react-icons/go";

function Hero() {
  return (
    <>
      <section id="home" className="hero-class overflow-hidden mb-6 pt-10  md:mb-0">
        <GridBackground />
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
              className="text-5xl/13 md:text-[92px]/25 font-bold"
            >
              Bridging the gap between design and
              <Animated
                as="span"
                delay={0.7}
                className="text-gradient"
              >
                {" "}
                functionality.
              </Animated>
            </Animated>
          </div>
          <div className="w-full flex flex-col items-center gap-2">
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
              href="https://github.com/GuilhermeBDias"
              className="mt-4 flex w-full md:w-[240px] items-center justify-center gap-2 color-gradient border-2 border-[#272A3C] text-white py-4 px-8 rounded-lg text-sm md:text-xl font-medium md:hover:scale-105 transition-[scale]"
            >
              <div className="flex w-full justify-center items-center gap-2 ">
                <p>View My Work</p>
                <GoArrowUpRight size={26} />
              </div>
            </Animated>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
