import {Text, View, StyleSheet, TextInput, Button, Alert} from "react-native";
import {useState, useContext} from "react";
import {AuthContext} from "../App";

const SignupScreen = ({navigation}) => {
	const {setUser} = useContext(AuthContext);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
	const handleLogin = () => {
		if (!email || !password || !firstName || !lastName || !confirmPassword) {
			Alert.alert('Error! Please fill all fields')
			return;
		}
        else {
            const validateEmail = (email) => { 
                const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
                return emailValid.test(email); 
            }; 
            
            const validatePassword = (password) => { 
                const passwordValid = /^(?=.*[A-Z])(?=.*\d).{8,}$/; 
                return passwordValid.test(password); 
            };

            if (!validateEmail(email)) { 
                setError('Невірний формат мейла'); 
                return; 
            } 
            if (!validatePassword(password)) { 
                setError('Пароль має містити принаймні одну велику літеру та одну цифру'); 
                return; 
            }

			if (password.length < 8) {
				setError('Пароль має містити щонайменьше 8 символів');
				return;
			}

			if (password !== confirmPassword) {
				setError('Спробуйте ще раз');
				return;
			}

			setError('');

            setUser({firstName, lastName, email});
		    navigation.navigate('TaskList');
        }
		
	}
	return (
	  <View style={styles.container}>
		  <Text style={styles.title}>Sign up</Text>
		  <TextInput
			placeholder='First name'
			style={styles.input}
			value={firstName}
			onChangeText={setFirstName}/>
		  <TextInput
			placeholder='Last name'
			style={styles.input}
			value={lastName}
			onChangeText={setLastName}/>
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
           <TextInput
			placeholder='Confirm Password'
			style={styles.input}
			value={confirmPassword}
			onChangeText={setConfirmPassword}/> 
		  <Button title={'Sign up'} onPress={handleLogin}/>
          {
            error ? <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text> : null
            }
            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
			  Already have an account? Login
		  </Text>
	  </View>
	)
}

export default SignupScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20
	},
	title:{
		textAlign:'center',
		fontSize:20,
		marginBottom:10
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