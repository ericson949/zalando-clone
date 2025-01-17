import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";

const otherColors = [
    {
        url:"",
        alt:""
    },
    {
        url:"",
        alt:""
    },{
        url:"",
        alt:""
    },{
        url:"",
        alt:""
    },{
        url:"",
        alt:""
    },{
        url:"",
        alt:""
    }
]
const OtherColorProduct = () => {
    return (
        <div className={"grid"}>
            <div className={""}>
                <span>Couleur :</span> <span>beige</span>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={7}
                className="mySwiper">
                {
                    otherColors.map((color, id)=>
                        <SwiperSlide key={id} className={" flex justify-center w-[66px] "}>
                            <div className={"w-[54px] h-[78px] bg-red-500"}></div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default OtherColorProduct;