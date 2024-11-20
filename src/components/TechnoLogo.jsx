import PropTypes from "prop-types";
import styled from "styled-components";
import { devices } from "../helpers/Breakpoints";


export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    background-color: var(--first-bg-color);
    border: 2px solid var(--secondary-color);
    border-radius: 50px;
    @media ${devices.mobile} {
        width: 35px;
        height: 35px;
    }
`
export const IconLogo = styled.i`
    font-size: 20px;
    color: var(--first-font-color);
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