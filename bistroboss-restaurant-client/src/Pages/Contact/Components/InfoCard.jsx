const InfoCard = ({ icon, InfoTitle, InfoDescrip, InfoDescrip2 }) => {
  return (
    <div className="border-1 border-base-200">
      <div className="bg-[#d1a054] flex justify-center items-center p-2">
        <img src={icon} alt="" className="w-8 h-8" />
      </div>
      <div className="flex flex-col justify-center items-center bg-base-200 mx-5 mb-5 p-10">
        <h3 className="uppercase font-inter text-2xl">{InfoTitle}</h3>
        <p>{InfoDescrip}</p>
        <p>{InfoDescrip2}</p>
      </div>
    </div>
  );
};

export default InfoCard;
