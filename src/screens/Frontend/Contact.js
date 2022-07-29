import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

export default function Contact({ navigation }) {
  return (
    <View style={styles.flexContainer}>
      <Text style={[styles.h1, { marginBottom: 20 }]}>Contact</Text>
      <Button title='Go to Home' onPress={() => { navigation.navigate("Home") }} />

      <TouchableOpacity
        style={styles.click}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonText} onPress={() => { navigation.navigate("About") }}>Go to About</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    flex: 1

  },
  h1: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    color: 'white'


  },
  click: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "orange",
    marginTop: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fefee3"
  }
})