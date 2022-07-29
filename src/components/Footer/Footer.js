import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'


export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>M.Talha &copy; All Right Reserved. 2022</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor:"#00b4d8",
        paddingVertical:10
    },
    text:{
        textAlign:"center",
        color:"white",
        fontWeight:"bold"
    }
})
