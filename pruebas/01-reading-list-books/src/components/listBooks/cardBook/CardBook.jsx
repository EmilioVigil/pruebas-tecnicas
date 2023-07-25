import { useContext } from "react"
import { dataContext } from "../../../context/DataContext"


import { ContainerCard } from "./CardBook.styled"

export function CardBook({ b, title, cover }) {

    const { addBookReadingList } = useContext(dataContext)


    return (
        <ContainerCard>
            <h1>{title}</h1>
            <img src={cover} alt="front-page-book" />
            <button onClick={() => addBookReadingList(b)} >
                Agregar a la lista de lectura
            </button>
        </ContainerCard>
    )
} 