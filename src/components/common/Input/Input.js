'use strict';

import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './style';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                underlineColorAndroid='transparent'
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View> 
    );
};

export { Input }

