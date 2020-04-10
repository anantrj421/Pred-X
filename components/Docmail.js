import React, {useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import axios from 'axios'
const Docmail = () => {
    const [ml, setMl] = useState({
        sent: 0,
        body: ""
    })
    const {sent, body} = ml
    const onChange = (e) => {
        setMl({
            ...ml,
            body: e
        })
    }
    const sendMail = async() => {
        await axios.post('https://fapimail.p.rapidapi.com/email/send',
            {
                recipient: 'anant.rj.421@gmail.com',
                sender: 'axcelblaze.13@gmail.com',
                subject: "Heart Issue",
                message: "Heart rate is 124 bpm "+body,
            },
            {
                headers:
                {
                    'x-rapidapi-host': 'fapimail.p.rapidapi.com',
                    'x-rapidapi-key': 'eb378e65dfmsh2709d2ee1e0b591p193b92jsn1820d2d36ffc',
                    'content-type': 'application/json',
                    accept: 'application/json'
                }
            }
        )
        setMl({
            ...ml,
            sent: 1
        })
    }
    return (
        <View>
            {
                sent===0?
                <View>
            <Text style={styles.ttl}>Add to Mail</Text>
            <TextInput style={styles.inp} onChangeText={onChange} value={body}></TextInput>
            <View style={{ width: 200, marginLeft: 80 }}>
                <Button title="Submit" onPress={sendMail}></Button>
            </View>
        </View>
        :<View style={{marginLeft: 70}}><Text style={{color:"white", fontWeight:"bold", fontSize:50}}>Mail Sent</Text></View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    ttl: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 40,
        color: "white"
    },
    inp: {
        color: "black",
        width: "75%",
        backgroundColor: "white",
        marginTop: 20,
        marginLeft: 40,
        marginBottom: 40,
        height: 200
    }
})
export default Docmail