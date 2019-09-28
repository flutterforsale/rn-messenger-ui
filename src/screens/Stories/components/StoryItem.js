import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'native-base';
import { Screens } from '@utils';

const imageWidth = ((Screens.width - 40) / 2);
const imageHeight = 220;

export default class StoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { data } = this.props;
        return (
            <TouchableOpacity activeOpacity={0.8} style={styles.item}>
                <Image
                    style={styles.image}
                    source={data.image} />
                <Text style={styles.name}>{data.user_name}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        height: imageHeight,
        margin: 5,
        alignItems: 'flex-start'
    },
    image: {
        width: imageWidth,
        height: imageHeight,
        borderRadius: 10
    },
    name: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 10,
        marginTop: -30
    }
})
