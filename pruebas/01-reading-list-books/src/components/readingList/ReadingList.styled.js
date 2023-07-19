import styled from 'styled-components';

const Container = styled.div`
    background-color: #F2E4CF;
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
`

const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

`


export {
    Container,
    ContainerCard
}