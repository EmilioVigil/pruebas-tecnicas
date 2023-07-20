import { createContext, useEffect, useState } from "react";


// Creamos y exportamos el contexto
export const dataContext = createContext()

export const DataProvider = ({ children }) => {

    const [books, setBooks] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        fetch('books.json').then(response => response.json())
            .then(data => {
                setBooks(data.library)
            })
    }, [])

    useEffect(() => {
        const uniqueGenres = books.reduce((acc, b) => {
            if (!acc.includes(b.book.genre)) {
                acc.push(b.book.genre);
            }
            return acc;
        }, []);
        setGenre(uniqueGenres)
    }, [books])



    return (
        <dataContext.Provider value={{ books, setBooks, genre }}  >
            {
                children
            }
        </dataContext.Provider>
    )



}