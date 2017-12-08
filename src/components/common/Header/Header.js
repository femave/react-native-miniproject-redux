'use strict';

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './style';

const Header = props => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};


export { Header };