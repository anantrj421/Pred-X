import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Good from '../components/Good'
import Bad from '../components/Bad'
import Store from '../components/Store'
import axios from 'axios'

export default function LinksScreen() {
  const options = {
    title: 'select image',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Gallery' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const [btn, setBtn] = useState({
    disp: 2,
  })
  const { disp } = btn;
  const onPress = async () => {
    const response = await axios.get('https://cl-node.herokuapp.com/cl-api');
    var dsp = response.data['msg']
    setBtn({
      ...btn,
      disp: dsp
    })
  }
  const onClose = () => {
    setBtn({
      ...btn,
      disp: 2,

    })
  }
  const myFun = () => {
    setBtn({
      ...btn,
      disp: 3
    })
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        {disp === 0 ? <View><Icon
          name="times-circle"
          size={25}
          color="white" onPress={onClose}
        /><Good></Good></View> : disp === 1 ? <View><Icon
          name="times-circle"
          size={25}
          color="white" onPress={onClose}
        /><Bad></Bad></View> : disp=== 3?
        <View><Icon
        name="times-circle"
        size={25}
        color="white" onPress={onClose}
      /><Store></Store></View>:
        <View>
              <Text style={{ color: "white", width: "70%", marginLeft: 60, fontSize: 30, marginTop: 40, textAlign: "center", fontWeight: "bold" }}>Declare the past, diagnose the present, foretell the future.</Text>
              <TouchableOpacity onPress={onPress} style={{ height: 100, marginLeft: 60, marginTop: 30, width: "70%", backgroundColor: "#46b3e6", borderRadius: 5 }} >
                <Text style={styles.lbl}><Icon
                  name="heartbeat"
                  size={25}
                  color="white"
                /> Heart Rate</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={myFun} style={{ height: 100, marginLeft: 60, marginTop: 30, width: "70%", backgroundColor: "#46b3e6", borderRadius: 5 }} >
                <Text style={styles.lbl}><Icon
                  name="heartbeat"
                  size={25}
                  color="white"
                /> Cholesterol</Text>
              </TouchableOpacity>
            </View>}
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Pred-X',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#512c96',
  },
  lbl: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 30,
    textAlign: "center"
  }
});
