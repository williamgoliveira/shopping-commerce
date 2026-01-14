import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <div className="relative overflow-hidden bg-gray-900 text-white pb-16 sm:pb-24">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=80"
                    alt="Fashion Background"
                    className="h-full w-full object-cover object-center opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-48">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animate-fade-in">
                    {t('hero.title')}
                </h1>
                <p className="max-w-xl text-xl text-gray-300 mb-8 font-light">
                    {t('hero.subtitle')}
                </p>
                <a href="#products" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all hover:gap-3">
                    {t('hero.shopNow')}
                    <ArrowRight className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}
