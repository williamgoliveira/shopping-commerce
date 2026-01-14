import { create } from 'zustand';
import type { Product, CartItem } from './types';


interface StoreState {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    language: 'en' | 'pt';
    setLanguage: (lang: 'en' | 'pt') => void;
}

export const useStore = create<StoreState>((set) => ({
    cart: [],
    language: 'en',
    addToCart: (product) => set((state) => {
        const existing = state.cart.find(item => item.id === product.id);
        if (existing) {
            return {
                cart: state.cart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId)
    })),
    clearCart: () => set({ cart: [] }),
    setLanguage: (lang) => set({ language: lang })
}));
