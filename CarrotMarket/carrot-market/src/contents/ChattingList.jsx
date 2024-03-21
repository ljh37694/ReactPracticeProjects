import styled from "styled-components";
import Chatting from "../components/Chatting";

let MainContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: #1b1b1b;
    border: none;
    position: relative;
    overflow: hidden;
    color: #fff;
`;

function ChattingList(props) {
    return (
        <MainContainer>
            <Chatting />
        </MainContainer>
    );
}

export default ChattingList;
