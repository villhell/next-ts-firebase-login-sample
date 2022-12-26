import { createUserWithEmailAndPassword, User } from 'firebase/auth';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { auth } from '../utils/firebase';
import useRouter from 'next/router';
const SignUp = () => {
  const { user } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value, password.value);
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((result) => {
        alert('登録完了しました。');
        useRouter.push('/top');
      })
      .catch((err) => {
        alert('登録に失敗しました。' + err);
      });
  };
  const handleChangeEmail = (event: any) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.currentTarget.value);
  };
  return (
    <div>
      <h1>ユーザ登録</h1>
      {user && user.email}
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
