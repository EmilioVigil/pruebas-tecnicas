import { useContext, useEffect, useState } from "react"
import { dataContext } from "../../context/DataContext";

// Components
import { CardBook } from "./cardBook/CardBook";
import { ReadingList } from "../readingList/ReadingList";

// Styled
import { Container, ContainerCard, ContainerReadingList } from "./listBooks.styled";

export function ListBooks({ filterGenre }) {

    // Importamos los books de mi estado global
    const { books, counterGenre, setCounterGenre, booksAvailable } = useContext(dataContext)

    // Hago una copia del estado global, asi puedo filtrar directamente de mi estado local.
    const [booksFilter, setBooksFilter] = useState(books)

    // Filter genre
    useEffect(() => {
        const genreFilter = filterGenre === 'all' ? books : books.filter(b => b.book.genre.includes(filterGenre))

        setCounterGenre(genreFilter.length)
        setBooksFilter(genreFilter)
    }, [filterGenre, books])

    return (
        <Container>
            <div>
                <h2>List Books</h2>

            </div>
            <h3>
                Libros disponibles: {books.length}
            </h3>
            <h4>
                Contador de libros por genero : {counterGenre}
            </h4>
            <ContainerCard>
                {

                    booksFilter.map(b => {
                        return (
                            <div key={b.book.ISBN}>
                                <CardBook
                                    title={b.book.title}
                                    cover={b.book.cover}
                                    b={b}
                                />
                            </div>
                        )
                    })
                }

            </ContainerCard>
            <ContainerReadingList>
                <ReadingList />
            </ContainerReadingList>
        </Container>

    )
}