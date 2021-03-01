import { connect } from 'react-redux'
import authActions from "../redux/actions/authActions"
import {useEffect, useState} from 'react'
import { Alert, Text, View,Image, ImageBackground, TouchableOpacity, ScrollView, TextInput} from 'react-native'



const Login=(props)=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    //Usuario a loguearse
    var [loginUser, setLoginUser] = useState({
        username:"",
        password:"",
    })
    //Errores
    const [errores, setErrores] = useState([])
    //capturo valores de los inputs
    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginUser({ ...loginUser,[name]: value })
      }
    //Funcion para confirmar el login
    const  sendUser= async e =>{
        e.preventDefault()       
        if (loginUser.username === '' || loginUser.password === '') {
            Alert("All fields are required")
            return false
        }
        setErrores([])
        const respuesta = await props.loginUser(loginUser)
        if (respuesta && !respuesta.success) {
            setErrores([respuesta.mensaje])
        } else {
            swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Welcome to Mytinerary',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
    
    return(
        <>
            <ImageBackground>
                <TextInput type="text" autocomplete="nope" placeholder="Your email address" name="username"
                onChangeText={(e)=>handleChange(e)}/>
                <TextInput type="password" placeholder="Password for Mytinerary" name="password"
                onChangeText={(e)=>handleChange(e)} />
                <TouchableOpacity onPress={sendUser} >
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </>
    )
}


const mapDispatchToProps = {
    loginUser: authActions.loginUser
}
export default connect(null,mapDispatchToProps)(Login) 