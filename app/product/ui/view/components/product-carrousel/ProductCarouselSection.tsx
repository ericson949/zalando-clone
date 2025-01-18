import React from 'react';
import InformationIcon from "~/shared/icons/InformationIcon";
import {Link} from "react-router";
import ProductCarousel, {type Product} from "~/product/ui/view/components/product-carrousel/ProductCarousel";

const ProductCarouselSection = ({
                             title, seeMoreUrl,products
                         }: {
    seeMoreUrl?: string,
    title: string
    products: Product[]
}) => {
    return (
        <section className={"grid mt-10"}>
            <div className={"flex text-3xl px-6 uppercase  items-center justify-between"}>
                <span >{title}</span>
                <InformationIcon/>
            </div>
            {
                seeMoreUrl && <Link className={"px-6"} to={seeMoreUrl}>
                    <span className={"underline"}>Voir plus</span>
                </Link>
            }
            <ProductCarousel
                products={products}
            />
        </section>
    );
};

export default ProductCarouselSection;