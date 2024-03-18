import styled from "styled-components";
import { BoldLargeText } from "./Texts";
import { CARROT } from "./Color";

const StyledButton = styled.button`
    background-color: ${CARROT};
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    height: 3em;
    width: ${(props) => props.width || "100%"};
    border: none;
    margin-bottom: 10px;
`;

function CarrotButton(props) {
    const { text, width, onClick } = props;

    return (
        <StyledButton width={width} onClick={onClick}>
            <BoldLargeText>{text}</BoldLargeText>
        </StyledButton>
    );
}

export default CarrotButton;
