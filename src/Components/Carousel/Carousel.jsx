import "./carousel.scss"
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BookTovar from "../../Settings/book.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useContext } from "react";
import { Context } from "../Context";
export const Carousel = ({ name }) => {
  const {setFocus} = useContext(Context)  
  return (
    <section className={name}>
      <div className="container">
        <div className="carousel-inner">
        <div className="carousel-title-box">
                <h4>Best Sellers in Books</h4>
            </div>
        <Swiper 
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={8}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper.activeIndex)}
          onSlideChange={(swiper) => console.log(swiper)}
        >
            
            {BookTovar?.map(item => {
                return(
                    <SwiperSlide>
                        <img src={item.img} alt="" />
                    </SwiperSlide>
                )
            })}
        </Swiper>
        </div>
      </div>
    </section>
  );
};
