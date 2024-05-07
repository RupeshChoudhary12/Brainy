export const getProducts = async () => {

    const response = await fetch(' https://child.onrender.com/api/sciencefiction')
    const products = await response.json()
    return products
}