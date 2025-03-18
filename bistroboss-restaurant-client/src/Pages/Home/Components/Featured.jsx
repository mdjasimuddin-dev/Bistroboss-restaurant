import featureImage from "./../../../assets/Home/featured.jpg";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="relative">
      <div
        className="absolute bg-fixed inset-0 bg-black brightness-50"
        style={{
          backgroundImage: `url(${featureImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="max-w-7xl relative z-10 p-5 md:p-28 text-white">
        {/* section title and subtitle  */}
        <div className="font-inter mx-auto text-base lg:text-xl text-[#D99904] lg:w-1/3 space-y-1 lg:space-y-3 my-5">
          <p>---Check it out---</p>
          <h1 className="text-2xl lg:text-4xl text-white uppercase border-y-5 border-[#c0c0c0] lg:py-4">
            From Our Menu
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:mt-10">
          <img
            src={featureImage}
            alt="Featured"
            className="shadow-lg rounded-lg"
          />

          <div className="text-start font-inter md:mt-10 lg:mt-0 space-y-1 md:space-y-2">
            <p className="text-base md:text-2xl">Aug 05, 2024</p>
            <h3 className="text-base md:text-2xl uppercase">
              Where can I get some?
            </h3>
            <p className="text-xs text-justify md:text-lg md:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              rerum fugiat laboriosam expedita delectus eaque tempore quidem
              natus soluta facere dolorum, consequuntur ipsam cum esse iste
              voluptas. Aliquam, totam eos sit repudiandae quod laborum
              corrupti, a amet nemo optio est architecto libero omnis rem. Iure
              magni nobis dignissimos nisi exercitationem.
            </p>

            <Link
              to="/order"
              className="btn bg-transparent text-[#FFFFFF] mt-5 border-0 rounded-xl border-b-4 border-white uppercase text-xl hover:border-t-4 hover:border-b-0 hover:text-[#bb8406] hover:border-[#bb8406]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
