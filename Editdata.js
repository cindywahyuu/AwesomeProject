import React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, TextInput, Text, Button, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare, faGraduationCap, faHiking } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Createdata = () => {
  const jsonUrl = 'http://192.168.110.194:3000/pendaki'; // API untuk emulator
  const [nama_lengkap, setNamaLengkap] = useState('');
  // const [jenis_kelamin, setJenisKelamin] = useState('');
  const [hp_pribadi, setHpPribadi] = useState('');
  const [hp_darurat, setHpDarurat] = useState('');
  const [pendakian_gunung, setPendakianGunung] = useState('');
  const [lama_pendakian, setLamaPendakian] = useState('');
  const [identitas_tertinggal, setIdentitasTertinggal] = useState('');

  const [selectedUser, setSelectedUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => setDataUser(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const refreshPage = () => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => setDataUser(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const selectItem = (item) => {
    setSelectedUser(item);
    setNamaLengkap(item.nama_lengkap);
    // setJenisKelamin(item.jenis_kelamin);
    setHpPribadi(item.hp_pribadi);
    setHpDarurat(item.hp_darurat);
    setPendakianGunung(item.pendakian_gunung);
    setLamaPendakian(item.lama_pendakian);
    setIdentitasTertinggal(item.identitas_tertinggal);
  };

  const submit = () => {
    const data = {
      nama_lengkap,
      // jenis_kelamin,
      hp_pribadi,
      hp_darurat,
      pendakian_gunung,
      lama_pendakian,
      identitas_tertinggal
    };

    fetch(`${jsonUrl}/${selectedUser.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        alert('Data tersimpan');
        refreshPage();
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Terjadi kesalahan saat menyimpan data');
      });
  };

  return (
     <ImageBackground
        source={require('./assets/images/Background.png')} // Ganti dengan path gambar yang sesuai
        style={styles.background}
      >
    <SafeAreaView>
      <View>
        {isLoading ? (
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={styles.cardtitle}>Loading...</Text>
          </View>
        ) : (
          <View>
            <ScrollView>
              <View>
                <Text style={styles.title}>Edit Data Pendaki</Text>
                <View style={styles.form}>
                  <TextInput
                    style={styles.input}
                    placeholder="Nama Lengkap"
                    value={nama_lengkap}
                    onChangeText={setNamaLengkap}
                  />
                  {/* <TextInput
                    style={styles.input}
                    placeholder="Jenis Kelamin"
                    value={jenis_kelamin}
                    onChangeText={setJenisKelamin}
                  /> */}
                  <TextInput
                    style={styles.input}
                    placeholder="HP Pribadi"
                    value={hp_pribadi}
                    onChangeText={setHpPribadi}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="HP Darurat"
                    value={hp_darurat}
                    onChangeText={setHpDarurat}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Lama Pendakian"
                    value={lama_pendakian}
                    onChangeText={setLamaPendakian}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Identitas yang Tertinggal"
                    value={identitas_tertinggal}
                    onChangeText={setIdentitasTertinggal}
                  />

                  <Picker
                    selectedValue={pendakian_gunung}
                    onValueChange={(itemValue) => setPendakianGunung(itemValue)}
                    style={styles.input}
                  >
                    <Picker.Item label="Pilih Gunung" value="" />
                    <Picker.Item label="Gunung Andong" value="Gunung Andong" />
                    <Picker.Item label="Gunung Mongkrang" value="Gunung Mongkrang" />
                    <Picker.Item label="Gunung Ungaran" value="Gunung Ungaran" />
                    <Picker.Item label="Gunung Sibuthak" value="Gunung Sibuthak" />
                    <Picker.Item label="Gunung Kembang" value="Gunung Kembang" />
                    <Picker.Item label="Gunung Bismo" value="Gunung Bismo" />
                    <Picker.Item label="Gunung Prau" value="Gunung Prau" />
                    {/* Tambahkan pilihan lainnya sesuai kebutuhan */}
                  </Picker>
                  <Button title="Simpan" style={styles.button} onPress={submit} />
                </View>
              </View>
              <View style={styles.devider}></View>
              <FlatList
                style={{ marginBottom: 10 }}
                data={dataUser}
                onRefresh={refreshPage}
                refreshing={refresh}
                nestedScrollEnabled={true}
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => (
                  <View>
                    <TouchableOpacity onPress={() => selectItem(item)}>
                      <View style={styles.card}>
                        <View style={styles.avatar}>
                          <FontAwesomeIcon icon={faHiking} size={50} />
                        </View>
                        <View>
                          <Text style={styles.cardtitle}>{item.nama_lengkap}</Text>
                          <Text>{item.pendakian_gunung}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                          <FontAwesomeIcon icon={faPenToSquare} size={20} />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

export default Createdata;

const styles = StyleSheet.create({
  
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(172, 157, 157, 0.4)', // Overlay gelap untuk teks lebih terbaca
  },
  title: {
    paddingVertical: 12,
    backgroundColor: '#333',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    padding: 10,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 8,
    width: '100%',
    marginVertical: 5,
    backgroundColor: 'rgba(255, 251, 251, 0.8)',
  },
  button: {
    marginVertical: 10,
  },
  avatar: {
    borderRadius: 100,
    width: 80,
  },
  cardtitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 251, 251, 0.8)',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
  },
});
