import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, TextInput, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Createdata = () => {
  const jsonUrl = 'http://192.168.110.194:3000/pendaki'; // API untuk emulator
  const [nama_lengkap, setNamaLengkap] = useState('');
  const [jenis_Kelamin, setJenisKelamin] = useState('');
  const [hp_pribadi, setHpPribadi] = useState('');
  const [hp_darurat, setHpDarurat] = useState('');
  const [pendakian_gunung, setPendakianGunung] = useState('');
  const [lama_pendakian, setLamaPendakian] = useState('');
  const [identitas_tertinggal, setIdentitasTertinggal] = useState('');


  const submit = () => {
    const data = {
      nama_lengkap,
      jenis_Kelamin,
      hp_pribadi,
      hp_darurat,
      pendakian_gunung,
      lama_pendakian,
      identitas_tertinggal
    };
    fetch(jsonUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert('Data tersimpan');
        setNamaLengkap('');
        setJenisKelamin('');
        setHpPribadi('');
        setHpDarurat('');
        setPendakianGunung('');
        setLamaPendakian('');
        setIdentitasTertinggal('');
      })
      .catch((error) => {
        console.error(error);
        alert('Gagal menyimpan data');
      });
  };

  return (
    <ImageBackground
    source={require('./assets/images/Background.png')} // Ganti dengan path gambar yang sesuai
    style={styles.background}
  >
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Registrasi Pendakian AltitudeXplorer</Text>
        <ScrollView style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nama Lengkap"
            value={nama_lengkap}
            onChangeText={(value) => setNamaLengkap(value)}
          />
          {/* <TextInput
            style={styles.input}
            placeholder="Jenis Kelamin"
            value={jenis_Kelamin}
            onChangeText={(value) => setJenisKelamin(value)}
          /> */}
          <TextInput
            style={styles.input}
            placeholder="Nomor HP Pribadi"
            value={hp_pribadi}
            onChangeText={(value) => setHpPribadi(value)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Nomor HP Darurat"
            value={hp_darurat}
            onChangeText={(value) => setHpDarurat(value)}
            keyboardType="numeric"
          />

          {/* <TextInput
                        style={styles.input}
                        placeholder="Pendakian Gunung"
                        value={pendakian_gunung}
                        onChangeText={(value) => setPendakianGunung(value)}
                    /> */}
          <TextInput
            style={styles.input}
            placeholder="Lama Pendakian (hari)"
            value={lama_pendakian}
            onChangeText={(value) => setLamaPendakian(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Identitas yang ditinggal"
            value={identitas_tertinggal}
            onChangeText={(value) => setIdentitasTertinggal(value)}
          />
           <Text style={styles.label}>Pendakian Gunung</Text>
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
        </ScrollView>
      
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Overlay gelap untuk teks lebih terbaca
  },
  title: {
    paddingVertical: 12,
    backgroundColor: '#333',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  form: {
    padding: 10,
    marginBottom: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    padding: 8,
    width: '100%',
    marginVertical: 5,
    backgroundColor: 'rgba(255, 251, 251, 0.8)',
  },
  button: {
    marginVertical: 10,
    color: 'green',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
})