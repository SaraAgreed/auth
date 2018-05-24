import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ( {label, value, onChangeText, placeholder,secureTextEntry } ) => {
    const {inputStyle, labelStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor='#D2D7D3'
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid='white'
            />
        </View>
    );
}

const styles ={
    inputStyle: {
        color:'#000',
        paddingLeft:5,
        paddingRight:5,
        fontSize:18,
        lineHeight: 23,   // space between each line of text
        flex:2
    },
    labelStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    containerStyle: {
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
};

export { Input } ;