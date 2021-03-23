import * as React from "react";
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, ScrollView, Dimensions, WebView } from "react-native";
import logo from './src/static/images/PoppyImgRed.png';
import SvgTest from './svgs/SvgTest';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo}></Image>
        <View style={styles.nav}>
          <Text style={styles.text}>My Comics</Text>
          <Text style={styles.text}>Explore</Text>
          <Text style={styles.text}>Account</Text>
        </View>
      </View>
      <View style={styles.main}>
        <Text style={styles.rowTitle}>Your Collection</Text>
        <SafeAreaView style={styles.rowWrapper}>
          <ScrollView style={styles.row} horizontal={true}>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
          </ScrollView>
        </SafeAreaView>

        <Text style={styles.rowTitle}>Favorites</Text>
        <SafeAreaView style={styles.rowWrapper}>
          <ScrollView style={styles.row} horizontal={true}>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
          </ScrollView>
        </SafeAreaView>
        <Text style={styles.rowTitle}>Marvel</Text>
        <SafeAreaView style={styles.rowWrapper}>
          <ScrollView style={styles.row} horizontal={true}>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
          </ScrollView>
        </SafeAreaView>
        
        <Text style={styles.rowTitle}>DC</Text>
        <SafeAreaView style={styles.rowWrapper}>
          <ScrollView style={styles.row} horizontal={true}>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
          </ScrollView>
        </SafeAreaView>

        <Text style={styles.rowTitle}>Series</Text>
        <SafeAreaView style={styles.rowWrapper}>
          <ScrollView style={styles.row} horizontal={true}>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
          </ScrollView>
        </SafeAreaView>

        <Text style={styles.rowTitle}>Independent</Text>
        <SafeAreaView style={styles.rowWrapper}>
          <ScrollView style={styles.row} horizontal={true}>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
            <View style={styles.comic}></View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <View style={styles.footer}>
        {/* <Image source={home} style={styles.home}></Image> */}
        <SvgTest />
      </View>
    </View>
  );
}
const tWidth = Dimensions.get('window').width;
const tHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(25,24,23)',
    flex: 1,
  },
  header: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    height: 75,
    width: '100%',
    position: 'fixed',
    zIndex: 4
  },
  logo: {
    flex: 0.2
  },
  nav: {
    flex: 0.8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontFamily: `${"'Bangers', 'cursive'"}`,
    fontWeight: 'bold',
    fontSize: tWidth / 25
  },
  main: {
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '2.5%',
    paddingRight: '2.5%',
    paddingTop: 80,
    paddingBottom: 80
  },
  rowTitle: {
    width: '100%',
    height: '2%',
    color: 'white',
    fontFamily: `${"'Bangers', 'cursive'"}`,
    fontWeight: 'bold',
    fontSize: tWidth / 30
  },
  rowWrapper: {
    width: '100%',
    height: 250
  },
  row: {
    width: '100%',
    height: '25%',
    border: '1px solid red',
    marginBottom: '2.5%',
    marginTop: '2.5%',
    overflowY: 'scroll',
    minWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  comic: {
    border: '1px solid blue',
    height: '100%',
    width: 150,
    marginRight: 10
  },
  footer: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    height: tHeight / 10,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 4
  },
  home: {
    fill: 'white'
  },
  search: {
    fill: 'white'
  }
});
