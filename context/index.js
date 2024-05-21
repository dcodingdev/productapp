
import { createContext, useEffect, useState } from "react";


// const Context = createContext(null);
export const Context = createContext(null);


const ProductContext = ({ children }) => {

    const [products, setProducts] = useState([]);

    const [loading, setloading] = useState(false)



    useEffect(() => {
        setloading(true)

        async function getProductsFromApi() {
            const apires = await fetch('https://dummyjson.com/products');
            const finalresult = await apires.json()
            if (finalresult){
                // setTimeout(()=>{
                //     setloading(false);

                // }, 2000)

                setProducts(finalresult.products)
            }
        }
        getProductsFromApi()
    }, [])


    return (
        <Context.Provider value ={{products,loading}}>
            {children}
        </Context.Provider>

    )
}

export default ProductContext;