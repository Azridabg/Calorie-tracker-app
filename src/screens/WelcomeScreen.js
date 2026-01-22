import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>CalorieTracker</Text>
      <Text style={styles.subtitle}>
        Добре дошъл! 📱
      </Text>
      <Text style={styles.description}>
        Това приложение ще ти помага да следиш калориите, да поддържаш форма
        и да контролираш по-лесно храненето си.
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.primaryButtonText}>Регистрирай се</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.secondaryButtonText}>Влез в профила си</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.smallText}>
        Ако вече имаш акаунт, просто влез и продължи да следиш прогреса си. 💪
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 32,
  },
  buttonsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: '#2e7d32',
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
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
    marginTop: 8,
  },
});