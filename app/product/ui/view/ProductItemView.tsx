import ProductDescription from "~/product/ui/view/components/ProductDescription";
import ProductInformations from "~/product/ui/view/components/ProductInformations";
import OutfitIdeaView from "~/product/ui/view/components/outfit-idea/OutfitIdeaView";
import ProductCarouselSection from "~/product/ui/view/components/product-carrousel/ProductCarouselSection";

export function ProductItemView (){
    return <div>
        <ProductDescription />
        <ProductInformations />
        <OutfitIdeaView/>
        <ProductCarouselSection
            title={"Plus de designer"}
            seeMoreUrl={"/product/item/1"}
            products={[
                {
                    url:"",
                    isLiked:false,
                    title:"POLO RALPH LAUREN",
                    description:"ESTATE RIB QUARTER TYEE",
                    price:200,
                    discount:{
                        discountPercent:50,
                        discountPrice:100
                    }
                },
                {
                    url:"",
                    isLiked:false,
                    title:"POLO RALPH LAUREN",
                    description:"ESTATE RIB QUARTER",
                    price:200,
                    discount:{
                        discountPercent:50,
                        discountPrice:100
                    }
                }
            ]}
        />
    </div>
}