import styled from "styled-components";
import { Route, Routes, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Home from "../contents/Home";
import Neighborhood from "../contents/Neighborhood";
import MyLocation from "../contents/MyLocation";
import ChattingRoomList from "../contents/ChattingRoomList";
import User from "../contents/User";
import MainFooter from "../ui/MainFooter";
import MainNav from "../ui/MainNav";
import WriteQuickBtn from "../ui/WirteQuickBtn";
import DetailNav from "../ui/DetailNav";
import DetailInfo from "../contents/DetailInfo";
import WritePostNav from "../ui/WritePostNav";
import WritePost from "../contents/WritePost";
import postData from "../postData";
import DetailFooter from "../ui/DetailFooter";
import WritePostFooter from "../ui/WritePostFooter";
import axios from "axios";
import Start from "../contents/Start";
import StartFooter from "../ui/StartFooter";
import Login from "../contents/Login";
import LoginFooter from "../ui/LoginFooter";
import LoginNav from "../ui/LoginNav";
import SignUp from "../contents/SignUp";
import SignUpFooter from "../ui/SignUpFooter";
import ProtectedRoute from "../contents/ProtectedRoute";
import Setting from "../contents/Setting";
import Chatting from "../components/Chatting";
import ChattingFooter from "../ui/ChattingFooter";

// styled-components
let Container = styled.div`
    background-color: #1b1b1b;
    border: none;
    border-radius: 20px;
    padding: 1px 20px;
    width: 40vw;
    height: 100vh;
    margin: auto;
    min-width: 400px;
    font-family: "Nanum Gothic";
    box-sizing: border-box;
    position: relative;
`;

let NavContainer = styled.div`
    width: 100%;
    height: 10%;
    padding: 3px;
`;

let ContentsContainer = styled.main`
    width: 100%;
    height: 80%;
    overflow-y: scroll;
    padding: 3px;

    &::-webkit-scrollbar {
        display: none; /* 스크롤바 숨기기 */
    }
`;

const FooterContainer = styled.footer`
    width: 100%;
    height: 10%;
    padding: 3px;
`;

function Main(props) {
    // states
    let [option, setOption] = useState("home");
    let [footerMenu, setFooterMenu] = useState(0);
    let [data, setData] = useState(postData);
    let [userId, setUserId] = useState("");
    let [password, setPassword] = useState("");
    let [nickname, setNickname] = useState("");
    let [chatList, setChatList] = useState([]);
    let [chattingRoomList, setChattingRoomList] = useState([
        {
            userId: "asdf",
            msg: "진짜 왜 안 됨?",
            roomId: "6607a621a36d4d0170bd788c",
        },
    ]);

    useEffect(() => {
        console.log(localStorage.getItem("token"));
        axios
            .get("http://localhost:1234/post-data")
            .then((res) => {
                setData(JSON.parse(res.data));
            })
            .catch((e) => console.log(e));

        axios
            .get("http://localhost:1234/user-data", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((res) => {
                setUserId(res.data.id);
            })
            .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:1234/chatting-room-list?userId=" + userId)
            .then((res) => {
                setChattingRoomList(res.data);
            });
    }, [userId]);

    return (
        <Container>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavContainer />
                            <ContentsContainer>
                                <Start />
                            </ContentsContainer>
                            <FooterContainer>
                                <StartFooter />
                            </FooterContainer>
                        </>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <>
                            <NavContainer>
                                <LoginNav />
                            </NavContainer>

                            <ContentsContainer>
                                <Login
                                    userId={userId}
                                    setUserId={setUserId}
                                    password={password}
                                    setPassword={setPassword}
                                    nickname={nickname}
                                    setNickname={setNickname}
                                />
                            </ContentsContainer>

                            <FooterContainer>
                                <LoginFooter />
                            </FooterContainer>
                        </>
                    }
                />
                <Route
                    path="/sign-up"
                    element={
                        <>
                            <NavContainer>
                                <LoginNav />
                            </NavContainer>
                            <ContentsContainer>
                                <SignUp
                                    userId={userId}
                                    setUserId={setUserId}
                                    password={password}
                                    setPassword={setPassword}
                                />
                            </ContentsContainer>
                            <FooterContainer>
                                <SignUpFooter />
                            </FooterContainer>
                        </>
                    }
                />

                {/* main page */}
                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/main"
                        element={
                            <>
                                <NavContainer>
                                    <MainNav option={option} />
                                </NavContainer>

                                <ContentsContainer>
                                    <Outlet />
                                </ContentsContainer>
                                <FooterContainer>
                                    <MainFooter
                                        setOption={setOption}
                                        selectMenu={footerMenu}
                                        setSelectMenu={setFooterMenu}
                                    />
                                </FooterContainer>
                            </>
                        }
                    >
                        <Route
                            path="home"
                            element={
                                <>
                                    <Home data={data} setData={setData} />
                                    <WriteQuickBtn />
                                </>
                            }
                        />
                        <Route path="neighborhood" element={<Neighborhood />} />
                        <Route path="my-location" element={<MyLocation />} />
                        <Route
                            path="chatting-list"
                            element={
                                <ChattingRoomList
                                    userId={userId}
                                    chattingRoomList={chattingRoomList}
                                />
                            }
                        />
                        <Route path="my-page" element={<User userId={userId} />} />
                        <Route path="setting" element={<Setting />} />
                    </Route>

                    <Route
                        path="/detail/:idx"
                        element={
                            <>
                                <NavContainer>
                                    <DetailNav />
                                </NavContainer>
                                <ContentsContainer>
                                    <DetailInfo data={data} />
                                </ContentsContainer>
                                <FooterContainer>
                                    <DetailFooter userId={userId} data={data} />
                                </FooterContainer>
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
                                    <WritePost
                                        data={data}
                                        setData={setData}
                                        userId={userId}
                                    />
                                </ContentsContainer>
                                <FooterContainer>
                                    <WritePostFooter />
                                </FooterContainer>
                            </>
                        }
                    />
                    <Route
                        path="/chat"
                        element={
                            <>
                                <NavContainer>
                                    <DetailNav />
                                </NavContainer>
                                <ContentsContainer>
                                    <Chatting
                                        chatList={chatList}
                                        setChatList={setChatList}
                                        userId={userId}
                                    />
                                </ContentsContainer>
                                <FooterContainer>
                                    <ChattingFooter
                                        chatList={chatList}
                                        setChatList={setChatList}
                                        userId={userId}
                                    />
                                </FooterContainer>
                            </>
                        }
                    />
                </Route>
            </Routes>
        </Container>
    );
}

export default Main;
