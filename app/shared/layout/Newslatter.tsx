import React, { useState } from 'react';
import {Mail } from 'lucide-react';
import NewsletterContent from "~/shared/layout/NewsletterContent";

interface ContentType {
    id: string;
    label: string;
    checked: boolean;
}

const NewsletterSignup: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [preferences, setPreferences] = useState({
        femme: false,
        homme: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logique d'inscription
        // console.log({ email, preferences, contents });
    };

    return (
        <div className="bg-gray-100 p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Section gauche */}
            <div className="md:w-1/2">
                <h2 className="text-xl font-bold mb-2">
                    PROMOS, NOUVEAUTÉS ET TENDANCES
                </h2>
                <h3 className="text-lg font-bold mb-4">
                    DIRECTEMENT DANS VOTRE BOÎTE MAIL
                </h3>
                <p className="text-gray-700">
                    Recevez les nouveautés, les promos et les inspirations mode en vous abonnant à nos newsletters.
                </p>
            </div>

            {/* Section droite - Formulaire */}
            <form onSubmit={handleSubmit} className="md:w-1/2">
                <div className="space-y-6">
                    {/* Email input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Votre adresse e-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded"
                            required
                        />
                    </div>

                    {/* Préférences */}
                    <div>
                        <p className="font-medium mb-2">Configurez vos préférences</p>
                        <p className="text-sm mb-2">Que souhaitez-vous voir ?</p>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="preference"
                                    checked={preferences.femme}
                                    onChange={() => setPreferences({ femme: true, homme: false })}
                                    className="w-4 h-4"
                                />
                                <span>Mode pour femme</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="preference"
                                    checked={preferences.homme}
                                    onChange={() => setPreferences({ femme: false, homme: true })}
                                    className="w-4 h-4"
                                />
                                <span>Mode pour homme</span>
                            </label>
                        </div>
                    </div>

                    <NewsletterContent />

                    {/* Bouton d'inscription */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        Inscrivez-moi
                    </button>

                    {/* Mentions légales */}
                    <p className="text-sm text-gray-600">
                        Merci de vous référer à notre{' '}
                        <a href="#" className="underline">politique de protection des données</a>
                        {' '}pour savoir comment Zalando traite vos données. Vous pouvez vous{' '}
                        <a href="#" className="underline">désinscrire</a>
                        {' '}gratuitement et à tout moment.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default NewsletterSignup;