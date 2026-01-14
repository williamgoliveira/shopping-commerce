import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const { t } = useTranslation();

    useEffect(() => {
        fetch('http://localhost:3005/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Error fetching products:', err));
    }, []);

    return (
        <div className="pb-20">
            <Hero />
            <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">{t('products.title')}</h2>

                {products.length === 0 ? (
                    <div className="text-center text-gray-500 py-10">Loading products...</div>
                ) : (
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
