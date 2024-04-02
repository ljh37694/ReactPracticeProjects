import styled from "styled-components";
import { BoldLargeText } from "../components/Texts";

let MainContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: #1b1b1b;
    border: none;
    position: relative;
    overflow: hidden;
    color: #fff;
`;

function User(props) {
    const { userId } = props;

    return (
        <MainContainer>
            <BoldLargeText>{userId}</BoldLargeText>
        </MainContainer>
    );
}

export default User;
