import { createContext, useEffect, useState } from "react";


// Creamos y exportamos el contexto
export const dataContext = createContext()

export const DataProvider = ({ children }) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json').then(response => response.json())
            .then(data => {
                setBooks(data.library)
            })
    }, [])


    return (
        <dataContext.Provider value={{ books }}  >
            {
                children
            }
        </dataContext.Provider>
    )



}