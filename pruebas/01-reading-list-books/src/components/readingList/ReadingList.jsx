import { useState, useContext } from 'react'
import { dataContext } from '../../context/DataContext'

// style
import Logo from '../../assets/readingList.svg'
import {
    ContainerReadingList, ButtonImg, DropDownList
} from './ReadingList.styled'

export function ReadingList() {

    // Context
    const { readingList, removeBookReadingList } = useContext(dataContext);


    const [showMenu, setShowMenu] = useState(false)
    const [showButton, setShowButton] = useState(true);

    const handleShowMenu = (e) => {
        e.preventDefault()
        setShowMenu(true)
        setShowButton(false)
    }

    const handleCloseMenu = (e) => {
        e.preventDefault();
        setShowMenu(false)
        setShowButton(true)
    }


    return (
        <ContainerReadingList>

            <div>
                <ButtonImg $showButton={showButton}  >
                    <img onClick={(e) => handleShowMenu(e)} src={Logo} alt="" />
                </ButtonImg>
                <span>
                    {
                        readingList.length
                    }
                </span>
            </div>

            <DropDownList $showMenu={showMenu}  >
                <button onClick={(e) => handleCloseMenu(e)} >❌</button>

                <h3>Reading List</h3>

                {
                    readingList.length ?
                        readingList.map(b => {
                            return (
                                <ul key={b.book.ISBN}>
                                    <li>{b.book.title}</li>
                                    <button onClick={() => removeBookReadingList(b)}>
                                        Quitar de la lista
                                    </button>
                                </ul>
                            )
                        })
                        :
                        <p>No hay libros en la lista de lectura</p>
                }

            </DropDownList>





        </ContainerReadingList>
    )
}