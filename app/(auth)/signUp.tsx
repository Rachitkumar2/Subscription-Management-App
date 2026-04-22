import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signUp = () => {
  return (
    <View>
      <Text>signUp</Text>
      <Link href="/(auth)/signUp">SignIn</Link>
    </View>
  )
}

export default signUp