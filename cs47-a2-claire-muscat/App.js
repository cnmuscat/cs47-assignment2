import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, Image, StatusBar, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';
import * as React from "react";


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <Image style={styles.topIcons} source={Icons.menu.light}/>
        <Text style={styles.logo}>ensom</Text>
        <Image style={styles.topIcons} source={Icons.sun}/>
      </View> 

      <View style={styles.mid}>
        <ImageBackground style={styles.propic} source={require("./assets/Profiles/mtl.jpg")}>
          <Text style={styles.nameText}>MTL</Text>
          <Text style={styles.distanceText}>2 miles away</Text>
        </ImageBackground>
        <View style={styles.hotTakes}>
          <Text style={styles.hotTakesText}>My hottest take</Text>
          <Image style={styles.playButton} source={Icons.player.light}/>
          <Image style={styles.audio} source={Icons.audioWave.light}/>
        </View>
      </View>

      <View style={styles.bottomBar}>
          <ImageBackground style={styles.bottomIcons} source={Icons.discover.light}>
            <Text style={styles.bottomText}>Discover</Text>
          </ImageBackground>

          <ImageBackground style={styles.bottomIcons} source={Icons.heart.light}>
            <Text style={styles.bottomText}>Matches</Text> 
          </ImageBackground>

          <ImageBackground style={styles.bottomIcons} source={Icons.messages.light}>
            <Text style={styles.bottomText}>DMs</Text> 
          </ImageBackground>

      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center'
  },

  topBar: {
    backgroundColor: Themes.light.bg, // is this how you use theme??
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: '10%',
    paddingTop: '8%'
  },

  logo: {
    fontFamily: 'Sydney-Bold',
    fontSize: 30,
    textAlign: 'center',
  },

  topIcons: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  },

  mid: {
    width: '100%',
    height: '73%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '25%',
  },

    propic: {
    position: 'relative',
    height: '85%',
    width: '90%',
    borderRadius: 40,
    borderColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
    left: '4.5%',
    resizeMode: 'cover'
  },

  hotTakes: {
    position: 'relative',
    height: '27%',
    width: '80%',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: Themes.light.bgSecondary,
    borderColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
    paddingTop: '5%',
    resizeMode: 'cover',
  },

  playButton: {
    position: 'absolute',
    height: '42%',
    width: '42%',
    top: '46%',
    right: '65%',
    resizeMode: 'contain'
  },

  audio: {
    position: 'absolute',
    height: '70%',
    width: '70%',
    left: '25%',
    top: '30%',
    resizeMode: 'contain'
  },

  bottomBar: {
    position: 'relative',
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    backgroundColor: Themes.dark.bg,
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingHorizontal: '18%',
    marginBottom: '10%'
  },

  bottomIcons: {
    position: 'relative',
    height: '68%',
    width: '39%',
    resizeMode: 'cover'
  },

  nameText: {
    position: 'absolute',
    fontFamily: 'Sydney',
    fontSize: 30,
    color: Themes.light.textSecondary,
    top: '2%',
    left: '3%'
  },

  distanceText: {
    position: 'absolute',
    fontFamily: 'Sydney',
    fontSize: 15,
    color: Themes.light.textSecondary,
    bottom: '17%',
    left: '3%'
  },

  hotTakesText: {
    position: 'absolute',
    fontFamily: 'Sydney',
    color: Themes.light.text,
    fontSize: 22,
    top: '15%',
    right: '52%'
  },

  bottomText: {
    position: 'absolute',
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    fontSize: 15,
    top: '80%',
    left: '4%'
  }

});


