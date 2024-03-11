import styled from "styled-components";

function User(props) {
    const MainContainer = styled.div`
        width: 100%;
        height: 100%;
        margin: auto;
        background-color: #1b1b1b;
        border: none;
        position: relative;
        overflow: hidden;
        color: #fff;
    `;

    return (
        <MainContainer>
            <div>내 당근</div>
        </MainContainer>
    );
}

export default User;