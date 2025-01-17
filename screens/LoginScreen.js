import {Text, View, StyleSheet, TextInput, Button, Alert} from "react-native";
import {useState, useContext} from "react";
import {AuthContext} from "../App";

const LoginScreen = ({navigation}) => {
	const {setUser} = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = () => {
		if (!email || !password) {
			Alert.alert('Error! Please fill all fields');
			return;
		}
		setUser({email});
	}
	return (
	  <View style={styles.container}>
		  <TextInput
			placeholder='Email'
			style={styles.input}
			value={email}
			onChangeText={setEmail}/>
		  <TextInput
			placeholder='Password'
			style={styles.input}
			value={password}
			onChangeText={setPassword}/>
		  <Button title={'Login'} onPress={handleLogin}/>
		  <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
			  Don't have an account? Sign up.
		  </Text>
	  </View>
	)
}

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20
	},
	input: {
		borderWidth: 1,
		marginBottom: 10,
		padding: 8,
		borderRadius: 5
	},
	link: {
		marginTop: 10,
		color: 'blue',
		textAlign: "center"
	}
})