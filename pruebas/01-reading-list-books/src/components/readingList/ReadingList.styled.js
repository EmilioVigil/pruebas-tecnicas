import styled from 'styled-components'


const ContainerReadingList = styled.div`
`

const ButtonImg = styled.button`
    display: ${props => (props.$showButton ? 'block' : 'none')};
    color : transparent;
    background-color: transparent;
    border : none;
    margin : 1rem;
    cursor : pointer;
    
    img{
        width: 5rem;
    }
`

const DropDownList = styled.div`
    display: ${props => (props.$showMenu ? 'block' : 'none')};
    background-color : black;
    color : white;
    height: 40rem;
    width : 20rem

`



export {
    ContainerReadingList,
    ButtonImg,
    DropDownList
}