import HomePage from "../pages/HomePage";
import styled from "styled-components";

function Main(props) {
    const Container = styled.div`
        background-color: #1b1b1b;
        border: none;
        border-radius: 20px;
        padding: 30px;
        margin-top: 50px;
        width: 50vw;
        height: 90vh;
        margin: auto;
        margin-top: 5vh;
        min-width: 350px;
    `;

    return (
        <Container>
            <HomePage />
        </Container>
    );
}

export default Main;