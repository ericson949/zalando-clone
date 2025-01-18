import React from 'react';
import OutfitSlider from "~/product/ui/view/components/outfit-idea/OutfitSlider";
import InformationIcon from "~/shared/icons/InformationIcon";

const OutfitIdeaView = () => {
    return (
        <section className={"grid gap-6"}>
            <div className={"flex px-6 justify-between items-center"}>
                <span className={"font-bold uppercase"}>idée de tenues</span>
                <InformationIcon />
            </div>
            <OutfitSlider outfits={[{
                url:"",
                name:"Zalando"
            },{
                url:"",
                name:"IAN.FRIS",
                isPage:true,
                isFollowed:false,
                pageImg:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }]} />
        </section>
    );
};

export default OutfitIdeaView;