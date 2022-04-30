export const addToCart = product => {
    console.log(product)
    return { type: "@cart/ADD", product }
}