import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

// Form Validation
const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, "Minimum password length is 4 characters")
  .max(16, "Maximum password length is 16 characters")
  .required("Password is required"),
})


export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})