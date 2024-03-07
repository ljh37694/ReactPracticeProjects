import MainNav from "../ui/MainNav";
import styled from "styled-components";

function HomePage(props) {
    const MainContainer = styled.div`
        width: 100%;
        margin: auto;
        border-radius: 20px;
        background-color: #1b1b1b;
        border: none;
    `;

    return (
        <MainContainer>
            <MainNav />
        </MainContainer>
    );
}

export default HomePage;