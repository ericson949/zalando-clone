import React from 'react';
import ProductName from "~/product/ui/view/components/product-description/ProductName";
import ImageCarroussel from "~/product/ui/view/components/product-description/ImageCarroussel";
import OtherColorProduct from "~/product/ui/view/components/OtherColorProduct";
import SelectTailleAndAddToBasket from "~/product/ui/view/components/SelectTailleAndAddToBasket";
import DeliveryCard from "~/product/ui/view/components/DeliveryCard";

const ProductDescription = () => {
    return (
        <div className={"flex flex-wrap"}>
            <ImageCarroussel />
            <div className={"pt-6 grid  px-5"}>
                <ProductName />
                <OtherColorProduct />
                <SelectTailleAndAddToBasket />
                <DeliveryCard />
            </div>
        </div>
    );
};

export default ProductDescription;