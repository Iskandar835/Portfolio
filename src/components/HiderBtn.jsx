import styled from "styled-components";
import PropTypes from "prop-types";


const Content = styled.span`
    display: block;
    box-sizing: border-box;
    padding: 0.75em 1.5em;
    color: #000000;
    background: #f2f2f2;
    border: 2px solid #000000;
    border-radius: 0.75em;
    transform: translateY(-0.2em);
    transition: transform 100ms ease;
`
const Container = styled.button`
    padding: 2px 0;
    font-family: "Poppins", sans-serif;
    font-size: 17px;
    font-weight: 600;
    background: #E9C2EC;
    border: none;
    border-radius: 0.75em;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
        ${Content} {
            transform: translateY(-0.33em);
        }
    }
    &:active {
        ${Content}{
            transform: translateY(0);
        }
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