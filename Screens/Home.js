import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <Button
        title='Calendar'
        onPress={() => {
          navigation.navigate('Calendar')
        }}
      />
    </View>
  )
}