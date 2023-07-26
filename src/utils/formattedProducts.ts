type ProductsProps = {
    id: string;
    name: string;
    price: string;
};

const formattedProducts = (products: ProductsProps[]) => {
    const productsInfo = products.map(product => {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
        };
    });

    return productsInfo;
};

export default formattedProducts;
