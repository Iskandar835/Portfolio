import styled from "styled-components";
import PropTypes from "prop-types";


const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    padding: 13px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    background-color: #E9C2EC;
    border: 4px solid #000000;
    border-radius: 10px;
    box-shadow: 4px 6px 0px black;
    cursor: pointer;
    transition: box-shadow 20ms, transform 250ms;
    &:active {
        transform: translate(2px, 2px);
        box-shadow: 2px 3px 0px black;
    }
`
function HiderBtn ({ onClick }) {
    return (
        <Container onClick={onClick}>
            Clique-ici
        </Container>
    )
};

HiderBtn.propTypes = {
    onClick: PropTypes.func
};

export default HiderBtn;