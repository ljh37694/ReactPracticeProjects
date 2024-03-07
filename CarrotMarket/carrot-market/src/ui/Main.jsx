import HomePage from "../pages/HomePage";
import styled from "styled-components";

function Main(props) {
    const Container = styled.div`
        background-color: #1b1b1b;
        border: none;
        border-radius: 20px;
        padding: 10px;
        margin-top: 50px;
        width: 50%;
        height: 600px;
        margin: auto;
        margin-top: 50px;
        min-width: 350px;
    `;

    return (
        <Container>
            <HomePage />
        </Container>
    );
}

export default Main;