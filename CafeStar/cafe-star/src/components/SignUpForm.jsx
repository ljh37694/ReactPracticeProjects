function SignUpForm(props) {
  const onSubmit = (e) => {
    e.preventDefault();

    const data = document.signUpForm;

    const userInfo = {
      id: data.id.value,
      email: data.email.value,
      password: data.password.value,
    }

    console.log(userInfo);

    fetch('http://localhost:5000/sign-up', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
    .catch(e => console.log(e));
  }

  return (
    <section className="login-form-container">
      <header>
        <h4 className="title login-title">Cafe Star</h4>
      </header>
      
      <form className="login-form" name="signUpForm" onSubmit={onSubmit}>
        <input type="text" className="login-form-input" name="id" placeholder="아이디를 입력하세요" />
        <input type="text" className="login-form-input" name="email" placeholder="이메일을 입력하세요" />
        <input type="password" className="login-form-input" name="password" placeholder="비밀번호를 입력하세요" />

        <button type="submit" className="login-button">회원가입</button>
      </form>
    </section>
  );
}

export default SignUpForm;