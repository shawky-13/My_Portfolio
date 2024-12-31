import { github } from "../assets";
import { projects } from "../constants";
import Gradient from "./Gradient";
import Heading from "./Heading";

const Projects = () => {
  return (
    <section id="projects" className="mt-10 pb-10 pt-10 md:mt-20">
      <div className=" relative md:pt-20 lg:pt-28">
        <Heading title={"my latest projects"} />
        <div className="relative mt-28 p-1 bg-n-8/50 z-10">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-n-8/60 min-h-[30rem] p-7 border border-yellow-300/10 rounded-3xl lg:odd:-translate-y-10 group"
              >
                <div>
                  <div className=" pb-3 w-full border-b border-yellow-300/10">
                    <div className="mb-5 overflow-hidden rounded-2xl w-full h-auto md:h-[10rem] lg:h-[18rem]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full transition-all group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h3 className="h3 mb-5 capitalize text-[1.6rem] pt-5">
                    {project.title}
                  </h3>
                  <p className="body-2 text-[0.8rem] mb-5 pb-4 text-n-3/40 leading-6 capitalize border-b border-yellow-300/10">
                    {project.text}
                  </p>
                  <ul className="flex flex-row gap-5 flex-wrap items-center mb-5">
                    {project.skills.map((skill, index) => (
                      <li
                        key={skill.id}
                        className={`${index === skill.lenght - 1 ? "mr-0 " : "mr-6"}  w-[6rem] h-[5rem] flex flex-col justify-center items-center rounded-lg p-3 bg-n-7/60 transition-all hover:scale-105 hover:bg-yellow-300/10`}
                      >
                        <img
                          src={skill.img}
                          alt={skill.title}
                          className="w-[2rem] h-[2rem] mb-2 "
                        />
                        <span className="text-[0.7rem] uppercase">
                          {skill.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className={` flex items-center pt-10 border-t border-yellow-300/10`}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      className="rounded-lg p-3 capitalize bg-n-6/40 transition-all mr-10 hover:bg-yellow-300/10"
                    >
                      live demo
                    </a>
                    <a
                      href={project.repo}
                      className="rounded-lg p-3 bg-n-6/40 transition-all w-[3rem] h-[3rem] hover:bg-yellow-300/10"
                      target="_blank"
                    >
                      <img src={github} alt={"github"} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Gradient
          className={"top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"}
        />
      </div>
    </section>
  );
};

export default Projects;
