import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Image, Button, StyleSheet, Dimensions, Linking } from 'react-native'
import danger from '../assets/images/danger1.jpeg'
import safe from '../assets/images/safe.png'
import gify from '../assets/images/giphy.gif'
const Bad = () => {
    const [mp, setMp] = useState({
        s: 0,
        lat: 0,
        lang: 0,
    })
    const { s, lat, lang } = mp
    onPress = () => {
        navigator.geolocation.getCurrentPosition(p => {
            setMp({
                ...mp,
                s: 1,
                lat: p.coords.latitude,
                lang: p.coords.longitude
            })
        })
        setTimeout(
            function () {
                setMp({
                    ...mp,
                    s: 2
                })
            }
            , 10000)
    }
    const callMe = () => {
        let pNo = ""
        pNo = 'tel:${9806797127}'
        Linking.openURL(pNo)

    }
    // useEffect(() => {
    //     // setTimeout(function () {
    //     //     navigator.geolocation.getCurrentPosition(p => {
    //     //         setMp({
    //     //             ...mp,
    //     //             s: 1,
    //     //             lat: p.coords.latitude,
    //     //             lang: p.coords.longitude
    //     //         })
    //     //     })
    //     // }
    //     //     , 2000)
    //     // setTimeout(
    //     //     function () {
    //     //         navigator.geolocation.getCurrentPosition(p => {
    //     //             setMp({
    //     //                 ...mp,
    //     //                 s: 2
    //     //             })
    //     //         })
    //     //     }
    //     //     , 5000)
    //     // setTimeout(
    //     //     function () {
    //     //         navigator.geolocation.getCurrentPosition(p => {
    //     //             setMp({
    //     //                 ...mp,
    //     //                 s: 2
    //     //             })
    //     //         })
    //     //     }
    //     //     , 10000)
    // })

    return (
        <View>
            {s === 0 ?
                <View>
                    <Image source={danger} style={styles.bad}></Image>
                    <Button title="Emergency" onPress={onPress} color="red"></Button>
                </View> : s === 1 ?
                    <View>
                        <MapView
                            initialRegion={{
                                latitude: lat,
                                longitude: lang,
                                latitudeDelta: 0.025,
                                longitudeDelta: 0.025,
                            }}
                            style={{
                                width: "100%",
                                height: 400,
                            }}
                        >
                            <Marker
                                coordinate={{ latitude: lat, longitude: lang }}
                                title={"My Place"}
                            />
                            <Marker
                                coordinate={{ latitude: 13.0283, longitude: 77.5703 }}
                                image={require('../assets/images/map-marker.png')}
                                title="MSR Hospital"
                            />
                            <Marker
                                coordinate={{ latitude: 13.036776, longitude: 77.565814 }}
                                image={require('../assets/images/map-marker.png')}
                                title="Shirdi Sai Hospital"
                            />
                            <Marker
                                coordinate={{ latitude: 13.0323, longitude: 77.5609 }}
                                image={require('../assets/images/map-marker.png')}
                                title="Family Hospital"
                            />
                        </MapView>
                        <View style={{ width: 200, marginLeft: 80, marginTop: 20 }} ><Image source={gify} style={{ width: 50, height: 50, marginLeft: 70 }}></Image><Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 15 }}>Contacting nearest Hospital</Text></View>
                    </View> :
                    <View style={styles.info}><Text style={styles.txt}><Icon
                    name="ambulance"
                    size={25}
                    color="black"
                  /> MSR Hospital has been informed</Text>
                  <Button onPress={callMe} title="Contact"></Button></View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    bad: {
        width: "100%",
        height: 200,
        marginBottom: 20,
        marginTop: 50
    },
    info:{
        marginTop: 20,
        marginLeft: 30,
        width: "80%",
        backgroundColor: "white",
        textAlign: "center"
    },
    txt: {
        textAlign: "center",
        fontSize: 20,
        fontWeight:"bold"
    }
})
export default Bad