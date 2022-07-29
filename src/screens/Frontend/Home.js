import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.flexContainer}>
      <View style={[styles.box, { marginBottom: 20 }]}>
        <Text style={styles.h1}>Home</Text>
      </View>
      <Button title='Go to Contact' onPress={() => { navigation.navigate("Contact") }} />
    </View>
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: " white",
    flex: 1

  },
  h1: {
    fontSize: 48,
    fontWeight: "bold",
    // textAlign:"center",
    color: "white",

  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "#3bceac",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "#d00000"
  }
})