import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const StyledLinked = styled(Link)`
    padding-left: 57px;
    font-size: 24px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

const KasaLogo = styled.img`
    width: 210px;
    height: 68px;
`

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 100px;
    background-color: #E5E5E5;
`


function Header() {
    return (
        <StyledHeader>
            <KasaLogo src={logo} alt="logo de kasa" />
            <nav>
                <StyledLinked to="/">Accueil</StyledLinked>
                <StyledLinked to="/A-propos">A-propos</StyledLinked>
            </nav>
        </StyledHeader>
    )
}

export default Header