import React, { useState } from 'react';
import { ChevronUp, Check } from 'lucide-react';

const NewsletterContent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedItems, setSelectedItems] = useState(new Set([
        'alertes', 'recommandations', 'marques', 'promos',
        'nouveautes', 'similaires', 'stories', 'sondages'
    ]));

    const contentItems = [
        { id: 'alertes', label: 'Alertes articles' },
        { id: 'recommandations', label: 'Recommandations' },
        { id: 'marques', label: 'Mes marques et créateurs' },
        { id: 'promos', label: 'Promos, offres et soldes' },
        { id: 'nouveautes', label: 'Les nouveautés mode' },
        { id: 'similaires', label: 'Vos articles similaires' },
        { id: 'stories', label: 'Stories' },
        { id: 'sondages', label: 'Sondages' }
    ];

    const toggleItem = (id: string) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedItems(newSelected);
    };

    return (
        <div className="border border-gray-200 p-4 w-full max-w-md">
            {/* Header */}
            <button
                className="flex items-center justify-between w-full mb-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium">Contenu</span>
                <ChevronUp
                    className={`w-5 h-5 transition-transform ${
                        !isOpen ? 'transform rotate-180' : ''
                    }`}
                />
            </button>

            {/* Content */}
            {isOpen && (
                <div className="space-y-3">
                    {contentItems.map(item => (
                        <div
                            key={item.id}
                            className="flex items-center gap-3"
                        >
                            <button
                                onClick={() => toggleItem(item.id)}
                                className={`w-5 h-5 flex items-center justify-center border ${
                                    selectedItems.has(item.id)
                                        ? 'bg-black border-black'
                                        : 'border-gray-300'
                                }`}
                            >
                                {selectedItems.has(item.id) && (
                                    <Check className="w-4 h-4 text-white" />
                                )}
                            </button>
                            <span className="text-sm">{item.label}</span>
                        </div>
                    ))}

                    {/* Voir plus link */}
                    <div className="pt-2">
                        <a
                            href="#"
                            className="text-sm text-gray-600 hover:underline"
                        >
                            Voir plus (il faut s'inscrire)
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsletterContent;