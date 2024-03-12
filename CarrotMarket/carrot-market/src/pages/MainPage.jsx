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

// styled-components
let Container = styled.div`
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

let NavContainer = styled.div`
    width: 100%;
    height: 10%;
`;

let ContentsContainer = styled.main`
    width: 100%;
    height: 80%;
    position: relative;
`;

function MainPage(props) {
    // states
    let [option, setOption] = useState("home");
    let [footerMenu, setFooterMenu] = useState(0);

    return (
        <Container>
            <NavContainer>
                <MainNav option={option} />
            </NavContainer>

            <ContentsContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/neighborhood" element={<Neighborhood />} />
                    <Route path="/my-location" element={<MyLocation />} />
                    <Route path="/chatting-list" element={<ChattingList />} />
                    <Route path="/my-page" element={<User />} />
                </Routes>
                <WriteQuickBtn />
            </ContentsContainer>

            <Footer
                setOption={setOption}
                selectMenu={footerMenu}
                setSelectMenu={setFooterMenu}
            />
        </Container>
    );
}

export default MainPage;
