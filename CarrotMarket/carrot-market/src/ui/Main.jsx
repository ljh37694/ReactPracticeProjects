import HomePage from "../pages/HomePage";
import styled from "styled-components";

function Main(props) {
    const Container = styled.div`
        background-color: #1b1b1b;
        border: none;
        border-radius: 20px;
        padding: 40px;
        margin-top: 50px;
        width: 50vw;
        height: 80vh;
        margin: auto;
        margin-top: 10vh;
        min-width: 350px;
    `;

    return (
        <Container>
            <HomePage />
        </Container>
    );
}

export default Main;