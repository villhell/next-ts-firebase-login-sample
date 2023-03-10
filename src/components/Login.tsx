import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { auth } from '../utils/firebase';
import useRouter from 'next/router';
const Login = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((result) => {
        useRouter.push('/');
      })
      .catch((err) => {
        alert('ログインできませんでした！');
      });
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザ登録は<Link href={'/signup'}>こちら</Link>から
        </div>
      </form>
    </div>
  );
};

export default Login;
