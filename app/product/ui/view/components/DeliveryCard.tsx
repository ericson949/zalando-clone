import React from 'react';
import IconPrev from "~/shared/icons/IconPrev";

const DeliveryCard = () => {
    return (
        <div className={"grid "}>
            <div className={"border-2 py-4 px-6 border-black"}>
                <span>Vendu et envoyé par </span>
                <button>Zalando</button>
            </div>
            <div className={"border-2 py-4 px-6 border-black"}>
                <div className={"flex justify-between items-center"}>
                    <span className={"font-bold"}>lun 20 jan - mer 22 jan</span>
                    <span>gratuite</span>
                </div>
                <div>
                    <span>Livraison standard</span>
                </div>
            </div>
            <div className={"border-2 flex items-center gap-4 font-bold py-4 px-6 border-black"}>
                <IconPrev />
                <span>Retour gratuit sous 30 jours </span>
            </div>
        </div>
    );
};

export default DeliveryCard;