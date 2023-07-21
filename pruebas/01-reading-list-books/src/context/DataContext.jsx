import { createContext, useEffect, useState } from "react";


// Creamos y exportamos el contexto
export const dataContext = createContext()

export const DataProvider = ({ children }) => {

    const [books, setBooks] = useState([]);
    const [genre, setGenre] = useState([]);

    // Contadores
    const [counterGenre, setCounterGenre] = useState(0);
    const [booksAvailable, setBooksAvailable] = useState(0);

    useEffect(() => {
        fetch('books.json').then(response => response.json())
            .then(data => {
                setBooks(data.library)
                setBooksAvailable(data.library.length)
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
        <dataContext.Provider value={{ books, genre, counterGenre, setCounterGenre, booksAvailable }}  >
            {
                children
            }
        </dataContext.Provider>
    )



}