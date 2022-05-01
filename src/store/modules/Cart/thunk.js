import { addToCart, removeToCart } from "./action"

export const addToCartThunk = (product) => {
    return (dispach) => {

        const list = JSON.parse(localStorage.getItem("cart")) || []
        list.push(product);
        localStorage.setItem("cart", JSON.stringify(list))

        dispach(addToCart(product))
    }
}
export const removeToCartThunk = (product) => {

    return (dispach) => {
        const list = JSON.parse(localStorage.getItem("cart"))
        const newList = list.filter((e) => e.id !== product)

        localStorage.setItem("cart", JSON.stringify(newList))

        dispach(removeToCart(product))
    }
}