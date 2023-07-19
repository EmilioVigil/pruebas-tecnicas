//  Components
import { ReadingList } from "../readingList/ReadingList"
import { NavBar } from "../navBar/NavBar"

// Style
import { ContainerHome } from "./Home.styled"

export function Home() {

    return (
        <ContainerHome>
            <NavBar />
            <ReadingList />

        </ContainerHome>
    )
}