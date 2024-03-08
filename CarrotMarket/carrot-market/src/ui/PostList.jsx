import styled from "styled-components";
import Post from "../components/Post";

function PostList(props) {
    const PostsContainer = styled.div`
        width: 100%;
        height: 80%;
        position: absolute;
        top: 100px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none; /* 스크롤바 숨기기 */
        }
    `;

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