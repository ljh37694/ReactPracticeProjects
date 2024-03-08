import MainNav from "../ui/MainNav";
import styled from "styled-components";
import PostList from "../ui/PostList";
import WriteQuickBtn from "../ui/WirteQuickBtn";
import Footer from "../ui/Footer";

function HomePage(props) {
    const MainContainer = styled.div`
        width: 100%;
        height: 100%;
        margin: auto;
        border-radius: 20px;
        background-color: #1b1b1b;
        border: none;
        position: relative;
        overflow: hidden;
    `;

    return (
        <MainContainer>
            <MainNav />
            <PostList />
            <WriteQuickBtn />
            <Footer></Footer>
        </MainContainer>
    );
}

export default HomePage;
