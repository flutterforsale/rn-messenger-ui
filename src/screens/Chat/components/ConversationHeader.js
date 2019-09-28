import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Header, Left, Body, Right, Button, Icon, Thumbnail } from 'native-base';
import { Actions } from '@actions';

export default class ConversationHeader extends Component {
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
                <Body style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Button transparent
                        onPress={() => Actions.pop(componentId)}>
                        <Icon style={[styles.icon, { fontSize: 28, marginLeft: 0 }]} name='ios-arrow-back' />
                    </Button>
                    <Thumbnail
                        small
                        source={require('../../../assets/avatar/1.jpeg')} />
                    <Text style={styles.title}>Kumar Pratik</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon style={[styles.icon, { fontSize: 25 }]} name='heart' />
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
        fontWeight: '600',
        fontSize: 20,
        marginLeft: 5
    },
    icon: {
        color: '#000'
    }
})
