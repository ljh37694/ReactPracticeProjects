import styled from "styled-components";
import MainNav from "../ui/MainNav";
import Footer from "../ui/Footer";

function ChattingListPage(props) {
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
            <MainNav />
            <div>채팅</div>
        </MainContainer>
    );
}

export default ChattingListPage;