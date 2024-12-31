const Heading = ({ title, className }) => {
  return (
    <h2
      className={`${className || ""} text-[2rem] font-bold leading-3 mt-10 border-b border-amber-300/20 w-fit pb-5 uppercase h2 md:text-[3rem] md:pb-8 lg:text-[3.5rem]`}
    >
      {title}
    </h2>
  );
};

export default Heading;
