import styled from "styled-components";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NeighborhoodPage from "../pages/NeighborhoodPage";
import MyLocationPage from "../pages/MyLocationPage";
import ChattingListPage from "../pages/ChattingListPage";
import MyPage from "../pages/MyPage";
import Footer from "./Footer";
import MainNav from "./MainNav";

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
        display: flex;
        flex-direction: column;
    `;

    const NavContainer = styled.div`
        width: 100%;
        height: 10%;
    `;

    const ContentsContainer = styled.main`
        width: 100%;
        height: 80%;
    `;

    return (
        <Container>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavContainer>
                                <MainNav />
                            </NavContainer>
                            <ContentsContainer>
                                <HomePage />
                            </ContentsContainer>
                        </>
                    }
                />
                <Route path="/home" element={<HomePage />} />
                <Route path="/neighborhood" element={<NeighborhoodPage />} />
                <Route path="/my-location" element={<MyLocationPage />} />
                <Route path="/chatting-list" element={<ChattingListPage />} />
                <Route path="/my-page" element={<MyPage />} />
            </Routes>
            <Footer></Footer>
        </Container>
    );
}

export default Main;
