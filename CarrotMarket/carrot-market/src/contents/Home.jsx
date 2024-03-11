import styled from "styled-components";
import PostList from "../ui/PostList";

function Home(props) {
    const MainContainer = styled.div`
        width: 100%;
        height: 100%;
        margin: auto;
        background-color: #1b1b1b;
        border: none;
        overflow: hidden;
        color: #fff;
    `;

    return (
        <MainContainer>
            <PostList />
        </MainContainer>
    );
}

export default Home;
