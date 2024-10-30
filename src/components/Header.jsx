import styled from "styled-components";


const HeaderTag = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.img`
    width: 300px;
    margin: 25px 0 25px;
`

function Header () {
    return (
        <HeaderTag>
            <Logo src="./src/assets/LOGO.png" alt="Logo of the portfolio" />
        </HeaderTag>
    )
};

export default Header; 