import ProductDescription from "~/product/ui/view/components/ProductDescription";
import OtherColorProduct from "~/product/ui/view/components/OtherColorProduct";
import SelectTailleAndAddToBasket from "~/product/ui/view/components/SelectTailleAndAddToBasket";
import ProductInformations from "~/product/ui/view/components/ProductInformations";
import DeliveryCard from "~/product/ui/view/components/DeliveryCard";

export function ProductItemView (){
    return <div>
        <ProductDescription />
        <OtherColorProduct />
        <SelectTailleAndAddToBasket />
        <DeliveryCard />
        <ProductInformations />
    </div>
}