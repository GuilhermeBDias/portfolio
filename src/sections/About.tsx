import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import { GridBackground } from "../components/GridBackGround";
import { InfiniteMovingCards } from "../components/InfinityCards";
import { MiniCard } from "../components/MiniCard";
import { testimonials } from "../constants";

function About() {
  return (
    <section
      id="about"
      className="section-class flex-col lg:px-20 mb-10 relative"
    >
      <BentoGrid>
        {/* Grid 1 */}

        <BentoGridItem
          title="I prioritize service quality and long-term collaboration with clients."
          titleClass="flex relative w-[70%] md:w-[60%] justify-end text-2xl md:text-4xl md:p-2"
          background="../../Grid_01.jpg"
          className="lg:col-span-11 row-span-7 lg:row-span-14 p-4"
        ></BentoGridItem>

        {/* Grid 2 */}

        <BentoGridItem
          title="Brazil is home, but my workspace is wherever the internet reaches."
          className="lg:col-span-9 row-span-5 lg:row-span-7 "
          titleClass="text-xl md:text-3xl p-4"
        >
          <div className="absolute top-[30%] md:top-[30%] left-1/2 -translate-x-1/2 -z-10 w-[600px] md:w-[900px] h-[800px]  invert rounded-full overflow-hidden ">
            <img
              src="../../map.svg"
              alt="World Map"
              className="w-[90%] h-[90%] object-cover object-top "
            />
          </div>
          <div className="absolute w-full h-[70%] bottom-0 left-0 -z-10 bg-gradient-to-br from-[#000319] via-[#000319]/95 to-[#363749]/80" />
        </BentoGridItem>

        {/* Grid 3 */}

        <BentoGridItem
          title="My Tech Stack"
          subTitle="I constantly try to improve"
          titleClass="flex relative justify-center w-[60%] text-xl md:text-4xl pl-4"
          className="lg:col-span-9 row-span-5 lg:row-span-7"
        >
          <div className="flex w-full justify-end gap-1">
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
          titleClass="text-xl md:text-3xl p-2 md:p-4 w-[90%] md:w-full "
          className="lg:col-span-6 row-span-4 lg:row-span-6 bg-[#04071D] flex flex-col"
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

        {/* Grid 5 */}

        <BentoGridItem
          title="Grid 5"
          subTitle="The inside scoop"
          className="lg:col-span-14 row-span-4 lg:row-span-12"
        >
          <GridBackground GradientClassName="bg-radial from-transparent to-[#000319]" SquareClassName="[background-size:50px_50px]">


          </GridBackground>
        </BentoGridItem>

        {/* Grid 6 */}

        <BentoGridItem
          title="Grid 6"
          className="lg:col-span-6 row-span-6 lg:row-span-6"
        ></BentoGridItem>
      </BentoGrid>
    </section>
  );
}

export default About;
