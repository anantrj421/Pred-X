import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import safe from '../assets/images/safer.jpeg'

const Good = () => {
    return (
        <View>
            <Image source={safe} style={styles.bad}></Image>
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
})
export default Good