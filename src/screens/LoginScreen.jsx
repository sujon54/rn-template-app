import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
  Alert,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  StatusBar,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/userSlice';
import { useNavigation } from '@react-navigation/native';
import ToolBar from '../components/ToolBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const marginTop = (height - 500) / 2;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = () => {
    if (!password || !email) {
      Alert.alert('Validation', 'Please enter both password and email.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Validation', 'Please enter a valid email address.');
      return;
    }

    dispatch(login({ name: "SR", email, id: "1", token: "dummy_token" }));
    navigation.navigate('Home')
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.inner}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>f</Text>
          </View>

          <Text style={{ fontSize: 16, marginBottom: 5 }}>Email</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            {
              email.length > 0 && (
                <TouchableOpacity onPress={() => setEmail('')}>
                  <Icon
                    name={'close'}
                    size={24}
                    color="#aaa"
                  />
                </TouchableOpacity>
              )}
          </View>

          <Text style={{ fontSize: 16, marginBottom: 5 }}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={!showPassword}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={password}
              onChangeText={setPassword}
            />
            {
              (isFocused || password.length > 0) && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#aaa"
                  />
                </TouchableOpacity>
              )}
          </View>

          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={styles.bottom}>
            <TouchableOpacity style={styles.createAccount}>
              <Text style={styles.createText}>Create new account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  inner: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 64,
    color: '#1877f2',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#f2f2f2',
    color: '#000',
    paddingHorizontal: 16,
    // paddingVertical: 12,
    height: 50,
    marginBottom: 16,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  loginButton: {
    backgroundColor: '#1877f2',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgot: {
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 24,
  },
  bottom: {
    alignItems: 'center',
  },
  createAccount: {
    borderColor: '#1877f2',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 12,
  },
  createText: {
    color: '#1877f2',
    fontWeight: 'bold',
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    // paddingVertical: 8,
    height: 50,
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    color: '#000',
    paddingRight: 8,
  },

});

