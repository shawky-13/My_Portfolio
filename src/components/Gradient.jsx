const Gradient = ({ className }) => {
  return (
    <div
      className={`${className || ""} absolute w-[20%] h-[40%]  yellow-gradient`}
    />
  );
};

export default Gradient;
