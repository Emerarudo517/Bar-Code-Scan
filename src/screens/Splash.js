import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    // Navigate to the Home screen when the image is pressed
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={require('../../src/img/Splashing.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Scan, Pay & Enjoy!</Text>
      <Text style={styles.subtitle}>
        Scan products you want to buy at your favorite store and pay by your
        phone & enjoy happy, friendly shopping!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 267,
    height: 267,
    top: -60,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 30,
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#888',
  },
});

export default Splash;
