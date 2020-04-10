import * as WebBrowser from 'expo-web-browser';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Docmail from '../components/Docmail'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  const [ch, setCh] = useState({
    c:0
  })
  const {c} = ch
  const docMail = ()=> {
    setCh({
      ...ch,
      c: 3
    })
  }
  const onClose = () => {
    setCh({
      ...ch,
      c: 0
    })
  }
  return (
    <View style={styles.container}>
      {c===0?<View><TouchableOpacity style={{ height: 100, marginLeft:60, marginTop: 30, width:"70%", backgroundColor: "#46b3e6", borderRadius: 5 }}>
      <Text style={styles.lbl} ><Icon
          name="clipboard"
          size={25}
          color="white" onPress={onClose}
        />  Appointments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 100, marginLeft:60,  marginTop: 30, width:"70%", backgroundColor: "#46b3e6", borderRadius: 5 }} >
        <Text style={styles.lbl}><Icon
          name="shopping-cart"
          size={25}
          color="white" onPress={onClose}
        /> Medical Store</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={docMail} style={{ height: 100, marginLeft:60,  marginTop: 30, width:"70%", backgroundColor: "#46b3e6", borderRadius: 5 }}>
        <Text style={styles.lbl}><Icon
          name="hospital-o"
          size={25}
          color="white" onPress={onClose}
        /> Doctor's opinion</Text>
      </TouchableOpacity></View>:c===3?<View><Icon
          name="times-circle"
          size={25}
          color="white" onPress={onClose}
        /><Docmail></Docmail></View>:<View></View>
      }
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'More'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#512c96',
    paddingTop: 15
  },
  lbl: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 30,
    textAlign:"center"
  }
});
