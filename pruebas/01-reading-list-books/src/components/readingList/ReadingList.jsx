import { useContext } from "react"
import { dataContext } from "../../context/DataContext";

import { CardBook } from "./cardBook/CardBook";

// Styled
import { Container, ContainerCard } from "./ReadingList.styled";

export function ReadingList() {

    // Importamos los books de mi estado global
    const { books } = useContext(dataContext)


    return (
        <Container>
            <div>
                <h2>Reading List</h2>

            </div>

            <ContainerCard>
                {

                    books.map(b => {
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