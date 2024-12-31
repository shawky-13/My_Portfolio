import { skills } from "../constants";
import Gradient from "./Gradient";
import Heading from "./Heading";

const Skills = () => {
  return (
    <section id="skills" className="mt-10 pb-10 md:mt-20">
      <div className=" relative pt-10 md:pt-20 lg:pt-28">
        <Heading title={"my skills"} />
        <div className=" relative flex justify-center gap-5 items-center flex-wrap p-5 rounded-e-full bg-n-8 z-5">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`w-[7rem] h-[7rem] flex flex-col justify-center items-center rounded-lg p-5 bg-n-7/60 transition-all hover:scale-110 hover:bg-yellow-300`}
            >
              <img
                src={skill.icon}
                alt={skill.title}
                className=" w-[2.5rem] h-[2.5rem] mb-2 "
              />
              <span className="uppercase text-[0.9rem]"> {skill.title} </span>
            </div>
          ))}
        </div>
        <Gradient className={"right-0 bottom-0"} />
      </div>
    </section>
  );
};

export default Skills;
