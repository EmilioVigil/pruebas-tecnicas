import { createContext, useEffect, useState } from "react";


// Creamos y exportamos el contexto
export const dataContext = createContext()

export const DataProvider = ({ children }) => {

    const [books, setBooks] = useState([]);
    const [genre, setGenre] = useState([]);

    // Contadores
    const [counterGenre, setCounterGenre] = useState(0);
    const [booksAvailable, setBooksAvailable] = useState(0);

    // ReadingList
    const [readingList, setReadingList] = useState([]);


    useEffect(() => {
        fetch('books.json').then(response => response.json())
            .then(data => {
                setBooks(data.library)
                setBooksAvailable(data.library.length)
                const uniqueGenres = data.library.reduce((acc, b) => {
                    if (!acc.includes(b.book.genre)) {
                        acc.push(b.book.genre);
                    }
                    return acc;
                }, []);
                setGenre(uniqueGenres)
            })
    }, [])

    // useEffect(() => {
    //     const uniqueGenres = books.reduce((acc, b) => {
    //         if (!acc.includes(b.book.genre)) {
    //             acc.push(b.book.genre);
    //         }
    //         return acc;
    //     }, []);
    //     setGenre(uniqueGenres)
    // }, [])

    // Funcion para agregar libros a mi readingList
    const addBookReadingList = (b) => {
        setReadingList([...readingList, b])

        // Modificar la lista de libros cuando agregamos a la lista de lectura
        const filterBooks = books.filter(el => el.book !== b.book)
        setBooks(filterBooks)
    }

    const removeBookReadingList = (b) => {
        const filterReadingList = readingList.filter(el => el.book !== b.book)
        setReadingList(filterReadingList)

        // Agregar libro a mi estado global de books
        setBooks([...books, b])
    }


    return (
        <dataContext.Provider value={{
            books,
            setBooks,
            genre,
            counterGenre,
            setCounterGenre,
            booksAvailable,
            readingList,
            setReadingList,
            addBookReadingList,
            removeBookReadingList
        }}
        >
            {
                children
            }
        </dataContext.Provider>
    )



}