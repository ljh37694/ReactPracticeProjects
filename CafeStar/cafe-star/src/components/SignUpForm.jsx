function SignUpForm(props) {
  const onSubmit = (e) => {
    e.preventDefault();

    const data = document.signUpForm;

    const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,12}$/;

    const userInfo = {
      id: data.id.value,
      email: data.email.value,
      password: data.password.value,
    }

    if (userInfo.id == '' || userInfo.email == '' || userInfo.password == '') {
      alert('아이디 또는 이메일 또는 비밀번호가 빈 칸입니다');
    }
    else if (!emailRegex.test(userInfo.email)) {
      alert('이메일 형식이 맞지 않습니다');
    }
    else if (!passwordRegex.test(userInfo.password)) {
      alert('비밀번호는 영어, 특수문자, 숫자 각 1개 이상 포함되어야 합니다');
    }
    else {
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