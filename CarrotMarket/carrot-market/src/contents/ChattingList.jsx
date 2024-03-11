import styled from "styled-components";

function ChattingList(props) {
    const MainContainer = styled.div`
        width: 100%;
        height: 100%;
        margin: auto;
        background-color: #1b1b1b;
        border: none;
        position: relative;
        overflow: hidden;
        color: #fff;
    `;

    return (
        <MainContainer>
            <div>채팅</div>
        </MainContainer>
    );
}

export default ChattingList;