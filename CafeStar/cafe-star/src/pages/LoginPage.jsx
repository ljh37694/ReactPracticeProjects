function LoginPage(props) {
  return (
    <main id="login-page">
      <section className="login-form-container">
        <header>
          <h4 className="title login-title">Cafe Star</h4>
        </header>
        <form className="login-form">
          <input className="login-form-input" placeholder="아이디"/>
          <input className="login-form-input" placeholder="비밀번호" />
          <button type="submit" className="login-button">로그인</button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;