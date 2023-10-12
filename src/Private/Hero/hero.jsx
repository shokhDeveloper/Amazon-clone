import "./hero.scss"
import { Navigation,  Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const  Hero = () => {
  let {heroImages} = useSelector(({Reducer}) => Reducer)
   const [count, setCount]  =useState(0)
   const handleSlider = () => {
    if(count > 0){
      setCount((count) => count-1)
    }else{
      setCount(heroImages.length-1)
    }
    if(count <= heroImages.length-2){
      setCount((count) => count+1 )
    }else{
      setCount(0)
    }
   }
   
   useEffect(() => {
    setInterval(() => {
        // handleSliderInterval(null)
    }, 1000)  
  },[count])
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner" style={{transform: ``}}>
          <div className="hero-image-box">
          {heroImages?.map(item => {
            return(
              <img style={{transform: `translateX(${count * -100}%`}} key={item} src={item} alt="Hero image item" />
            )
          })}
          </div>
        </div>
          <button onClick={() => {
            setCount((count) => count+1)
            handleSlider()
          }}>Left</button>
          <button onClick={() => {
               setCount((count) => count-1)
               handleSlider()
            
         }}>Right</button>
      </div>
    </section>
  );
};