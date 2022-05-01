export const addToCart = product => {
    return { type: "@cart/ADD", product }
}
export const removeToCart = product => {
    return { type: "@cart/REMOVE", product }
}