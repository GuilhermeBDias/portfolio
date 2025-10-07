import { useState } from "react";
import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import { GridBackground } from "../components/GridBackGround";
import { InfiniteMovingCards } from "../components/InfinityCards";
import { MiniCard } from "../components/MiniCard";
import { testimonials } from "../constants";
import { TbCopy, TbCopyCheck } from "react-icons/tb";
import { BorderAnimation } from "../components/BorderAnimation";

function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("guilhermebdias55@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <section
      id="about"
      className="section-class flex-col lg:px-10 mb-10 pt-10 relative"
    >
      <BentoGrid>
        {/* Grid 1 */}

        <BentoGridItem
          title="I prioritize service quality and long-term collaboration with clients."
          titleClass="flex relative w-[70%] justify-end text-2xl md:p-2"
          background="../../Grid_01.jpg"
          className="lg:col-span-11 row-span-7 lg:row-span-12 p-4"
          viewport={{ once: true, amount: 0.2 }}
        />

        {/* Grid 2 */}

        <BentoGridItem
          title="Brazil is home, but my workspace is wherever the internet reaches."
          className="lg:col-span-9 row-span-5 lg:row-span-6 overflow-hidden "
          titleClass="text-xl md:text-2xl p-4"
          viewport={{ once: true, amount: 0.7 }}
        >
          <div className="absolute top-[30%] md:top-[20%] left-1/2 -translate-x-1/2 -z-10 w-[600px] md:w-[900px] h-[800px]  invert rounded-full overflow-hidden ">
            <img
              src="../../map.svg"
              alt="World Map"
              className="w-[90%] h-[90%] object-cover object-top "
            />
          </div>
          <div className="absolute w-full h-[80%] bottom-0 left-0 -z-10 bg-gradient-to-br from-[#000319] via-[#000319]/95 to-[#363749]/80" />
        </BentoGridItem>

        {/* Grid 3 */}

        <BentoGridItem
          title="My Tech Stack"
          subTitle="Always improving"
          
          titleClass="flex relative justify-center w-[80%] text-xl md:text-xl pl-4"
          className="lg:col-span-9 row-span-5 lg:row-span-6"
        >
          <div className="absolute inset-0 backGround-gradient-1" />
          <div className="flex w-full justify-end gap-2 pr-2 md:pr-4">
            <InfiniteMovingCards items={testimonials} />
            <InfiniteMovingCards items={testimonials} direction="bottom" />
          </div>
          <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-transparent to-[#0C0E23]" />
        </BentoGridItem>
      </BentoGrid>

      <BentoGrid className="mt-6 md:auto-rows-[18px]">
        {/* Grid 4 */}

        <BentoGridItem
          title="Building the future, one project at a time."
          titleClass="text-xl md:text-2xl p-4 md:p-4 w-[90%] md:w-full "
          className="lg:col-span-6 row-span-4 lg:row-span-5 bg-[#04071D] flex flex-col"
          divClass="flex flex-col "
        >
          <GridBackground
            GradientClassName="bg-radial-[at_40%_55%] from-transparent to-[#000319]"
            SquareClassName="[background-size:40px_40px] md:[background-size:60px_60px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent  to-[#0C0E23]" />
          </GridBackground>
          <MiniCard />
        </BentoGridItem>

        {/* Grid 5 - Desktop */}

        <BentoGridItem
          title="Building a modern car enthusiasts hub"
          subTitle="Behind the scenes of my work"
          titleClass="justify-center p-4 w-[65%] md:w-[50%] text-xl md:text-3xl "
          className="hidden md:flex col-span-14 row-span-10"
          viewport={{ once: true, amount: 0.3 }}
        >
          <GridBackground
            GradientClassName="bg-radial from-transparent to-[#000319]"
            SquareClassName="[background-size:50px_50px]"
          >
            <div className="w-full h-full flex justify-end items-end ">
              <div className="relative w-full h-full flex justify-end items-end md:pb-4">
                <img
                  src="../../codeBackGround.png"
                  alt=""
                  className="absolute left-[50%] w-full h-[80%] rounded-l-2xl opacity-40"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent -z-10 to-[#363749]/70" />
          </GridBackground>
        </BentoGridItem>

        {/* Grid 5 - Mobile */}

        <BentoGridItem
          title="Have an idea? Let's make it real."
          titleClass="justify-center items-center pb-2 w-[60%] h-auto text-center text-xl "
          divClass="justify-center flex-col items-center"
          className="md:hidden  row-span-4 "
        >
          <button
            className="flex justify-center w-[60%] gap-2 items-center py-2 px-3 border-1 border-[#313447] color-gradient rounded-xl"
            onClick={handleCopyEmail}
          >
            {copied ? (
              <span className="flex w-full justify-center items-center gap-2">
                <TbCopyCheck size={18} />
                Email copied!
              </span>
            ) : (
              <>
                <TbCopy size={18} />
                Copy my e-mail
              </>
            )}
          </button>
          <div className="absolute left-[-20%] bottom-[-10%] w-[70%] h-[60%] backGround-gradient-1" />
          <div className="absolute rotate-45 left-[0%] bottom-[10%] w-[40%] h-[40%] backGround-gradient-2" />
        </BentoGridItem>

        {/* Grid 6 - Desktop */}

        <BentoGridItem
          title="Have an idea? Let's make it real."
          titleClass="justify-center items-center pb-4 w-[80%] text-center text-2xl h-auto "
          divClass="justify-center flex-col items-center"
          className="hidden md:flex col-span-6 row-span-5"
          viewport={{ once: true, amount: 0.05 }}
        >
          <button
            className="flex min-w-50 relative justify-center items-center p-2 gap-2 color-gradient rounded-xl border-1 border-[#313447] hover:scale-105 transition-[scale] cursor-pointer"
            onClick={handleCopyEmail}
          >
            <BorderAnimation size={30} duration={6} />
            <BorderAnimation size={30} duration={6} delay={3} />
            {copied ? (
              <span className="flex justify-center items-center gap-2 w-full">
                <TbCopyCheck size={18} />
                Email copied!
              </span>
            ) : (
              <span className="flex justify-center items-center gap-2 w-full">
                <TbCopy size={18} />
                Copy my e-mail
              </span>
            )}
          </button>
          <div className="absolute left-[-10%] bottom-[-10%] w-[60%] h-[70%] backGround-gradient-1" />
          <div className="absolute rotate-45 left-[10%] bottom-[20%] w-[40%] h-[50%] backGround-gradient-2" />
        </BentoGridItem>

        {/* Grid 6 - Mobile */}

        <BentoGridItem
          title="Building a modern car enthusiasts hub"
          subTitle="Behind the scenes of my work"
          titleClass="justify-center p-4 w-[65%] md:w-[50%] text-xl md:text-4xl "
          className="md:hidden row-span-5"
        >
          <GridBackground
            GradientClassName="bg-radial from-transparent to-[#000319]"
            SquareClassName="[background-size:50px_50px]"
          >
            <div className="w-full h-full flex justify-end items-end ">
              <div className="relative w-full h-full flex justify-end items-end md:pb-4">
                <img
                  src="../../codeBackGround.png"
                  alt=""
                  className="absolute left-[50%] w-full h-[80%] rounded-l-2xl opacity-40"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent -z-10 to-[#0C0E23]" />
          </GridBackground>
        </BentoGridItem>
      </BentoGrid>
    </section>
  );
}

export default About;
