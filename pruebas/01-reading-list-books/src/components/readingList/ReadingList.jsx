import { useContext } from "react"
import { dataContext } from "../../context/DataContext";


export function ReadingList() {

    // Importamos los books de mi estado global
    const { books } = useContext(dataContext)


    return (
        <>
            <h2>Reading List</h2>

            {

                books.map(b => {
                    return (
                        <div key={b.book.ISBN}>
                            <h2>{b.book.title}</h2>
                            <img src={b.book.cover} alt="img-pic-book" />
                        </div>
                    )
                })
            }

        </>

    )
}