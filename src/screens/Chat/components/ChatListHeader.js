import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Header, Left, Body, Right, Button, Icon, Thumbnail } from 'native-base';
import { Actions } from '@actions';

export default class ChatListHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { componentId } = this.props;
        return (
            <Header
                iosBarStyle={'dark-content'}
                androidStatusBarColor={'#fff'}
                noLeft
                style={styles.header}>
                <Body style={{ paddingLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => Actions.toMyProfile()}>
                        <Thumbnail
                            style={{ width: 40, height: 40 }}
                            source={require('../../../assets/avatar/me.jpg')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Chat</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon style={[styles.icon, { fontSize: 30 }]} name='ios-camera' />
                    </Button>
                    <Button transparent>
                        <Icon style={styles.icon} name='md-more' />
                    </Button>
                </Right>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff'
    },
    title: {
        color: '#000',
        fontWeight: '700',
        fontSize: 25,
        marginLeft: 15
    },
    icon: {
        color: '#000'
    }
})
