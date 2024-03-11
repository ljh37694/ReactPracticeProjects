import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

let BtnContainer = styled.div`
    position: absolute;
    right: 6%;
    bottom: 1%;
    border-radius: 100px;
    color: #fff;
    background-color: orange;
    font-weight: bold;
    font-size: 24px;
    width: 2.3em;
    height: 2.3em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

let Btn = styled.button`
    border: none;
    background-color: inherit;
    color: #fff;
    border-radius: 100px;
`;

function WriteQuickBtn(props) {
    return (
        <BtnContainer>
            <Btn>
                <FontAwesomeIcon icon={faPlus} />
            </Btn>
        </BtnContainer>
    );
}

export default WriteQuickBtn;
