import React from 'react';
import { ImageBackground, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../images/Background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Image
          source={require('../../images/Welcome_screen_background.png')}
          style={styles.logo}
        />

        <Text style={styles.appName}>Calorie coach</Text>
        <Text style={styles.subtitle}>Добре дошъл!</Text>

        <Text style={styles.description}>
          Това приложение ще ти помага да следиш калориите си, да контролираш
          храненето и да постигаш по-лесно целите си.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('./register')}
        >
          <Text style={styles.primaryButtonText}>Регистрирай се</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('./login')}
        >
          <Text style={styles.secondaryButtonText}>Влез в профила си</Text>
        </TouchableOpacity>

        <Text style={styles.smallText}>
          Ако вече имаш акаунт, просто влез и продължи прогреса си. 💪
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 220,
    alignSelf: 'center',
    marginBottom: 20,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 19,
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 32,
  },
  primaryButton: {
    backgroundColor: '#2e7d32',
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#2e7d32',
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#2e7d32',
    fontSize: 16,
    fontWeight: '600',
  },
  smallText: {
    fontSize: 13,
    textAlign: 'center',
    color: '#777',
    marginTop: 16,
  },
});

