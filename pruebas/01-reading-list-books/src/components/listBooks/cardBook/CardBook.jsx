import { useContext } from "react"
import { dataContext } from "../../../context/DataContext"


import { ContainerCard } from "./CardBook.styled"

export function CardBook({ b }) {

    const { books, setBooks, readingList, setReadingList } = useContext(dataContext)

    const handleClick = (b) => {
        setReadingList([...readingList, b])

        // Filtramos nuestra lista de books
        const filterBook = books.filter(bo => bo.book !== b)
        setBooks(filterBook)
    }

    return (
        <ContainerCard>
            <h1>{b.title}</h1>
            <img src={b.cover} alt="front-page-book" />
            <button onClick={() => handleClick(b)} >
                Agregar a la lista de lectura
            </button>
        </ContainerCard>
    )
} 