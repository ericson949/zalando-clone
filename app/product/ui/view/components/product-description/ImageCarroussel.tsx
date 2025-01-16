import React, {useState} from 'react';
import {HeartIcon} from "~/shared/icons/HeartIcon";

const ImageCarroussel = () => {
    const [currentImage, setCurrentImage] =useState(0)
    const imagesLinks = [
        "https://images.pexels.com/photos/687501/pexels-photo-687501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1459347/pexels-photo-1459347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3162822/pexels-photo-3162822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1022166/pexels-photo-1022166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5896359/pexels-photo-5896359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
    const handlePrev = () => {
        setCurrentImage(curr=> curr-1<0? imagesLinks.length-1:curr-1)
    }
    const handleNext = () => {
        setCurrentImage(curr=> curr+1>=imagesLinks.length? 0:curr+1)
    }
    return (<div
            className='slides overflow-scroll smooth-scroll w-full whitespace-nowrap touch-pan-x before:shrink-0 after:shrink-0 before:w-[36vw] after:w-[36vw] snap-mandatory flex snap-x'>
            {
                imagesLinks.map((link, index)=> {
                    return <div
                        className='slide flex-shrink-0 w-[100vw] h-[620px]
                        overflow-clip relative  snap-center'>

                        <img
                            alt={`image ${index + 1}`}
                            src={link}
                            className='block w-full h-full object-cover object-center
                            absolute right-0 animate-parallax [animation-timeline:view(x)]'/>
                        <button className={"absolute top-4 right-5"}>
                            <HeartIcon/>
                        </button>
                        <span className={"absolute font-bold bottom-5 text-sm left-4"}>
                            {index+1}{' / '}{imagesLinks.length}
                        </span>
                    </div>
                })
            }

        </div>
    );
};

export default ImageCarroussel;