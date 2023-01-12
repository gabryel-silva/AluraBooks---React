import Perfil from '../../imagens/perfil.svg';
import Sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
    margin: 0 1rem;
    cursor: pointer;
`

const Icones = styled.ul`
    list-style: none;
    padding: 0 .5rem;
    display: flex;
    flex-direction: row;
`

const icones = [
    Perfil,
    Sacola
  ]

function IconesHeader(){
    return(
        <Icones>
            {icones.map((icone) => (
                <Icone><img src={icone}></img></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader;