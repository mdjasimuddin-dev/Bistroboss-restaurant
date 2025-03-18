import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import quoteImg from './../../../assets/Home/quote-left.png'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-5">
      <SectionTitle
        subTitle="---What Our Clients Say---"
        sectionTitle="Testimonials"
      ></SectionTitle>

      <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center lg:mx-24 lg:my-16 space-y-3">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <img  src={quoteImg} alt="" />
              <p className="text-center">{review.details}</p>
              <h3 className="text-xl text-orange-300 font-bold">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
