import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import * as React from 'react';
import {useCallback, useState} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.push('Details');
  }, [navigation]);

  return (
    <>
      <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
        <Pressable
          onPress={onClick}
          style={{
            paddingHorizontal: 40,
            paddingVertical: 20,
            backgroundColor: 'blue',
            opacity: 0.4,
          }}>
          <Text style={{color: 'white'}}>홈 화면</Text>
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableHighlight onPress={onClick}>
          <Text>홈 화면</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>Details Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈 화면'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>

      {showModal && (
        <Pressable
          onPress={() => setShowModal(false)}
          style={styles.modalBackground}>
          <View style={styles.modal}>
            <Text>Hello</Text>
            <View
              style={{
                position: 'relative',
                height: 50,
                backgroundColor: 'blue',
                opacity: 0.7,
                top: -10,
              }}></View>
            <Text>Hello2222</Text>
          </View>
        </Pressable>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: Dimensions.get('window').width - 40,
    height: 300,
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 20,
    shadowColor: 'red',
    shadowOpacity: 0.9,
    shadowRadius: 50,
  },
});

export default App;
