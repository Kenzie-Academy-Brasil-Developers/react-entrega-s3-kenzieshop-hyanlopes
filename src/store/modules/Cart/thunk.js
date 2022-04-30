import { addToCart } from "./action"

export const addToCartThunk = (product) => {
    console.log(product);
    return (dispach) => {

        const list = JSON.parse(localStorage.getItem("cart")) || []
        list.push(product);
        localStorage.setItem("cart", JSON.stringify(list))

        dispach(addToCart(product))
    }
}