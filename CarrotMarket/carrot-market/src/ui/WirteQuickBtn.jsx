import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function WriteQuickBtn(props) {
    const BtnContainer = styled.div`
        position: absolute;
        right: 3%;
        bottom: 1%;
        border-radius: 100px;
        color: #fff;
        background-color: orange;
        font-weight: bold;
        font-size: 24px;
        width: 2em;
        height: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const Btn = styled.button`
        border: none;
        background-color: inherit;
        color: #fff;
        border-radius: 100px;
    `;

    return (
        <BtnContainer>
            <Btn>
                <FontAwesomeIcon icon={faPlus} />
            </Btn>
        </BtnContainer>
    )
}

export default WriteQuickBtn;