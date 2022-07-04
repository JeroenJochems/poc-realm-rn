import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Session from './components/Session';
import Context from './context/RealmContext';
import { AppProvider, useApp, UserProvider, useUser } from '@realm/react';
import LoginComponent from './components/LoginComponent';
import LoadingSpinner from './components/LoadingSpinner';
import OrderManagement from './components/OrderManagement';

const {RealmProvider} = Context;

export default function App() {

  return (
    <AppProvider id={'pitstopapptest-nshoc'}>
      <UserProvider fallback={LoginComponent}>
        <SafeAreaView>
          <RealmProvider sync={{ flexible: true, initialSubscriptions: {
                  update: (subs, realm) => {
                    subs.add(
                      realm.objects('Order')
                    );
                  }
                } }} fallback={<LoadingSpinner />}>
            <View>
              <StatusBar style="auto" />
              <Session />
              <OrderManagement />
            </View>
          </RealmProvider>
          </SafeAreaView>
      </UserProvider>
    </AppProvider>
  );
}
