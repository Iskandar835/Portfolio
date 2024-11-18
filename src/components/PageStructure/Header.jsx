import styled from "styled-components";
import { devices } from "../../helpers/Breakpoints";

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
    @media ${devices.mobile} {
        justify-content: center;
        height: 130px;
    }
`
const Logo = styled.img`
    width: 80px;
    @media ${devices.mobile} {
        width: 90px;
    }
`
const Location = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    @media ${devices.mobile} {
        display: none;
    }
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