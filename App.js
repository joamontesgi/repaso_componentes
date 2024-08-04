import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageComponent from './ImageComponent';
import CardComponent from './CardComponent';
import FlatListComponent from './FlatListComponent';
import ModalComponent from './ModalComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <CardComponent />
      <FlatListComponent />
      <ModalComponent />
      <ImageComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
