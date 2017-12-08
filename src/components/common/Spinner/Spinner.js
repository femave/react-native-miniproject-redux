'use strict';

import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './style';

const Spinner = ({ size }) => {
    return(
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    )
};

export { Spinner };