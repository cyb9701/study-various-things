import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useRef, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {RootStackParamList} from '../../App';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SignIn(navigation: SignInScreenProps) {
  const [email, setEmail] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const onChangeEmail = useCallback((text: string) => {
    setEmail(text.trim());
  }, []);

  const [password, setPassword] = useState('');
  const passwordRef = useRef<TextInput | null>(null);
  const onChangePassword = useCallback((text: string) => {
    setPassword(text.trim());
  }, []);

  const onSubmit = useCallback(() => {
    if (!email || !email.trim()) {
      return Alert.alert('알림', '값을 입력해주세요.');
    }

    if (!password || !password.trim()) {
      return Alert.alert('알림', '값을 입력해주세요.');
    }

    return Alert.alert('알림', '로그인 되었습니다.');
  }, [email, password]);

  const canGoNext = !email || !password;

  const toSignUp = useCallback(() => {
    navigation.navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          value={email}
          style={styles.textInput}
          placeholder="이메일을 입력해주세요"
          onChangeText={onChangeEmail}
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
          ref={emailRef}
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          blurOnSubmit={false}
          clearButtonMode="while-editing"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          value={password}
          style={styles.textInput}
          placeholder="비밀번호를 입력해주세요"
          onChangeText={onChangePassword}
          secureTextEntry
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          returnKeyType="done"
          keyboardType="visible-password"
          ref={passwordRef}
          onSubmitEditing={onSubmit}
          clearButtonMode="while-editing"
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          style={
            canGoNext
              ? styles.loginButton
              : StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
          }
          disabled={canGoNext}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable onPress={toSignUp}>
          <Text>회원가입하기</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  textInput: {
    padding: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonZone: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SignIn;
