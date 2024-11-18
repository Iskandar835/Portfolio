import PropTypes from "prop-types";
import styled from "styled-components";
import { devices } from "../helpers/Breakpoints";


export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border: 2px solid #E9C2EC;
    border-radius: 50px;
    background-color: #FFFFFF;
    @media ${devices.mobile} {
        width: 35px;
        height: 35px;
    }
`
export const IconLogo = styled.i`
    font-size: 20px;
    color: #000000;
    @media ${devices.mobile} {
        font-size: 18px;
    }
`

function Logo ({ className }) {
    return (
        <LogoContainer>
            <IconLogo className={className}/>
        </LogoContainer>
    )
};

Logo.propTypes = {
    className: PropTypes.string
};

export default Logo;