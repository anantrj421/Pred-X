import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import img1 from '../assets/images/1st.jpg'
import img2 from '../assets/images/2nd.jpg'
import img3 from '../assets/images/3rd.png'
import img4 from '../assets/images/4th.jpg'
const Store = () => {

    return (
        <View>
            <ScrollView>
                <Text style={styles.ttl}>Cholesterol (mg/dL) : 238</Text>
                <Image source={img1} style={styles.inp}></Image>
                <Icon style={{marginLeft:170}} name="arrow-down" size={25} color="white" />
                <Image source={img2} style={styles.inp}></Image>
                <Icon style={{marginLeft:170}} name="arrow-down" size={25} color="white" />
                <Image source={img4} style={styles.inp}></Image>
                <Icon style={{marginLeft:170}} name="arrow-down" size={25} color="white" />
                <Image source={img3} style={styles.inp}></Image>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    ttl: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 20,
        color: "white"
    },
    inp: {
        width: "55%",
        marginTop: 10,
        marginLeft: 80,
        marginBottom: 20,
        height: 100
    }
})
export default Store