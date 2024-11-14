import styled from "styled-components";


const HeaderTag = styled.header`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 35px;
    background-color: #FFFFFF;
    box-shadow: 0px 7px 15px #0000003b;
`
const Logo = styled.img`
    width: 80px;
`
const Location = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
`

function Header () {
    return (
        <HeaderTag>
            <Logo src="./src/assets/Logo2.png" alt="Logo du portfolio" />
            <Location><i className="fa-solid fa-location-dot"></i>Toulon, France</Location>
        </HeaderTag>
    )
};

export default Header; 