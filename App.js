import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import OnClickButton from './components/Button';
import ImageViewer from './components/ImageViewer';


export default function App() {
  const img = "https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg"
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };
  return (
    <>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={img}></ImageViewer>
    </View>
    <View style={styles.footerContainer}>
      <OnClickButton label="Show Photo"></OnClickButton>
      <OnClickButton label="Hide Photo"></OnClickButton>
      </View>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer : {
    paddingTop : 58,
    flex : 1
  },
  footerContainer : {
    flex : 1/3,
    alignItems : 'center'
  }
});
