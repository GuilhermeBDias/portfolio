import { GridBackgroundDemo } from "../../components/GridBackGround";
import LigthBackGround from "../../components/LigthBackGround";
import NavBar from "../../components/NavBar";
import { Animated } from "../../components/AnimatedText";

function Hero() {

  return (
    <>
      <section className="section-class font-inter overflow-hidden">
        <GridBackgroundDemo />
        <LigthBackGround />

        <NavBar />
        <div
          className="flex flex-col text-center w-full h-full justify-center items-center gap-2"
        >
          <Animated as="h1" delay={0.3}  className="text-lg text-[#E4ECFF] font-medium tracking-wider">
            Turning Ideas into Interactive Realities
          </Animated>
          <div className="w-[60%] font-inter ">
            <Animated as="p" delay={0.5} className="text-[72px]/20 font-bold">
              Bridging the gap between design and
              <Animated as="span" delay={0.7} className="bg-gradient-to-l  from-fuchsia-400 to-purple-700 bg-clip-text text-transparent ">
                {" "}
                functionality.
              </Animated>
            </Animated>
          </div>
          <Animated as="p" delay={0.9} className="pt-4 text-[#E4ECFF] text-xl">
            I'm Guilherme Dias — crafting modern web apps from Brazil.
          </Animated>
        </div>
      </section>
    </>
  );
}

export default Hero;
