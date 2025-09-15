import Card from "../components/Card";

function Projects() {
  return (
    <section className="section-class flex-col justify-start pt-[6vh] lg:px-20 relative">
      <p className="text-2xl md:text-5xl font-bold py-16">
        Recent works I'm <span className="text-gradient">proud to share</span>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[20px] justify-center w-full ">
        <div className="col-span-1">
          <Card></Card>
        </div>
      </div>
    </section>
  );
}

export default Projects;
