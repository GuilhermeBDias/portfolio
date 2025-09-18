import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import { experience } from "../constants";

function Experience() {
  return (
    <section
      id="experience"
      className="section-class flex-col lg:px-20 relative mb-10"
    >
      <h2 className="text-4xl md:text-5xl py-10 font-bold gap-2 flex">
        My Work
        <span className="text-gradient">Experience</span>
      </h2>
      <BentoGrid className="grid-cols-2 lg:grid-cols-2 gap-14 ">
        {experience.map((exp) => (
          <BentoGridItem className="col-span-2 md:col-span-1 row-span-4 shadow-lg bg-gradient-to-r from-[#04071D] to-[#0C0E23]">
            <div className="absolute h-2 w-full bg-[#161935]"/>
              <div className="flex w-full h-full justify-center items-center">
                <div className="flex flex-col md:flex-row w-full h-full md:gap-4 px-10">
                  <div className="flex items-end md:items-center md:justify-center h-[60%] md:h-full w-[30%]">
                    <img
                      src={exp.image}
                      alt="Imagem aleatoria"
                      className=" w-[80%] md:w-full aspect-square"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center h-full w-full gap-2 md:gap-4">
                    <p className="w-full text-xl md:text-2xl font-bold ">
                      {exp.title}
                    </p>
                    <p className="w-full text-tertiary font-semibold">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
}

export default Experience;
