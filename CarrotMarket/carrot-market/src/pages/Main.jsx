import styled from "styled-components";
import { Route, Routes, Outlet } from "react-router-dom";
import { useState } from "react";
import Home from "../contents/Home";
import Neighborhood from "../contents/Neighborhood";
import MyLocation from "../contents/MyLocation";
import ChattingList from "../contents/ChattingList";
import User from "../contents/User";
import Footer from "../ui/Footer";
import MainNav from "../ui/MainNav";
import WriteQuickBtn from "../ui/WirteQuickBtn";
import DetailNav from "../ui/DetailNav";
import DetailInfo from "../ui/DetailInfo";
import WritePostNav from "../ui/WritePostNav";
import WritePost from "../contents/WritePost";

// styled-components
let Container = styled.div`
    background-color: #1b1b1b;
    border: none;
    border-radius: 20px;
    padding: 30px;
    margin-top: 50px;
    width: 40vw;
    height: 100vh;
    margin: auto;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    font-family: "Nanum Gothic";
`;

let NavContainer = styled.div`
    width: 100%;
    height: 7%;
`;

let ContentsContainer = styled.main`
    width: 100%;
    height: 80%;
    position: relative;
`;

function Main(props) {
    // states
    let [option, setOption] = useState("home");
    let [footerMenu, setFooterMenu] = useState(0);

    return (
        <Container>
            {/* main page */}
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
                            <Footer
                                setOption={setOption}
                                selectMenu={footerMenu}
                                setSelectMenu={setFooterMenu}
                            />
                        </>
                    }
                />
                <Route
                    path="/main"
                    element={
                        <>
                            <NavContainer>
                                <MainNav option={option} />
                            </NavContainer>

                            <ContentsContainer>
                                <Outlet />
                                <WriteQuickBtn />
                            </ContentsContainer>
                            <Footer
                                setOption={setOption}
                                selectMenu={footerMenu}
                                setSelectMenu={setFooterMenu}
                            />
                        </>
                    }
                >
                    <Route path="home" element={<Home />} />
                    <Route path="neighborhood" element={<Neighborhood />} />
                    <Route path="my-location" element={<MyLocation />} />
                    <Route path="chatting-list" element={<ChattingList />} />
                    <Route path="my-page" element={<User />} />
                </Route>

                <Route
                    path="/detail"
                    element={
                        <>
                            <NavContainer>
                                <DetailNav />
                            </NavContainer>
                            <ContentsContainer>
                                <DetailInfo />
                            </ContentsContainer>
                        </>
                    }
                ></Route>

                <Route
                    path="write-post"
                    element={
                        <>
                            <NavContainer>
                                <WritePostNav />
                            </NavContainer>
                            <ContentsContainer>
                                <WritePost />
                            </ContentsContainer>
                        </>
                    }
                ></Route>
            </Routes>
        </Container>
    );
}

export default Main;
