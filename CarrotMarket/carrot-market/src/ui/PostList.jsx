import styled from "styled-components";
import Post from "../components/Post";

let PostsContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none; /* 스크롤바 숨기기 */
    }
`;

function PostList(props) {
    return (
        <PostsContainer>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </PostsContainer>
    );
}

export default PostList;
