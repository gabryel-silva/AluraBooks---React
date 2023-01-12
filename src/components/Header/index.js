import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--cor1);
    justify-content: space-evenly;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;