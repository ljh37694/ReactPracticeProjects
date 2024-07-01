function LoginPage(props) {
  const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&scope=account_email,profile_nickname,profile_image,openid&redirect_uri=${process.env.REACT_APP_SERVER_URL}`;

  return (
    <main id="login-page">
      <section className="login-form-container">
        <header>
          <h4 className="title login-title">Cafe Star</h4>
        </header>
        <form className="login-form" name="loginForm" onSubmit={(e) => {
          e.preventDefault();

          const id = document.loginForm.id.value;
          const pw = document.loginForm.pw.value;

          if (id === '' || pw === '') {
            alert("아이디 또는 비밀번호가 빈 칸입니다.");
          } else {
            console.log(id, pw);

            fetch(process.env.REACT_APP_SERVER_URL + "/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id,
                pw,
              })
            })
            .catch(e => console.log(e));
          }
        }}>
          <input type="text" className="login-form-input" name="id" placeholder="아이디"/>
          <input type="password" className="login-form-input" name="pw" placeholder="비밀번호" autoComplete="off" />
          <button type="submit" className="login-button">로그인</button>

          <a href={url} className="kakao-login-button">
            <label></label>
          </a>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;