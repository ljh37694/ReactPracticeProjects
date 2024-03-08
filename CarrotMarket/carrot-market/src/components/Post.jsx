import styled from "styled-components";

function Post(props) {
    let { posts } = props;

    const PostContainer = styled.div`
        display: flex;
        color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #6e6e6e;
        margin-bottom: 20px;
    `;

    const ContentsContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 20px;
    `;

    const PostImage = styled.img`
        width: 8em;
        height: 8em;  
    `;

    const PostTitle = styled.h3`
        font-size: 20px;
    `;

    const PostDetail = styled.p`
        font-size: 14px;
        color: #6e6e6e;
    `;

    const PostPrice = styled.p`
        font-size: 20px;
        font-weight: bold;
    `;

    return (
        <PostContainer>
            <PostImage src="https://blog.kakaocdn.net/dn/tWx11/btqDag5h7y3/6aY75vJNfOPMyNicZo53c0/img.png">
            </PostImage>
            <ContentsContainer>
                <PostTitle>품절 임박! 닌텐도 스위치 팝니다</PostTitle>
                <PostDetail>송정동 · 3시간 전</PostDetail>
                <PostPrice>230,000원</PostPrice>
            </ContentsContainer>
        </PostContainer>
    );
}

export default Post;