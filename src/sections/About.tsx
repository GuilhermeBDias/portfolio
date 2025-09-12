import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import { InfiniteMovingCards } from "../components/InfinityCards";
import { testimonials } from "../constants";

function About() {
  return (
    <section id="about" className="section-class flex-col lg:px-8 mb-10">
      <BentoGrid>
        <BentoGridItem
          title="I prioritize service quality and long-term collaboration with clients."
          titleClass="flex w-[60%] justify-end"
          background="../../Grid_01.jpg"
          className="lg:col-span-11 row-span-7 lg:row-span-14"
        ></BentoGridItem>
        <BentoGridItem
          title="Brazil is home, but my workspace is wherever the internet reaches."
          className="lg:col-span-9 row-span-5 lg:row-span-7"
        >
          <div className="absolute inset-0 -z-10 w-full h-[34rem] top-20 invert bg-gradient-to-t rounded-full overflow-hidden">
            <img
              src="../../map.svg"
              alt="World Map"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 w-full h-full -z-10 bg-gradient-to-t from-[#000319]/50 via-[#000319]/80 to-[#000319]" />
        </BentoGridItem>
        <BentoGridItem
          title="My Tech Stack"
          subTitle="I constantly try to improve"
          titleClass="flex justify-center w-[60%]"
          className="lg:col-span-9 row-span-5 lg:row-span-7"
        >
          <div className="flex gap-2">
            <InfiniteMovingCards items={testimonials} />
            <InfiniteMovingCards items={testimonials} direction="bottom" />
          </div>
        </BentoGridItem>
      </BentoGrid>

      <BentoGrid className="mt-8">
        <BentoGridItem
          title="Grid 4"
          className="lg:col-span-6 row-span-4 lg:row-span-6"
        ></BentoGridItem>
        <BentoGridItem
          title="Grid 5"
          className="lg:col-span-14 row-span-4 lg:row-span-12"
        ></BentoGridItem>
        <BentoGridItem
          title="Grid 6"
          className="lg:col-span-6 row-span-6 lg:row-span-6"
        ></BentoGridItem>
      </BentoGrid>
    </section>
  );
}

export default About;
