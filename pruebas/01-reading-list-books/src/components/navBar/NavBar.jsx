import { useContext } from "react"
import { dataContext } from "../../context/DataContext"
// Style
import { ContainerNav } from "./NavBar.styled"

export function NavBar() {

    const { genre } = useContext(dataContext)

    return (
        <ContainerNav>
            <h1>Navbar</h1>
            <div>
                <h3>Explore Books</h3>

                <div>
                    <input type="text" />
                    <button>🔎</button>
                    <select>
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
    )
}