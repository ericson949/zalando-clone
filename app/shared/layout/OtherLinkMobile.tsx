
import React, { useState } from 'react';
import {
    HelpCircle,
    Gift,
    PlayCircle,
    Truck,
    CreditCard,
    ShoppingBag,
    Settings,
    ChevronDown
} from 'lucide-react';

const OtherLinkMobile = () => {
    const [openSection, setOpenSection] = useState<string|null>(null);

    const navItems = [
        { id: 'aide', icon: <HelpCircle />, title: 'Aide & Contact' },
        { id: 'cheques', icon: <Gift />, title: 'Chèques cadeaux' },
        { id: 'zalando', icon: <PlayCircle />, title: 'Zalando' },
        { id: 'livraison', icon: <Truck />, title: 'Modes de livraison' },
        { id: 'paiement', icon: <CreditCard />, title: 'Moyens de paiement' },
        { id: 'shopping', icon: <ShoppingBag />, title: 'Shopping en ligne facile' },
        { id: 'services', icon: <Settings />, title: 'Nos services' },
    ];

    const toggleSection = (id:string) => {
        setOpenSection(openSection === id ? null : id);
    };

    return (
        <section className="w-full md:hidden bg-white">
            {navItems.map((item) => (
                <div key={item.id} className="border-b border-gray-200">
                    <button
                        onClick={() => toggleSection(item?.id)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
              <span className="text-gray-600 w-5 h-5">
                {item.icon}
              </span>
                            <span className="text-sm font-medium">{item.title}</span>
                        </div>
                        <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform ${
                                openSection === item?.id ? 'transform rotate-180' : ''
                            }`}
                        />
                    </button>

                    {openSection === item?.id && (
                        <div className="px-12 py-3 bg-gray-50">
                            {/* Contenu de l'accordéon - à personnaliser selon les besoins */}
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:underline">Lien 1</a></li>
                                <li><a href="#" className="hover:underline">Lien 2</a></li>
                                <li><a href="#" className="hover:underline">Lien 3</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default OtherLinkMobile;