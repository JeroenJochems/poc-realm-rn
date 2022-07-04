import {useApp} from '@realm/react';
import { SafeAreaView, Button, Text, View } from 'react-native';

const LoginComponent = ({}) => {
  
  const app = useApp();

  const signInVisitor = async () => {
    const credentials = Realm.Credentials.emailPassword('jeroen@joche.ms', 'secret')
    console.log('login')
    await app.logIn(credentials);
  };

  const signInVisitor2 = async () => {
    const credentials = Realm.Credentials.emailPassword('jeroen+2@joche.ms', 'secret')
    console.log('login visitor 2')
    await app.logIn(credentials);
  };

  const signInAdmin = async () => {
    const credentials = Realm.Credentials.emailPassword('jeroen+admin@joche.ms', 'secret')
    console.log('login admin')
    await app.logIn(credentials);
  };

  return (
      <SafeAreaView>    
        <Button onPress={signInVisitor} title={'Login visitor 1'} />
        <Button onPress={signInVisitor2} title={'Login visitor 2'} />
        <Button onPress={signInAdmin} title={'Login POS'} />
      </SafeAreaView>
  )
}

export default LoginComponent