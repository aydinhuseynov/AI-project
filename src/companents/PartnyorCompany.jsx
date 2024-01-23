import Company from "./Company";
import companys from "../assets/pictures.json";
import "../assets/css/PartnyorCompany.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';


const PartnyorCompany = () => {
  return (
    <div className="partner-section py-3 ps-5">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          
      modules={[Autoplay]}
      className="mySweaper"
      >
        {companys.map((company) => (
          <SwiperSlide><Company companyLogo={company.company_logo} /> </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnyorCompany;
