import { useTranslation } from 'react-i18next';
import { ShoppingCart, Globe } from 'lucide-react';
import { useStore } from '../store';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const { cart, language, setLanguage } = useStore();

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'pt' : 'en';
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
    };

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tighter">
                        LUX<span className="text-primary">PORTFOLIO</span>
                    </Link>

                    <div className="flex items-center space-x-6">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors"
                        >
                            <Globe className="w-5 h-5" />
                            <span className="uppercase text-sm font-medium">{language}</span>
                        </button>

                        <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary transition-colors">
                            <ShoppingCart className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-primary rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
