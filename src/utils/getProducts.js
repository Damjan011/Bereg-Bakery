import { arrayOfProducts } from "../productData";

export function getProductsByCategoryName(categoryName) {
    return arrayOfProducts.filter((product) => product.category === categoryName);
}