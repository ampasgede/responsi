import React, {useState} from 'react'
import { Button, Text, View } from 'react-native'

const Countnumber = () => {
   const [number, setNumber] = useState(0)
   const [motor, setMotor] = useState("Vario")


  return (
    <View>
        <Text style={StyleSheet.text}>{number}</Text>
        <Button title="Tambah" onPress={() => setNumber(number+1)}/>
        <Button title="Reset" onPress={() => setNumber(0) } color={red}/>
    </View>
  )
}

export default Countnumber