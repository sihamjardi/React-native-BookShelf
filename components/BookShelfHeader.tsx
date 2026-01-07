import { StyleSheet, Text, View } from 'react-native';

const BookShelfHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BookShelf</Text>
    </View>
  );
};

export default BookShelfHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    padding: 40,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});
