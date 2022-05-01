import { toast } from "react-toastify"
import { addToCart, removeToCart } from "./action"

export const addToCartThunk = (product) => {
    return (dispach) => {

        const list = JSON.parse(localStorage.getItem("cart")) || []

        const existente = list.find((e) => e.nome === product.nome)
        if (existente === undefined) {
            list.push(product)
            toast.success("Produto adicionado!")
        } else {
            toast.error("Produto já adicionado!")
        }
        localStorage.setItem("cart", JSON.stringify(list))

        dispach(addToCart(list))
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