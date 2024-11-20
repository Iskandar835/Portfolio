import styled from "styled-components";
import PropTypes from "prop-types";
import { devices } from "../helpers/Breakpoints";


const Content = styled.span`
    display: block;
    box-sizing: border-box;
    padding: 12px 24px;
    color: var(--first-font-color);
    background: var(--primary-color);
    border: 2px solid var(--secondary-bg-color);
    border-radius: 12px;
    transform: translateY(-0.2em);
    transition: transform 100ms ease;
    @media ${devices.tabs} {
        transform: translateY(-0.33em);
    }
`
const Container = styled.button`
    padding: 2px 0;
    font-family: var(--title-font-family);
    font-size: 17px;
    font-weight: 600;
    background: var(--secondary-color);
    border: none;
    border-radius: 12px;
    white-space: nowrap;
    cursor: pointer;
    @media ${devices.onlyComputeur} {
        &:hover {
            ${Content} {
                transform: translateY(-0.33em);
            }
        }
        &:active {
            ${Content} {
                transform: translateY(0);
            }
        }
    }
    @media ${devices.tabsAndMobile} {
        &:active {
            ${Content} {
                transform: translateY(0);
            }
        }
    }
    @media ${devices.mobile} {
        margin: 40px 0 0 0;
        font-size: 15px;
    }
` 
function HiderBtn ({ onClick, content }) {
    return (
        <Container onClick={onClick} content={content}>
            <Content>{content}</Content>
        </Container>
    )
};

HiderBtn.propTypes = {
    onClick: PropTypes.func,
    content: PropTypes.string
};

export default HiderBtn;