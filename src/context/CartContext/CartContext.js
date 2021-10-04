import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


    const addItem = (item, quantity) => {
        const newProduct = {
            ...item,
            quantity: quantity

        }

        if(!isInCart(item.id)) {
            setProducts([...products, newProduct])
        } else {
            const newProducts = products.map(prod => {
             

                if(prod.id === item.id) {
                    const newProduct = {
                        ...prod,
                        quantity: prod.quantity + quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setProducts(newProducts)
        }
        setTotalPrice (item.price * quantity + totalPrice )
    }


    const removeProduct = (id) => {
        const deletedProduct = products.find(prod => prod.id === id)
        const newProducts = products.filter(prod => prod.id !== id)
        setProducts(newProducts)
        setTotalPrice(totalPrice - deletedProduct.price * deletedProduct.quantity)
        


        
    }

    const clearCart = () => {
        setProducts([])
        setTotalPrice(0)
    }

    const isInCart = (id) => {
        return products.some(prod => prod.id === id)
    }

    const getTotal = () => {
        let total = 0
        products.forEach(prod => {
            total = total + prod.price * prod.quantity 
        })
        return total
    }

    const getQuantity = () => {
        let count = 0
        products.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }

    const getProduct = (id) => {
        return products.find(prod => prod.id === id)
    }

    return (
        <CartContext.Provider 
                value={{
                        products, 
                        addItem, 
                        removeProduct, 
                        clearCart, 
                        isInCart, 
                        getQuantity, 
                        getTotal,
                        getProduct,
                        totalPrice
                }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext