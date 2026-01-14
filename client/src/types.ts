export interface ProductTranslations {
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

export interface CartItem extends Product {
    quantity: number;
}
