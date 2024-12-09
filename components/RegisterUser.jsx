import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import colors  from '../styleConstants/colors'

const RegisterUser = ({navigation}) => {
  const [nickname, setNickname] = useState('')
  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const [confirmationPass, setConfirmationPass] = useState('')

  const handleRegisterUser = () => {
    // navigation.navigate('TabNavigator');
    console.log('clicUser')
  }

  return (
    <View>
      <View>
        <Text>Surnom</Text>
        <TextInput placeholder="Surnom" onChangeText={(value) => setNickname(value)} value={nickname} style={styles.input} /> 
      </View>

      <View>
        <Text>E-mail de connexion</Text>
        <TextInput placeholder="Email" onChangeText={(value) => setMail(value)} value={mail} style={styles.input} /> 
      </View>

      <View>
        <Text>Mot de passe</Text>
        <TextInput placeholder="Mot de passe" onChangeText={(value) => setPass(value)} value={pass} style={styles.input} /> 
      </View>

      <View>
        <Text>Mot de passe</Text>
        <TextInput placeholder="Confirmation mot de passe" onChangeText={(value) => setConfirmationPass(value)} value={confirmationPass} style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  width:'100%',
  backgroundColor:'red',
  justifyContent: "center",
  alignItems: "center",
},
btnSecondary:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',

  width:"100%",
  height:40,
  padding: 4,

  backgroundColor: colors.purple,
  borderRadius:15,
}
})

export default RegisterUser;
