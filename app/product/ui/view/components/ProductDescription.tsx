import React from 'react';
import ProductName from "~/product/ui/view/components/product-description/ProductName";
import ImageCarroussel from "~/product/ui/view/components/product-description/ImageCarroussel";

const ProductDescription = () => {
    return (
        <div className={"flex flex-wrap"}>
            <ImageCarroussel />
            <ProductName />
        </div>
    );
};

export default ProductDescription;