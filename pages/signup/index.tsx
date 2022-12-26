import { AuthProvider } from '../../src/context/AuthContext';
import Login from '../../src/components/Login';
import SignUp from '../../src/components/Signup';
export default function SignupPage() {
  return (
    <>
      <AuthProvider>
        <div style={{ margin: '2rem' }}>
          <SignUp />
        </div>
      </AuthProvider>
    </>
  );
}
