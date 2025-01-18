import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {HeartIcon} from "~/shared/icons/HeartIcon";

export interface Product {
    url: string;
    isLiked?: boolean;
    title:string;
    description:string;
    price:number;
    discount?:{
        discountPercent:number;
        discountPrice:number;
    }
}
const ProductCarousel = ({products}:{
    products: Product[]
}) => {
    return (
        <Swiper
            spaceBetween={15}
            slidesPerView={2}
            className="mySwiper">
            {
                products.map((product, id) =>
                    <SwiperSlide key={id} className={`${id === 0 ? "" : ""} font-helveticaNow flex justify-center`}>
                        <div className={"w-full h-[265px] " +
                            "bg-red-500 relative"}>
                            <div className={"absolute top-4 right-5"}>
                                <HeartIcon />
                            </div>
                        </div>
                        <div className={" mt-2 font-helveticaNow leading-5 tracking-normal text-lg  grid text-left"}>
                            <h3 className={"font-bold text-md line-clamp-1"}>{product.title}</h3>
                            <span className={"line-clamp-1 text-lg"}>{product.description}</span>
                            <span className={"mt-2 text-lg"}>{product.discount?.discountPrice??product.price} €</span>
                            {
                                product.discount && <div>
                                    <span>A l'origine : <span>{product.price}€</span></span>
                                    <span className={"ml-0.5 font-bold"}>-{product.discount.discountPercent} %</span>
                                </div>
                            }
                        </div>

                    </SwiperSlide>)
            }
        </Swiper>
    );
};

export default ProductCarousel;