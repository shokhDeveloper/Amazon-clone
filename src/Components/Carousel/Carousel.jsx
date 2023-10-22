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
import { useSelector } from "react-redux";
export const Carousel = ({ name, type, activeCarousel }) => {
  const {token} = useSelector(({Reducer}) => Reducer )
  const { carouselData, setCarouselData } = useContext(Context);
  useEffect(() => {
    console.log(carouselData);
  }, [carouselData]);
  const handleRenderSlide = (arr, active) => {
    if (arr.cards && active) {
      return (
        arr.cards.map((item) => {
          return (
            <SwiperSlide className="carousel-slide"> 
              
              <img className="slide-img" src={item.img} alt="" />
             <div className="slide-active-text-box">
              
              <div className="slide-discount">
                <div className="slide-discount-box">
                  <span>{item.discount}</span>
                  <span>Deal</span>
                </div>
              <div className="slide-price">
                <p>{item.price}</p> <span>List Price {item.notPrice}</span>
              </div>
              <div className="slide-discription-box">
                <p>{item.discription}</p>
              </div>
              </div>

             </div>
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
          <Link className="link-active" to={token ? "/settings": "/sign"}>{arr.title}</Link>
        )}
      </>
    )
  }
  return (
    <section className={ `${name} carousel` }>
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
