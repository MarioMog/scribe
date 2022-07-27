import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity
  // Alert,
} from 'react-native'

const { width, height } = Dimensions.get('screen')

const LogIn = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const handleOnChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }
  const encodedData = () => {
    const data = new FormData()
    data.append('email', this.state.email)
    data.append('password', this.state.password)
    return data
  }

  const next = () => {
    // fetch('https://reactnative-app.000webhostapp.com/EduWrite/api/LogIn.php', {
    //   method: 'POST',
    //   body: this.encodedData(),
    // })
    //   .then((res) => res.text())
    //   .then((res) => {
    //     let data = res.split(',');
    //     let codeError = data[0];
    //     let message = data[1];
    //     if (codeError === '1') {
    //       global.idUser = data[1];
    //       Alert.alert(
    //         'Ingreso exitoso',
    //         'Presiona OK para continuar',
    //         [
    //           {
    //             text: 'OK',
    //             onPress: () => this.props.navigation.navigate('Home'),
    //           },
    //         ],
    //         {cancelable: false},
    //       );
    //     } else {
    //       Alert.alert(message);
    //     }
    //   })
    //   .catch((err) => console.error(err));
    this.props.navigation.navigate('Home')
  }

  const signUp = () => {
    this.props.navigation.navigate('SignUp')
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.containerImage}>
          <Image
            source={require('../../assets/public/logo.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            name="email"
            style={styles.input}
            onChangeText={e => handleOnChange(e)}
            value={this.state.email.value}
            placeholder="Correro electrónico"
            placeholderTextColor="#fff"
          />
          <TextInput
            name="password"
            style={styles.input}
            onChangeText={e => handleOnChange(e)}
            placeholder="Contraseña"
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.btn} onPress={this.next}>
            <Text style={styles.labelBtn}>Ingresar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnRed]}
            onPress={this.signUp}>
            <Text style={styles.labelBtn}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: '#4E4187',
    paddingHorizontal: width * 0.05
  },
  containerImage: {
    alignItems: 'center'
  },
  img: {
    width: width * 0.4,
    height: height * 0.3,
    resizeMode: 'contain'
  },
  input: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    fontSize: 18,
    paddingLeft: width * 0.05
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.05,
    alignItems: 'center'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0275d8',
    height: height * 0.08,
    borderRadius: 15,
    marginHorizontal: width * 0.02
  },
  btnRed: {
    backgroundColor: '#d9534f'
  },
  labelBtn: {
    color: '#fff',
    fontSize: width * 0.05
  }
})

export default LogIn;