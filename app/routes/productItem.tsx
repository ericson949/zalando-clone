import {ProductItemView} from "~/product/ui/view/ProductItemView";
import type {Route} from "./+types/home";
import {Link} from "react-router";
import {ZalandoIcon} from "~/shared/icons/ZalandoIcon";
import {GlobeIcon} from "~/shared/icons/GlobeIcon";
import UserIcon from "~/shared/icons/UserIcon";
import {HeartIcon} from "~/shared/icons/HeartIcon";
import {BagIcon} from "~/shared/icons/BagIcon";
import CategoriesAndSearch from "~/product/ui/view/components/CategoriesAndSearch";
import OtherLink from "~/shared/layout/OtherLink";
import OtherLinkMobile from "~/shared/layout/OtherLinkMobile";
import Footer from "~/shared/layout/Footer";
import NewsletterSignup from "~/shared/layout/Newslatter";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Mister Tee Habibi Crest - T-shirt"},
        {name: "description", content: "detail page"},
    ];
}

export default function ProductItemRoute() {
    return <>
        <header className="w-full font-helveticaNow">
            <nav className="flex flex-wrap items-center w-full max-w-full px-4 pt-2">
                <div className="hidden lg:flex w-1/3">Ele</div>
                <div className="w-2/3 md:w-1/2">
                    <Link to={"/"}>
                        <ZalandoIcon/>
                    </Link>
                </div>
                <div className="flex items-center justify-end w-1/3 md:w-1/2 lg:w-1/3">
      <span className="p-3">
        <GlobeIcon/>
      </span>
                    <span className="p-3">
        <UserIcon/>
      </span>
                    <span className="p-3"><HeartIcon/></span>
                    <span className="p-3"><BagIcon/></span>
                </div>
            </nav>
        </header>
        <CategoriesAndSearch/>
        <main>
            <ProductItemView/>
        </main>
        <NewsletterSignup />
        <OtherLink />
        <OtherLinkMobile />
        <Footer />
    </>
}