import styled from "styled-components";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../ui/Home";
import NeighborhoodPage from "./NeighborhoodPage";
import MyLocationPage from "./MyLocationPage";
import ChattingListPage from "./ChattingListPage";
import MyPage from "./MyPage";
import Footer from "../ui/Footer";
import MainNav from "../ui/MainNav";
import WriteQuickBtn from "../ui/WirteQuickBtn";

function MainPage(props) {
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
        position: relative;
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
                                <Home />
                                <WriteQuickBtn />
                            </ContentsContainer>
                        </>
                    }
                />
                <Route path="/home" element={<Home />} />
                <Route path="/neighborhood" element={<NeighborhoodPage />} />
                <Route path="/my-location" element={<MyLocationPage />} />
                <Route path="/chatting-list" element={<ChattingListPage />} />
                <Route path="/my-page" element={<MyPage />} />
            </Routes>
            <Footer></Footer>
        </Container>
    );
}

export default MainPage;
