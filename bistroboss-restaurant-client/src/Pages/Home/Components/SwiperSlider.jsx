import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "./../../../assets/Home/slide1.jpg";
import slide2 from "./../../../assets/Home/slide2.jpg";
import slide3 from "./../../../assets/Home/slide3.jpg";
import slide4 from "./../../../assets/Home/slide4.jpg";
import slide5 from "./../../../assets/Home/slide5.jpg";
import slide6 from "./../../../assets/Home/slide1.jpg";
import slide7 from "./../../../assets/Home/slide2.jpg";
import slide8 from "./../../../assets/Home/slide3.jpg";
import slide9 from "./../../../assets/Home/slide4.jpg";
import slide10 from "./../../../assets/Home/slide5.jpg";

const SwiperSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} className="w-full max-h-[450px]" alt="" />
          <h3 className="uppercase text-white -mt-24 mb-8 text-center text-4xl">
            Salads
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide2} className="w-full max-h-[450px]" alt="" />
          <h3 className="uppercase text-white -mt-24 text-center text-4xl">
            Pizza
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide3} className="w-full max-h-[450px]" alt="" />
          <h3 className="uppercase text-white -mt-24 text-center text-4xl">
            Soups
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide4} className="w-full max-h-[450px]" alt="" />
          <h3 className="uppercase text-white -mt-24 text-center text-4xl ">
            desserts
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide5} className="w-full max-h-[450px]" alt="" />
          <h3 className="uppercase text-white -mt-24 text-center text-4xl">
            Salads
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide6} className="w-full max-h-[450px]" alt="" />
          <h3 className="uppercase text-white -mt-24 text-center text-4xl">
            Salads
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide7} className="w-full max-h-[450px]" alt="" />
          <h3 className="uppercase text-white -mt-24 text-center text-4xl">
            Salads
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide8} className="w-full max-h-[450px]" alt="" />
          <h3 className="uppercase text-white -mt-24 text-center text-4xl">
            Salads
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide9} className="w-full max-h-[450px]" alt="" />
          <h3 className="uppercase text-white -mt-24 text-center text-4xl">
            Salads
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide10} className="w-full max-h-[450px]" alt="" />
          <h3 className="uppercase text-white -mt-24 text-center text-4xl">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
