import styled from "styled-components";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";

let PostsContainer = styled.div`
    width: 100%;
    height: 100%;
    & * {
        text-decoration-line: none;
    }
`;

function PostList(props) {
    const { data } = props;
    const navigate = useNavigate();
    const onClickPost = () => navigate("/detail");

    return (
        <PostsContainer>
            {data.map((item, idx) => {
                return <Post onClick={() => {
                    navigate(`/detail/${idx}`);
                }} data={item} />;
            })}
        </PostsContainer>
    );
}

export default PostList;
