import {
    HelpCircle,
    Gift,
    ShoppingBag,
    Truck,
    CreditCard,
    ArrowUpCircle
} from 'lucide-react';

const OtherLink = () => {
    return (
        <section className="hidden md:block bg-purple-700 text-white p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className={"md:col-span-2"}>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                        <HelpCircle className="w-5 h-5"/>
                        Aide & Contact
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Questions fréquentes</a></li>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <li><a href="#" className="hover:underline">Essayez d'abord, payez après</a></li>
                                <li><a href="#" className="hover:underline">Suivre mon colis</a></li>
                                <li><a href="#" className="hover:underline">Guide des tailles</a></li>
                                <li><a href="#" className="hover:underline">S'inscrire à la newsletter</a></li>
                            </div>
                            <div>
                                <li><a href="#" className="hover:underline">Essayez d'abord, payez après</a></li>
                                <li><a href="#" className="hover:underline">Suivre mon colis</a></li>
                                <li><a href="#" className="hover:underline">Guide des tailles</a></li>
                                <li><a href="#" className="hover:underline">S'inscrire à la newsletter</a></li>
                            </div>
                        </div>

                    </ul>
                </div>

                <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                        <Gift className="w-5 h-5"/>
                        Chèques cadeaux
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Offrir une carte cadeau</a></li>
                        <li><a href="#" className="hover:underline">Utiliser une carte cadeau</a></li>
                        <li><a href="#" className="hover:underline">Chèques cadeaux d'entreprise</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                        <ShoppingBag className="w-5 h-5"/>
                        Zalando
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Corporate Website</a></li>
                        <li><a href="#" className="hover:underline">Emplois</a></li>
                        <li><a href="#" className="hover:underline">Presse</a></li>
                        <li><a href="#" className="hover:underline">Relations investisseurs</a></li>
                    </ul>
                </div>

                <div className={"md:col-span-2 grid md:grid-cols-2"}>
                    <div>
                        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                            <Truck className="w-5 h-5"/>
                            Modes de livraison
                        </h3>
                        <div className="flex gap-2 flex-wrap">
                            <img src="/api/placeholder/40/24" alt="DPD" className="h-6 bg-white rounded"/>
                            <img src="/api/placeholder/40/24" alt="UPS" className="h-6 bg-white rounded"/>
                            <img src="/api/placeholder/40/24" alt="GLS" className="h-6 bg-white rounded"/>
                            <img src="/api/placeholder/40/24" alt="Post" className="h-6 bg-white rounded"/>
                        </div>
                    </div>
                    <div className={""}>
                        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                            <CreditCard className="w-5 h-5"/>
                            Moyens de paiement
                        </h3>
                        <div className="flex gap-2 flex-wrap">
                            <img src="/api/placeholder/40/24" alt="Visa" className="h-6 bg-white rounded"/>
                            <img src="/api/placeholder/40/24" alt="Mastercard" className="h-6 bg-white rounded"/>
                            <img src="/api/placeholder/40/24" alt="Amex" className="h-6 bg-white rounded"/>
                            <img src="/api/placeholder/40/24" alt="Klarna" className="h-6 bg-white rounded"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                        <ShoppingBag className="w-5 h-5"/>
                        Shopping en ligne facile
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Livraison offerte pour les commandes de plus de
                            24€*</a></li>
                        <li><a href="#" className="hover:underline">Satisfait ou remboursé sous 30 jours</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                        <ShoppingBag className="w-5 h-5"/>
                        Nos services
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Payé by Zalando</a></li>
                        <li><a href="#" className="hover:underline">Programme partenaire</a></li>
                        <li><a href="#" className="hover:underline">Connected Retail</a></li>
                        <li><a href="#" className="hover:underline">Zalando Marketing Services</a></li>
                        <li><a href="#" className="hover:underline">En savoir plus</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OtherLink;