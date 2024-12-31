const Line = ({ className }) => {
  return (
    <div
      className={`${className || ""} absolute w-[50%] h-[1%] right-0 yellow-line`}
    />
  );
};

export default Line;
