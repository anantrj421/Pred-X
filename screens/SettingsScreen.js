import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { ExpoConfigView } from '@expo/samples';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View style={styles.about}>
      <Text style={{ color: "white", width: "70%", marginLeft: 60, fontSize: 30, marginTop: 40, textAlign: "center", fontWeight: "bold" }}>Version: 1.0.0 BETA</Text>
    </View>
    )
}

SettingsScreen.navigationOptions = {
  title: 'About',
};
const styles = StyleSheet.create({
  about: {
    flex: 1,
    backgroundColor : "#512c96",
  }
})
