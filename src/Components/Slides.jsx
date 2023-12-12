// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import ss1 from "../../public/successStories/ss1.png"

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// // import required modules
// import { Pagination, Navigation } from "swiper/modules";

// const Slides = () => {
//   return (
//     <>
//       <div className="slideDiv">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           loop={true}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Pagination, Navigation]}
//           className="mySwiper"
//         >
//           <SwiperSlide><img className="ss1" src="" alt="" /></SwiperSlide>
//           <SwiperSlide>Slide 2</SwiperSlide>
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default Slides;

import React, { useEffect, useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ss1 from "../../public/successStories/ss1.webp";
import ss2 from "../../public/successStories/ss2.webp";
import ss3 from "../../public/successStories/ss3.webp";
import ss4 from "../../public/successStories/ss4.webp";
import ss5 from "../../public/successStories/ss5.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

export default function Slides() {
  const [swiperRef, setSwiperRef] = useState(null);

  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 5 }).map(
      (_, index) => `public/successStories/ss${index + 1}`
    )
  );

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  const slidesNew = [ss1, ss2, ss3, ss4, ss5];

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      function handleResize() {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <div className="slideDiv">
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={windowWidth <= 520 ? 1 : 3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          virtual
        >
          {slidesNew.map((imageUrl, index) => (
            <SwiperSlide key={imageUrl} virtualIndex={index}>
              {
                <img
                  className="ss1"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    border: "2px double #234B6B",
                    overflow: "hidden",
                    // borderRadius: "50px",
                    height: "100%",
                    width: "100%",
                  }}
                />
              }
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <p className="append-buttons">
          <button onClick={() => slideTo(1)} className="prepend-slide">
            First Slide
          </button>
          <button onClick={() => slideTo(500)} className="slide-500">
            Last Slide
          </button>
        </p> */}
        {windowWidth}
      </div>
    </>
  );
}
