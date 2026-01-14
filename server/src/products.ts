interface ProductTranslations {
    en: {
        name: string;
        description: string;
        category: string;
    };
    pt: {
        name: string;
        description: string;
        category: string;
    };
}

export interface Product {
    id: string;
    translations: ProductTranslations;
    priceUSD: number;
    priceBRL: number;
    image: string;
}

export const products: Product[] = [
    {
        id: '1',
        translations: {
            en: {
                name: 'Minimalist Watch',
                description: 'A sleek, modern timepiece for the urban explorer.',
                category: 'Accessories'
            },
            pt: {
                name: 'Relógio Minimalista',
                description: 'Um relógio elegante e moderno para o explorador urbano.',
                category: 'Acessórios'
            }
        },
        priceUSD: 129.99,
        priceBRL: 689.90,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: '2',
        translations: {
            en: {
                name: 'Leather Backpack',
                description: 'Handcrafted genuine leather backpack with laptop compartment.',
                category: 'Bags'
            },
            pt: {
                name: 'Mochila de Couro',
                description: 'Mochila de couro genuíno artesanal com compartimento para laptop.',
                category: 'Bolsas'
            }
        },
        priceUSD: 199.50,
        priceBRL: 1059.00,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: '3',
        translations: {
            en: {
                name: 'Wireless Headphones',
                description: 'Noise-cancelling over-ear headphones with premium sound.',
                category: 'Electronics'
            },
            pt: {
                name: 'Fones Sem Fio',
                description: 'Fones de ouvido com cancelamento de ruído e som premium.',
                category: 'Eletrônicos'
            }
        },
        priceUSD: 249.00,
        priceBRL: 1320.00,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: '4',
        translations: {
            en: {
                name: 'Designer Sunglasses',
                description: 'UV protection with a classic wayfarer style.',
                category: 'Accessories'
            },
            pt: {
                name: 'Óculos de Sol Design',
                description: 'Proteção UV com estilo clássico wayfarer.',
                category: 'Acessórios'
            }
        },
        priceUSD: 159.00,
        priceBRL: 845.00,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80'
    }
];
