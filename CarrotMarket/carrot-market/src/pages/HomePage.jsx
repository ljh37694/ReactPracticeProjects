import MainNav from "../ui/MainNav";
import styled from "styled-components";
import PostList from "../ui/PostList";

function HomePage(props) {
    const MainContainer = styled.div`
        width: 100%;
        height: 100%;
        margin: auto;
        border-radius: 20px;
        background-color: #1b1b1b;
        border: none;
        position: relative;
    `;

    return (
        <MainContainer>
            <MainNav />
            <PostList />
        </MainContainer>
    );
}

export default HomePage;