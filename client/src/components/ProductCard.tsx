import { useStore } from '../store';
import type { Product } from '../types';
import { useTranslation } from 'react-i18next';
import { Plus } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useStore();
    const { t } = useTranslation();

    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-full h-80 overflow-hidden bg-gray-200">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm text-primary font-medium mb-1">{product.category}</p>
                        <h3 className="text-lg font-bold text-gray-900">
                            {product.name}
                        </h3>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">${product.price}</p>
                </div>
                <p className="mt-2 text-sm text-gray-500 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{product.description}</p>
                <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-xl hover:bg-primary transition-colors active:scale-95 duration-200"
                >
                    <Plus className="w-4 h-4" />
                    {t('products.addToCart')}
                </button>
            </div>
        </div>
    );
}
