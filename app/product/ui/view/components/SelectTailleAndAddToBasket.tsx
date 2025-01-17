import React from 'react';
import {ChevronDownIcon} from "~/shared/icons/ChevronDownIcon";

const SelectTailleAndAddToBasket = () => {
    return (
        <div className={"grid gap-2"}>
            <p>
                Nous vous recommandons de choisir une taille en dessous de celle habituelle.
            </p>
            <button className={"flex mt-2 items-center font-bold h-12 border-[3px] px-4 border-black  justify-between"}>
                <span>M</span>
                <ChevronDownIcon />
            </button>
            <button className={"w-full bg-black text-white flex items-center font-bold h-12 justify-center"}>
                <span>Ajouter au panier</span>
            </button>
        </div>
    );
};

export default SelectTailleAndAddToBasket;