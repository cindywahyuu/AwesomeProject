import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button, Alert } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGraduationCap, faChevronRight, faHiking } from '@fortawesome/free-solid-svg-icons'

const Listdata = () => {
  const jsonUrl = 'http://192.168.1.8:3000/pendaki';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setDataUser(json)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  function refreshPage() {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setDataUser(json)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function deleteData(id) {
    fetch(jsonUrl + '/' + id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert('Data terhapus');
        refreshPage();
      })
  }


  return (
    <SafeAreaView>
      {isLoading ? (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={styles.cardtitle}>Loading...</Text>
        </View>
      ) : (
        <View>
          <FlatList
            style={{ marginBottom: 0 }}
            data={dataUser}
            onRefresh={() => { refreshPage() }}
            refreshing={refresh}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity>
                  <View style={styles.card}>
                    <View style={styles.avatar}>
                      <FontAwesomeIcon icon={faHiking} size={50} color={item.color} />
                    </View>
                    <View>
                      <Text style={styles.cardtitle}>Nama Lengkap:</Text>
                      <Text>{item.nama_lengkap}</Text>

                      {/* <Text style={styles.cardtitle}>Jenis Kelamin:</Text>
                      <Text>{item.jenis_kelamin}</Text> */}

                      <Text style={styles.cardtitle}>HP Pribadi:</Text>
                      <Text>{item.hp_pribadi}</Text>

                      <Text style={styles.cardtitle}>HP Darurat:</Text>
                      <Text>{item.hp_darurat}</Text>

                      <Text style={styles.cardtitle}>Pendakian Gunung:</Text>
                      <Text>{item.pendakian_gunung}</Text>

                      <Text style={styles.cardtitle}>Lama Pendakian:</Text>
                      <Text>{item.lama_pendakian}</Text>

                      <Text style={styles.cardtitle}>Identitas Tertinggal:</Text>
                      <Text>{item.identitas_tertinggal}</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                      <FontAwesomeIcon icon={faChevronRight} size={20} />
                    </View>
                  </View>
                </TouchableOpacity>

                <View style={styles.form}>
                  <Button title="Hapus"
                    onPress={() => Alert.alert('Hapus data', 'Yakin akan menghapus data ini?', [
                      { text: 'Tidak', onPress: () => console.log('button tidak') },
                      { text: 'Ya', onPress: () => deleteData(item.id) },
                    ])}
                    color={'red'}
                  />
                </View>

              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>

  )
}

export default Listdata

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
    fontSize: 12, // Ukuran teks judul lebih kecil
    fontWeight: 'bold',
    color: '#333', // Tambahkan warna untuk memperjelas
    marginBottom: 2, // Jarak antar teks
  },
  card: {
    flexDirection: 'row',
    padding: 15, // Kurangi padding untuk menghemat ruang
    borderRadius: 10,
    backgroundColor: 'rgba(44, 223, 154, 0.15)',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 10, // Kurangi margin untuk menghemat ruang
    marginVertical: 5,
  },
  cardContent: {
    flex: 1, // Membuat kolom data lebih fleksibel
    marginLeft: 10, // Beri jarak antara avatar dan teks
  },
  textRow: {
    flexDirection: 'row', // Label dan data dalam satu baris
    marginBottom: 5, // Jarak antar baris
  },
  label: {
    fontSize: 12, // Ukuran lebih kecil untuk label
    fontWeight: 'bold',
    color: '#555',
    width: 120, // Lebar tetap untuk label
  },
  value: {
    fontSize: 12, // Ukuran lebih kecil untuk nilai
    color: '#333',
    flex: 1, // Isi sisanya
  },
  form: {
    paddingHorizontal: 10, // Kurangi padding
    paddingTop: 5,
    paddingBottom: 15, // Kurangi padding bawah
  },
});
