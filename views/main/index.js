import Login from "../login";
import ChatRoom from "../chatroom"
import { SafeAreaView } from 'react-native';
import {auth} from "../../firebase/config"
import {useAuthState} from "react-firebase-hooks/auth"

export default function Main() {
  const user = useAuthState(auth)
  return (
    <SafeAreaView>
      {!user[0] ? <Login /> : <ChatRoom />}
    </SafeAreaView>
  )
}