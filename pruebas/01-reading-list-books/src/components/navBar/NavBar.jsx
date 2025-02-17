import { useContext, useState } from "react"
import { dataContext } from "../../context/DataContext"

// Components
import { ListBooks } from "../listBooks/ListBooks"

// Style
import { ContainerNav } from "./NavBar.styled"

export function NavBar() {

    const { genre } = useContext(dataContext)
    const [filterGenre, setFilterGenre] = useState('');

    const handleFilter = (e) => {
        setFilterGenre(e.target.value)
    }


    return (
        <>
            <ContainerNav>
                <h1>Navbar</h1>
                <div>
                    <h3>Explore Books</h3>

                    <div>
                        <input type="text" />
                        <button>🔎</button>
                        <select onChange={e => handleFilter(e)} >
                            <option value='all'>Todos</option>
                            {
                                genre.map(g => {
                                    return (
                                        <option key={g} value={g} >{g}</option>
                                    )
                                })
                            }
                        </select>

                        <input type="range" />

                    </div>

                </div>
            </ContainerNav >
            <ListBooks filterGenre={filterGenre} />
        </>
    )
}