import styled from "styled-components";
import { CARROT } from "../components/Color";
import { BoldLargeText } from "../components/Texts";

const SubmitButton = styled.button`
    background-color: ${CARROT};
    border-radius: 5px;
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 20px;
`;

function WritePostFooter(props) {
    return (
        <SubmitButton type="submit" form="write-form">
            <BoldLargeText>작성 완료</BoldLargeText>
        </SubmitButton>
    );
}

export default WritePostFooter;
