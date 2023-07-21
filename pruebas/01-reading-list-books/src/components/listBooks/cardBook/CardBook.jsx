
import { ContainerCard } from "./CardBook.styled"

export function CardBook({ title, cover }) {
    return (
        <ContainerCard>
            <h1>{title}</h1>
            <img src={cover} alt="front-page-book" />
        </ContainerCard>
    )
} 