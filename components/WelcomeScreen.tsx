import { ScrollView, StyleSheet, Text } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ScrollView style={styles.container} indicatorStyle="white">
      <Text style={styles.title}>Bienvenue sur BookShelf</Text>

      <Text style={styles.description}>
        BookShelf est une application de bibliothèque numérique qui vous
        permet de découvrir, organiser et gérer vos livres préférés.
        Profitez d’une expérience moderne et intuitive.
      </Text>
    </ScrollView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: 'white',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#EDEFEE',
    lineHeight: 22,
  },
});
