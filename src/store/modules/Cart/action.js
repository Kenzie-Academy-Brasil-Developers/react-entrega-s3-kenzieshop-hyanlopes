export const addToCart = list => {
    return { type: "@cart/ADD", list }
}
export const removeToCart = product => {
    return { type: "@cart/REMOVE", product }
}