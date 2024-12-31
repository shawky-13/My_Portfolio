import { contact } from "../constants";
import myPhoto from "../assets/my_photo.png";
import lab from "../assets/labtop.avif";
import circle from "../assets/arrowCircle.png";
import Gradient from "./Gradient";
const Home = () => {
  return (
    <section id="home" className="pt-20 pb-20">
      <div className="relative">
        <div className="grid gap-10 justify-center md:grid-cols-2">
          <div className="relative flex flex-col items-center md:items-start">
            <h1 className="h1 uppercase mb-5 md:mb-10">
              hi, i'm shawky mshrif
            </h1>
            <p className=" capitalize body-2 text-n-4/70 mb-5 md:mb-10">
              software engineer && junior frontend developer | react
            </p>
            <div className="flex justify-between flex-col items-start  md:flex-row">
              <a
                href="#contact"
                className="w-[10rem] mr-0 uppercase text-center text-n-8 font-bold font-code bg-amber-400 rounded-lg p-2 transition-all mb-5 hover:bg-amber-200 md:mr-10 md:mb-10 active:scale-95"
              >
                contact me
              </a>
              <a
                download="ShawkyMshrif_CV.pdf"
                href="https://drive.google.com/uc?export=download&id=1U4GcvARR6uOWhwI1KxfKSl19JnDxer55"
                className="w-[10rem] uppercase text-center text-n-8 font-bold font-code bg-amber-400 rounded-lg p-2 transition-all mb-5 hover:bg-amber-200 md:mb-10 active:scale-95"
              >
                download my cv
              </a>
            </div>
            <ul className="flex justify-between items-center w-[10rem] ">
              {contact.map((icon) => (
                <a
                  key={icon.id}
                  href={icon.url}
                  target="_blank"
                  className="w-[2.5rem] h-[2.5rem] p-2 flex justify-center items-center rounded-full bg-n-4/20 transition-colors hover:bg-amber-400"
                >
                  <img
                    src={icon.iconUrl}
                    alt={icon.title}
                    className="w-full h-full"
                  />
                </a>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="hidden absolute left-[20%] top-20  bg-slate-400/10 rounded-full w-[17rem] h-[17rem] lg:block " />
            <div className="w-[14rem] h-[18rem] absolute top-0 right-1/2 translate-x-1/2 lg:top-32 lg:right-0 lg:-translate-x-0 overflow-hidden">
              <img
                src={myPhoto}
                alt="my_photo"
                className="rounded-t-[10rem] w-full h-full"
              />
            </div>
            <div className="absolute top-10 left-0 overflow-hidden hidden lg:block">
              <img
                src={lab}
                alt="my_photo"
                className=" w-[10rem] h-[10rem] rounded-t-[10rem]"
              />
            </div>
            <div className=" w-[7rem] h-[5rem] absolute top-0 right-32 overflow-hidden hidden animate-bounce lg:block">
              <img src={circle} alt="my_photo" className=" w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
