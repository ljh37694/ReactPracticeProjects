import styled from "styled-components";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";

let PostsContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none; /* 스크롤바 숨기기 */
    }

    & * {
        text-decoration-line: none;
    }
`;

function PostList(props) {
    const navigate = useNavigate();

    return (
        <PostsContainer>
            <Post onClick={() => navigate("/detail")} />
            <Post onClick={() => navigate("/detail")} />
            <Post onClick={() => navigate("/detail")} />
            <Post onClick={() => navigate("/detail")} />
            <Post onClick={() => navigate("/detail")} />
            <Post onClick={() => navigate("/detail")} />
            <Post onClick={() => navigate("/detail")} />
        </PostsContainer>
    );
}

export default PostList;
