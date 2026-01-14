export const formatCurrency = (amount: number, language: 'en' | 'pt'): string => {
    if (language === 'pt') {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(amount);
    }

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};

export const getLocalizedProduct = (
    product: any,
    language: 'en' | 'pt'
) => {
    return {
        id: product.id,
        name: product.translations[language].name,
        description: product.translations[language].description,
        category: product.translations[language].category,
        price: language === 'pt' ? product.priceBRL : product.priceUSD,
        image: product.image
    };
};
