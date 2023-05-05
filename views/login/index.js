import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Login = () => {
  const [user] = useAuthState(auth)

  return (
    <View>
      <header>

      </header>
      <section>
        { user ? <ChatRoom /> : <SignIn />}
      </section>
    </View>
  );
};

function SignIn() {

};

function ChatRoom() {
  
}

export default Login;