import styled from "styled-components";
import ChattingRoom from "../components/ChattingRoom";

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

function ChattingRoomList(props) {

    return (
        <MainContainer>
            <ChattingRoom />
            <ChattingRoom />
            <ChattingRoom />
            <ChattingRoom />
        </MainContainer>
    );
}

export default ChattingRoomList;
