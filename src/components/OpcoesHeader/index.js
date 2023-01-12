import styled from 'styled-components';

const Opcao = styled.li`
    text-transform: uppercase;
    color: var(--cor1);
    &:hover{
      font-weight: 600;
      cursor: pointer;  
    }
`

const Opcoes = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 35%;
`

const textOpcoes = [
    'Categoria', 
    'Favoritos', 
    'Minha estante'
  ]

function OpcoesHeader(){
    return(
        <Opcoes>
            {textOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ) )}
        </Opcoes>
    )
}
export default OpcoesHeader;