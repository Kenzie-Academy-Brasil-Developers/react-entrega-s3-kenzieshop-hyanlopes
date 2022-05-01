const cart = JSON.parse(localStorage.getItem("cart")) || []
const cartReducer = (state = cart, action) => {
    console.log(cart)
    switch (action.type) {
        case "@cart/ADD":
            const { product } = action;
            return [...state, product]
        case "@cart/REMOVE":
            return JSON.parse(localStorage.getItem("cart"));
        default:
            return state;
    }
}
export default cartReducer;