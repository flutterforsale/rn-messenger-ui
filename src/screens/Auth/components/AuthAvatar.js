import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'native-base';
import _ from 'lodash';
import { Colors, Screens } from '@utils';

export default class ProfileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        activeOpacity={0.8}>
                        <Image
                            style={styles.avatar}
                            source={require('../../../assets/avatar/me.jpg')} />
                    </TouchableOpacity>
                    <Text style={styles.name}>fb.com/hungdalat</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#7000e3'// Color.primary
    },
    header: {
        width: Screens.width,
        height: 200,
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 160, height: 160,
        borderRadius: 80
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.primary,
        lineHeight: 20,
        marginTop: 10
    },
});
