import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    Button,
    Container,
    CheckBox,
    Body,
    Right,
    Center
} from 'native-base'
import Animated from 'react-native-reanimated'

const HomeScreen = () => {
    return (
        <Animated.View style={{
            flex:1,
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 20,
        }}>
        <LinearGradient 
        colors={['#FAAD3D', '#EFC90A', '#f1cb0c']}
        style={{...styles.Box}}
        >
        </LinearGradient>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    Box:{
        width: '100%',
        height: 189,
        borderRadius:15,
        flexDirection: 'row',
        padding: 22
    }
})

export default HomeScreen