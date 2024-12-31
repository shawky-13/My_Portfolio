import { contactFooter } from "../constants";
const Footer = () => {
  return (
    <section>
      <div className=" relative z-10 flex items-center justify-between rounded-lg bg-n-8/50 py-12 px-4 flex-col-reverse md:flex-row sm:px-6 lg:px-8">
        <p
          className=" body-2 text-n-4/50
        "
        >
          ©{new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex justify-between items-center w-[20rem]  mb-7 md:mb-0 ">
          {contactFooter.map((icon) => (
            <a
              key={icon.id}
              href={icon.url}
              target="_blank"
              className="w-[2.5rem] h-[2.5rem] p-2 flex justify-center items-center rounded-full bg-n-4/35 transition-colors hover:bg-amber-400"
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
    </section>
  );
};

export default Footer;
