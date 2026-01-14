export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Minimalist Watch',
        price: 129.99,
        description: 'A sleek, modern timepiece for the urban explorer.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
        category: 'Accessories'
    },
    {
        id: '2',
        name: 'Leather Backpack',
        price: 199.50,
        description: 'Handcrafted genuine leather backpack with laptop compartment.',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
        category: 'Bags'
    },
    {
        id: '3',
        name: 'Wireless Headphones',
        price: 249.00,
        description: 'Noise-cancelling over-ear headphones with premium sound.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
        category: 'Electronics'
    },
    {
        id: '4',
        name: 'Designer Sunglasses',
        price: 159.00,
        description: 'UV protection with a classic wayfarer style.',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
        category: 'Accessories'
    }
];
