import styled from "styled-components";

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
    return (
        <MainContainer>
            <div>내 당근</div>
        </MainContainer>
    );
}

export default User;
