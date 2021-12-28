import React, { version } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ViewPropTypes,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Container,
  CheckBox,
  Body,
  Right,
  Center
} from 'native-base'
import Animated from 'react-native-reanimated'

const HomeScreen = ({ navigation }) => {
  return (
    <Animated.View style={{
      flex: 1,
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    }
    }>
      <LinearGradient
        colors={['#FAAD3D', '#EFC90A', '#f1cb0c']}
        style={{ ...styles.Box }}>
        <View
          style={{
            width: '70%',
            alignItems: 'flex-start'
          }}>
          <Text
            style={{
              fontSize: 15,
              color: '#fff',
              fontFamily: 'Lato-Regular',
              fontWeight: '600',
            }}>
            Current Balance
          </Text>
          <Text
            style={{
              fontSize: 32,
              fontFamily: 'Lato-Medium',
              color: '#fff',
              fontWeight: '700',
            }}>
            $5,477.85
          </Text>
          <Text
            style={{
              marginTop: 67,
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Lato-Regular',
              fontWeight: '700',
            }}>
            4234 **** **** 6533
          </Text>
        </View>

        <View style={{ alignItems: 'flex-end', width: '30%', }}>
          <Text style={{ fontSize: 18, color: '#fff', fontWeight: '700' }}>
            NGN
          </Text>

          <View style={{ flex: 1 }}>
            <Button rounded light
              style={{
                padding: 10,
                marginTop: 32,
                borderWidth: 3,
                borderColor: '#fff',
                backgroundColor: '#E10C62',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title='button'

              // con esto vamos de una pagina a otra
              onPress={() => {
                navigation.navigate('Add')
              }}>
            </Button>

            <Text style={{ marginTop: 17, color: '#fff', fontSize: 15, fontWeight: '700', }}>
              Expense
            </Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700', }}>
              $200000
            </Text>
          </View>
        </View>
      </LinearGradient>
    </Animated.View >
  )
}

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 189,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22
  }
})

export default HomeScreen