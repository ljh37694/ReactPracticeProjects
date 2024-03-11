import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../contents/Home";
import Neighborhood from "../contents/Neighborhood";
import MyLocation from "../contents/MyLocation";
import ChattingList from "../contents/ChattingList";
import User from "../contents/User";
import Footer from "../ui/Footer";
import MainNav from "../ui/MainNav";
import WriteQuickBtn from "../ui/WirteQuickBtn";

function MainPage(props) {
    // states
    let [option, setOption] = useState(0);
    let [selectMenu, setSelectMenu] = useState(0);

    // styled-components
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
        font-family: "Nanum Gothic";
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
                                <MainNav option={option} />
                            </NavContainer>
                            <ContentsContainer>
                                <Home />
                                <WriteQuickBtn />
                            </ContentsContainer>
                        </>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <>
                            <NavContainer>
                                <MainNav option={option} />
                            </NavContainer>
                            <ContentsContainer>
                                <Home />
                                <WriteQuickBtn />
                            </ContentsContainer>
                        </>
                    }
                />
                <Route
                    path="/neighborhood"
                    element={
                        <>
                            <NavContainer>
                                <MainNav option={option} />
                            </NavContainer>
                            <ContentsContainer>
                                <Neighborhood />
                                <WriteQuickBtn />
                            </ContentsContainer>
                        </>
                    }
                />
                <Route
                    path="/my-location"
                    element={
                        <>
                            <NavContainer>
                                <MainNav option={option} />
                            </NavContainer>
                            <ContentsContainer>
                                <MyLocation />
                                <WriteQuickBtn />
                            </ContentsContainer>
                        </>
                    }
                />
                <Route
                    path="/chatting-list"
                    element={
                        <>
                            <NavContainer>
                                <MainNav option={option} />
                            </NavContainer>
                            <ContentsContainer>
                                <ChattingList />
                                <WriteQuickBtn />
                            </ContentsContainer>
                        </>
                    }
                />
                <Route
                    path="/my-page"
                    element={
                        <>
                            <NavContainer>
                                <MainNav option={option} />
                            </NavContainer>
                            <ContentsContainer>
                                <User />
                                <WriteQuickBtn />
                            </ContentsContainer>
                        </>
                    }
                />
            </Routes>

            <Footer
                setOption={setOption}
                selectMenu={selectMenu}
                setSelectMenu={setSelectMenu}
            ></Footer>
        </Container>
    );
}

export default MainPage;
