import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Thank you sir Romeo Jr Reyes Rosales for having me as your plus 1 pag Sunday sa team gathering ninyo, which was also a way to open a new opportunity for me. Sir Roche, and to the rest of the team, thank you so much. Looking forward to an exciting business 🍀💛",
    },
    {
      img: profilePic2,
      review:
        "Thank you, Sir Romeo Jr Reyes Rosales for introducing me to SunLife. It's a great opportunity to learn more about insurance.",
    },
    {
      img: profilePic3,
      review:
        "Thank you for the knowledge and for the enlightenment you have provided with regard to life insurance. I can proudly say I am now insured with SunLife! And I know it will lead me to a brighter future.",
    },
    {
      img: profilePic4,
      review:
        "Thank you for your time and  effort sir daghan kug nakat- onan sa atong pag tabi nato sukad sa unang panagkita ug sa ikaduha panag kita ug naka decide na jud ko sa akong future..😇😊Usbon ko pag ingon Daghang Salamat.. Sa Ganahan dra pag pa Insured talk our Financial Advisor ",
    },
    {
      img: profilePic5,
      review:
        "Thank you to my financial advisor, Kuya Romeo Jr Reyes Rosales, for introducing 𝐒𝐮𝐧 𝐋𝐢𝐟𝐞 𝐅𝐢𝐧𝐚𝐧𝐜𝐢𝐚𝐥 to me. Still can't believe that at the age of 21, I am now insured. I've never felt this secured before!💛 As a business administration student, I've learned how to save and invest my money wisely. ",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
