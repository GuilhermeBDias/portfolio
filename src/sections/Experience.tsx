import { Timeline } from "../components/Timeline";
import { TimelineData } from "../constants";

function Experience() {
  return (
    <section className="section-class flex-col lg:px-20 relative mb-10">
      <h2 className="text-2xl md:text-5xl py-10 font-bold gap-2 flex">
        My Work
        <span className="text-gradient">Experience</span>
      </h2>
      <div className="flex w-full h-full justify-start items-center">
        <Timeline data={TimelineData} />
      </div>
    </section>
  );
}

export default Experience;
