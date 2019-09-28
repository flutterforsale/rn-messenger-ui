import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text } from 'native-base';
import { Actions } from '@actions';
import { FriendSuggestionDb } from '@database';

export default class FriendSuggestion extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.content}>
                {
                    FriendSuggestionDb.map((item) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.item}
                                onPress={() => Actions.toChatting(this.props.componentId)}>
                                <Image
                                    style={styles.avatar}
                                    source={item.image} />
                                <Text style={styles.name}>{item.user_name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        flexWrap: 'nowrap',
        overflow: 'hidden'
    },
    item: {
        marginRight: 15,
        alignItems: 'center'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    name: {
        fontSize: 15,
        marginTop: 3,
        textAlign: 'center'
    },
    icon: {
        marginTop: 5,
        fontSize: 18
    }
})
