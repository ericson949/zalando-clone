import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

interface Outfit {
    url: string;
    name: string;
    pageImg?: string;
    isFollowed?: boolean;
    isPage?: boolean;
}

const OutfitSlider = ({outfits}: {
    outfits: Outfit[]
}) => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1.5}
            className="mySwiper">
            {
                outfits.map((outfit, id) =>
                    <SwiperSlide key={id} className={`${id === 0 ? "ml-6" : ""} flex justify-center`}>
                        <div className={"w-full h-[390px] bg-red-500 "}></div>
                        <div className={"flex items-center"}>
                            {
                                outfit.pageImg &&
                                <div className={"w-[26px] h-[26px]"}>
                                    <img alt={outfit.name}
                                         src={outfit.pageImg}
                                         className={"w-[26px] h-[26px] object-cover object-center"}/>
                                </div>
                            }
                            <span>{outfit.name}</span>
                            {outfit.isPage && <><span className={"mx-2"}>.</span>
                                <button className={"underline font-bold"}>Suivre
                                </button>
                            </>}

                        </div>
                    </SwiperSlide>)
            }
        </Swiper>
    );
};

export default OutfitSlider;