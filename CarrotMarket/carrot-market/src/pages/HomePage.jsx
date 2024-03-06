import MainNav from "../ui/MainNav";
import styled from "styled-components";

function HomePage(props) {
    const MainContainer = styled.div`
        min-width: 500px;
        width: 50%;
        height: 800px;
        margin: auto;
        position: relative;
        padding: 1px;
    `;

    return (
        <MainContainer>
            <MainNav />
        </MainContainer>
    );
}

export default HomePage;