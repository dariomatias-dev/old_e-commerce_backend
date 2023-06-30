type ProductsProps = {
    id: string;
    name: string;
    price: string;
    imageUrlIds: string[];
};

const formattedProducts = (products: ProductsProps[]) => {
    const productsInfo = products.map(product => {
        const image = product.imageUrlIds[0];

        return {
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrlId: image,
        };
    });

    return productsInfo;
};

export default formattedProducts;
