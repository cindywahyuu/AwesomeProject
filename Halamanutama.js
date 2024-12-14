import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCampground, faClipboardCheck, faMoneyBill, faMountain, faTimeline, faTimes } from '@fortawesome/free-solid-svg-icons';

const IntroScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.backgroundImageContainer}>
          <Image
            source={require('./assets/images/HomeB2.png')} // Ganti dengan URL gambar gunung Anda
            style={styles.backgroundImage}
          />
        </View>
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Image
              source={require('./assets/images/Background.png')}  // Ganti dengan URL logo Anda
              style={styles.logo}
            />
            <Text style={styles.title}>AltitudeXplorer</Text>
          </View>

          <View style={styles.introSection}>

            <Text style={styles.description}>
              Aplikasi yang dirancang untuk membantu para pendaki
              dalam mendapatkan informasi lengkap tentang basecamp pendakian,
              registrasi, dan tips pendakian aman. Dengan aplikasi ini, pengalaman pendakian
              Anda akan menjadi lebih terorganisir dan menyenangkan.
            </Text>
          </View>

          <View style={styles.featureSection}>
              <Text style={styles.subtitle}>Fitur</Text>
              <View style={styles.featureItem}>
                <FontAwesomeIcon icon={faCampground} size={24} style={styles.featureIcon} />
                <Text style={styles.featureText}>Informasi Basecamp Pendakian</Text>
              </View>
              <View style={styles.featureItem}>
                <FontAwesomeIcon icon={faMoneyBill} size={24} style={styles.featureIcon} />
                <Text style={styles.featureText}>Informasi Estimasi Biaya</Text>
              </View>
              <View style={styles.featureItem}>
                <FontAwesomeIcon icon={faTimeline} size={24} style={styles.featureIcon} />
                <Text style={styles.featureText}>Informasi Estimasi Waktu</Text>
              </View>
              <View style={styles.featureItem}>
                <FontAwesomeIcon icon={faClipboardCheck} size={24} style={styles.featureIcon} />
                <Text style={styles.featureText}>Registrasi Pendakian</Text>
              </View>
    
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(121, 110, 110, 0.15)',
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  introSection: {
    marginBottom: 1, // Reduced marginTop here to bring content up
    marginTop: 10,    // Reduced marginTop for the intro section
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 10,
    marginTop: 150,
  },
  description: {
    fontSize: 20,
    color: '#fff',
    lineHeight: 30,
    textAlign: 'justify',
    marginTop: 0, // Added marginTop to create space between subtitle and description
    marginBottom: 0,
  },
  featureSection: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  featureText: {
    fontSize: 16,
    color: '#fff',
  },
  featureIcon: {
    color: 'white',
    marginRight: 15,
  },
});
