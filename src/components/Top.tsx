import { auth } from '../utils/firebase';
import useRouter from 'next/router';
import { useAuthContext } from '../context/AuthContext';
import { useEffect } from 'react';
const Top = () => {
  const handleLogout = () => {
    auth.signOut();
    useRouter.push('/login');
  };

  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) useRouter.replace('/login'); // ここでリダイレクト
  }, [user]);

  if (user) {
    return (
      <div>
        <h1>ホームページ</h1>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  } else {
    return null;
  }
};

export default Top;
