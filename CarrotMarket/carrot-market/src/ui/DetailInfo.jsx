import styled from "styled-components";

let ContentsContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: #1b1b1b;
    border: none;
    position: relative;
    overflow: hidden;
    color: #fff;
`;

let IamgeContainer = styled.img`
    width: 100%;
`;

let UserInfoContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
`;

function DetailInfo(props) {
    return (
        <ContentsContainer>
            <IamgeContainer src="https://blog.kakaocdn.net/dn/tWx11/btqDag5h7y3/6aY75vJNfOPMyNicZo53c0/img.png" />
            <UserInfoContainer>Hi</UserInfoContainer>
        </ContentsContainer>
    );
}

export default DetailInfo;
