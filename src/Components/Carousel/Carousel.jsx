import "./carousel.scss";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BookTovar from "../../Settings/book.json";
import ExitTovar from "../../Settings/exits.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useContext, useEffect } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
export const Carousel = ({ name, type, activeCarousel }) => {
  const { carouselData, setCarouselData } = useContext(Context);
  useEffect(() => {
    console.log(carouselData);
  }, [carouselData]);
  const handleRenderSlide = (arr, active) => {
    if (arr.cards && active) {
      return (
        arr.cards.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.img} alt="" />
            </SwiperSlide>
          )
        })
      )
    } else {
      return arr.map((item) => {
        return (
          <SwiperSlide>
            <img src={item.img} alt="" />
          </SwiperSlide>
        );
      });
    }
  };
  const handleRenderTitle = (text, arr) => {
    return(
      <>
        <h3>{text}</h3>
        {arr  &&  (
          <Link>{arr.title}</Link>
        )}
      </>
    )
  }
  return (
    <section className={name}>
      <div className="container">
        <div className="carousel-inner">
          <div className="carousel-title-box">
             {(function(type){
              if(type === "book"){
                return (
                  handleRenderTitle("Best Sellers in Books")
                )
              }else if(type ==="exiting"){
                return (
                  handleRenderTitle("Exiting Deals", ExitTovar)
                )
              }
             }(type))} 
          </div>
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={activeCarousel ? 6: 8}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper.activeIndex)}
            onSlideChange={(swiper) => console.log(swiper)}
          >
            {(function (type) {
              if (type === "book") {
                return handleRenderSlide(BookTovar, false);
              } else {
                return handleRenderSlide(ExitTovar, true);
              }
            })(type)}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
