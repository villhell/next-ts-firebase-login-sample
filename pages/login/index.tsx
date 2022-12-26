import { AuthProvider } from '../../src/context/AuthContext';
import Login from '../../src/components/Login';
export default function LoginPage() {
  return (
    <>
      <AuthProvider>
        <div style={{ margin: '2rem' }}>
          <Login />
        </div>
      </AuthProvider>
    </>
  );
}
