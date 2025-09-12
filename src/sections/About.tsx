import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import { GridBackgroundDemo } from "../components/GridBackGround";
import { InfiniteMovingCards } from "../components/InfinityCards";
import { Skeleton } from "../components/Skeleton";
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
          titleClass="flex w-[70%] md:w-[60%] justify-end text-2xl md:text-4xl md:p-2"
          background="../../Grid_01.jpg"
          className="lg:col-span-11 row-span-7 lg:row-span-14"
        ></BentoGridItem>

        {/* Grid 2 */}

        <BentoGridItem
          title="Brazil is home, but my workspace is wherever the internet reaches."
          className="lg:col-span-9 row-span-5 lg:row-span-7"
          titleClass="text-xl md:text-3xl"
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
          titleClass="flex justify-center w-[60%] text-xl md:text-4xl"
          className="lg:col-span-9 row-span-5 lg:row-span-7"
        >
          <div className="flex gap-1">
            <InfiniteMovingCards items={testimonials} />
            <InfiniteMovingCards items={testimonials} direction="bottom" />
          </div>
          <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-transparent to-[#0C0E23]" />
        </BentoGridItem>
      </BentoGrid>

      <BentoGrid className="mt-6">
        {/* Grid 4 */}

        <BentoGridItem
          title="Tech lover committed to continuous growth."
          titleClass="text-xl md:text-3xl md:p-2 w-[80%] md:w-full  "
          className="lg:col-span-6 row-span-4 lg:row-span-6 bg-[#04071D] flex flex-col"
          divClass="flex flex-col "
        >
          <GridBackgroundDemo
            GradientClassName="bg-radial from-transparent to-[#000319]"
            SquareClassName="[background-size:40px_40px] md:[background-size:60px_60px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0C0E23]" />
          </GridBackgroundDemo>
          <Skeleton />
        </BentoGridItem>

        {/* Grid 5 */}

        <BentoGridItem
          title="Grid 5"
          className="lg:col-span-14 row-span-4 lg:row-span-12"
        ></BentoGridItem>

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
