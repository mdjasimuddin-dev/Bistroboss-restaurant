import React from "react";

const SectionTitle = ({ subTitle, sectionTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-inter text-base lg:text-xl text-[#D99904] lg:w-1/3 space-y-1 lg:space-y-3 my-5">
        <p>{subTitle}</p>
        <h1 className="text-2xl lg:text-4xl text-black uppercase border-y-5 border-[#c0c0c0] lg:py-4">{sectionTitle}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
