import React from 'react'
import Datamahasiswa from './data/mahasiswa.json'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { FlatList, Text, View, TouchableOpacity, Linking, StyleSheet} from 'react-native'
import { faUserGraduate, faVenus, faMars} from '@fortawesome/free-solid-svg-icons';


const Pendaki = () => {
 return (
  <FlatList
  data={Datapendaki}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <TouchableOpacity
      onPress={() =>
        Linking.openURL('google.navigation:q=' + item.latitude + ',' + item.longitude)} >
      <View style={ styles.card}>

          <Text>Nama Lengkap {item.class}</Text>

          <Text>Kelas {item.class}</Text>
       

          <Text>Kelas {item.class}</Text>
        
  
      </View>
    </TouchableOpacity>
  )}
/>
 )
}

export default Pendaki

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#333',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    avatar: {
      borderRadius: 100,
      width: 80,
    },
    cardtitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    card: {
      flexDirection: 'row',
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      marginHorizontal: 20,
      marginVertical: 7
    },
   })
   
