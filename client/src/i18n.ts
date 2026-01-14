import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
    en: {
        translation: {
            "nav.home": "Home",
            "nav.cart": "Cart",
            "hero.title": "Elevate Your Lifestyle",
            "hero.subtitle": "Curated essentials for the modern individual.",
            "hero.shopNow": "Shop Now",
            "products.title": "Featured Collection",
            "products.addToCart": "Add to Cart",
            "cart.title": "Your Shopping Cart",
            "cart.empty": "Your cart is empty.",
            "cart.total": "Total",
            "cart.checkout": "Checkout",
            "footer.rights": "All rights reserved."
        }
    },
    pt: {
        translation: {
            "nav.home": "Início",
            "nav.cart": "Carrinho",
            "hero.title": "Eleve seu Estilo de Vida",
            "hero.subtitle": "Essenciais curados para o indivíduo moderno.",
            "hero.shopNow": "Comprar Agora",
            "products.title": "Coleção em Destaque",
            "products.addToCart": "Adicionar",
            "cart.title": "Seu Carrinho",
            "cart.empty": "Seu carrinho está vazio.",
            "cart.total": "Total",
            "cart.checkout": "Finalizar Compra",
            "footer.rights": "Todos os direitos reservados."
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // default language
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
