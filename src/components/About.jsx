import { about } from "../constants";
import Gradient from "./Gradient";
const About = () => {
  return (
    <section id="about" className="mt-[20rem]  pb-20 md:mt-[10rem]">
      <div className=" relative">
        <div className="pt-20 grid gap-5 justify-center md:pt-30 lg:pt-40 lg:grid-cols-2">
          <div className=" relative mt-10 z-5 bg-n-8 flex justify-center items-center rounded-full">
            <h2 className="text-[2rem] font-bold leading-3 h2 md:text-[3rem] lg:text-[4rem]">
              About Me
            </h2>
          </div>
          <div className="mt-10 md:mt-5 lg:mt-0">
            <p className="capitalize mb-10 leading-8 lg:max-w-[85%] lg:text-[1rem] lg:mb-15">
              I'm a passionate
              <span className=" text-black font-extrabold font-grotesk bg-yellow-400 px-1 mx-1 rounded-md tracking-wide md:text-[1.1rem]">
                Frontend Developer | React
              </span>
              with a strong interest in crafting intuitive and dynamic web
              interfaces. My expertise lies in creating responsive and
              accessible websites using modern web technologies.
            </p>
            <ul className="flex flex-col bg-n-8 relative z-5 rounded-full">
              {about.map((info, index) => (
                <li
                  key={info.id}
                  className={`${index === 2 ? "mb-0" : "mb-7"}  bg-n-7/60 px-2 py-5 flex justify-start rounded-xl items-center transition-colors group lg:max-w-[30rem] hover:bg-n-7`}
                >
                  <span className="text-xl mr-4 transition-all border border-amber-400 rounded-full p-2 group-hover:bg-amber-200 ">
                    {" "}
                    {info.icon}{" "}
                  </span>
                  <p className=" text-n-4/60 text-[0.8rem]  max-w-[20rem]">
                    {info.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Gradient className={"bottom-32 -left-20"} />
      </div>
    </section>
  );
};

export default About;
