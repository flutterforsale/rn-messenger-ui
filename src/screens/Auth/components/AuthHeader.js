import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Header, Left, Body, Right, Button, Icon, Thumbnail } from 'native-base';
import { Actions } from '@actions';

export default class AuthHeader extends Component {
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
                <Body style={{ paddingLeft: 0, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => Actions.dismissModal(componentId)}>
                        <Icon style={[styles.icon, { paddingLeft: 5 }]} name='ios-arrow-back' />
                        <Text style={styles.title}>Profile</Text>
                    </TouchableOpacity>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon style={[styles.icon, { fontSize: 35 }]} name='ios-camera' />
                    </Button>
                    <Button transparent>
                        <Icon style={[styles.icon, { fontSize: 28 }]} name='ios-create' />
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
