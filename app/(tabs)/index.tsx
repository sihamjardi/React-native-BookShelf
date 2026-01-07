import BookShelfFooter from '@/components/BookShelfFooter';
import BookShelfHeader from '@/components/BookShelfHeader';
import WelcomeScreen from '@/components/WelcomeScreen';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <BookShelfHeader />
      <WelcomeScreen />
      <BookShelfFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
});
