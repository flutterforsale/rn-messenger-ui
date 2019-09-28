import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';
import { Actions } from '@actions';

export default class ConversationItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { data } = this.props;
        return (
            <ListItem
                avatar
                onPress={() => Actions.toChatting(this.props.componentId)}>
                <Left>
                    <Thumbnail source={data.image} />
                </Left>
                <Body>
                    <Text>{data.user_name}</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>3:43 pm</Text>
                    <Icon style={styles.icon} name={'ios-checkmark-circle'} />
                </Right>
            </ListItem>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        marginTop: 5,
        fontSize: 18
    }
})
