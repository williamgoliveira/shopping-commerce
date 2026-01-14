import { useStore } from '../store';
import { useTranslation } from 'react-i18next';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/localization';

export default function Cart() {
    const { cart, removeFromCart, language } = useStore();
    const { t } = useTranslation();

    // Calculate total with correct currency
    const total = cart.reduce((acc, item) => {
        const price = language === 'pt' ? item.priceBRL : item.priceUSD;
        return acc + price * item.quantity;
    }, 0);

    if (cart.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h2 className="text-2xl font-bold mb-4">{t('cart.empty')}</h2>
                <Link to="/" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
                    {t('hero.shopNow')} <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold mb-8">{t('cart.title')}</h1>

            <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
                <div className="lg:col-span-7">
                    <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                        {cart.map((item) => {
                            const localizedData = item.translations[language];
                            const price = language === 'pt' ? item.priceBRL : item.priceUSD;
                            const itemTotal = price * item.quantity;

                            return (
                                <li key={item.id} className="flex py-6">
                                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={localizedData.name}
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </div>
                                    <div className="ml-4 flex-1 flex flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>{localizedData.name}</h3>
                                                <p className="ml-4">{formatCurrency(itemTotal, language)}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">{localizedData.category}</p>
                                        </div>
                                        <div className="flex-1 flex items-end justify-between text-sm">
                                            <p className="text-gray-500">{t('cart.qty')} {item.quantity}</p>
                                            <button
                                                type="button"
                                                onClick={() => removeFromCart(item.id)}
                                                className="font-medium text-red-500 hover:text-red-700 flex items-center gap-1"
                                            >
                                                <Trash2 className="w-4 h-4" /> {t('cart.remove')}
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5 shadow-sm">
                    <h2 className="text-lg font-medium text-gray-900">{t('cart.orderSummary')}</h2>
                    <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
                        <div className="text-base font-medium text-gray-900">{t('cart.total')}</div>
                        <div className="text-base font-medium text-gray-900">{formatCurrency(total, language)}</div>
                    </div>
                    <button className="mt-6 w-full bg-primary border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg shadow-primary/30 transition-all">
                        {t('cart.checkout')}
                    </button>
                </div>
            </div>
        </div>
    );
}
