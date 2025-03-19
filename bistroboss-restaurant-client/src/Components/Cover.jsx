const Cover = ({ bgImage, title, description }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`hero h-[450px] lg:h-[550px]`}
    >
      <div className="hero-content text-neutral-content text-center bg-[#15151599] md:px-36 md:py-10">
        <div className="max-w-md space-y-3">
          <h1 className="text-6xl font-cinzel font-bold uppercase">{title}</h1>
          <p
            className={`${
              description?.length <= 30 ? "font-cinzel" : "font-inter"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
