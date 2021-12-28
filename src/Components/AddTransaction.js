import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import {
  Container,
  Content,
  Form,
  Item,
  Input
} from 'native-base'
import { NativeBaseProvider, Box } from 'native-base';


function AddTransaction() {
  return (
    <NativeBaseProvider>
      <Container>
        <Text>
          asdasdasd
        </Text>
      </Container>
    </NativeBaseProvider>

  )
}

const styles = StyleSheet.create({

  item: {
    marginVertical: 20,
  }
})

export default AddTransaction