import React, { useRef } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import axios from "axios";

export default function Login() {
    const email = useRef()
    const password = useRef()

    const handleForm = (e) => {

        e.preventDefault()

        let inputEmail = email.current.value
        let inputPassword = password.current.value

        let dataUser = {
            email: inputEmail,
            password: inputPassword
        }

        axios.post(apiUrl + "auth/signin", dataUser)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("user", JSON.stringify(res.data.user))
                Swal.fire({
                    title: 'Welcome!',
                    icon: 'success',
                    showConfirmButton: true,
                    confirmButtonText: 'OK',
                    allowOutsideClick: false
                })
                navigate("/")
            })
            .catch(err => {
                console.log(err.response.data.message)
                Swal.fire(`${err.response.data.message}`)
            })



    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                secureTextEntry
            />
            <Pressable
                style={styles.button}
                onPress={() => console.log('Sign In pressed')}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginBottom: 8,
        color: 'white',
        width: '60%',
    },
    button: {
        backgroundColor: '#443874',
        width: '60%',
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
