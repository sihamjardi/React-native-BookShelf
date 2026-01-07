import { StyleSheet, Text, View } from 'react-native';

const BookShelfFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Tous droits réservés – BookShelf 2024
      </Text>
    </View>
  );
};

export default BookShelfFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    padding: 16,
    marginBottom: 8,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
  },
});
