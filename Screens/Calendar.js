import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Calendar({navigation}) {

  const [v, setV] = useState(0)
  useEffect(() => {
    setV(73);
    
    return () => {
      setV(0);
    }
  }, [])
  
  return (
    <View style={styles.container}>
      <Button 
        title='--'
        onPress={() => {setV(v-1)}}
      />

      <Text style={styles.text}>{v}</Text>

      <Button
        title='++'
        onPress={() => {setV(v+1)}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
  }
});