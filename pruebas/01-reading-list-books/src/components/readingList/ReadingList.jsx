import { useContext, useEffect, useState } from "react"
import { dataContext } from "../../context/DataContext";

import { CardBook } from "./cardBook/CardBook";

// Styled
import { Container, ContainerCard } from "./ReadingList.styled";

export function ReadingList({ filterGenre }) {

    // Importamos los books de mi estado global
    const { books, counterGenre, setCounterGenre, booksAvailable } = useContext(dataContext)

    // Hago una copia del estado global, asi puedo filtrar directamente de mi estado local.
    const [booksFilter, setBooksFilter] = useState(books)

    // Filter genre
    useEffect(() => {
        const genreFilter = filterGenre === 'all' ? books : books.filter(b => b.book.genre.includes(filterGenre))

        setCounterGenre(genreFilter.length)
        setBooksFilter(genreFilter)
    }, [filterGenre])

    return (
        <Container>
            <div>
                <h2>Reading List</h2>

            </div>
            <h3>
                Libros disponibles: {booksAvailable}
            </h3>
            <h4>
                Contador de libros por genero : {counterGenre}
            </h4>
            <ContainerCard>
                {

                    booksFilter.map(b => {
                        return (
                            <div key={b.book.ISBN}>
                                <CardBook title={b.book.title} cover={b.book.cover} />
                            </div>
                        )
                    })
                }

            </ContainerCard>

        </Container>

    )
}