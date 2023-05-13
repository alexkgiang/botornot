import { SafeAreaView, View, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db, auth } from '../../firebase/config';
import { collection, query, where, orderBy, limit } from 'firebase/firestore';

function SingleGame() {
  const messageCollection = collection(db, 'messages');
  const q = query(messageCollection, orderBy('createdAt'), limit(25));

  const [messages] = useCollectionData(q, {idField: 'id'});


  return (
    <SafeAreaView>
      <Text>Game</Text>
      <View>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </View>
    </SafeAreaView>
  );

}

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sentMessage' : 'receivedMessage';

    return (
      <Text>{text}</Text>
    )
}

export default SingleGame;