import styled from "styled-components";
import Post from "../components/Post";

function PostList(props) {
    const PostsContainer = styled.div`
        width: 100%;
        position: absolute;
        top: 100px;
    `;

    return (
        <PostsContainer>
            <Post />
        </PostsContainer>
    );
}

export default PostList;