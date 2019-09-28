import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import ChatListHeader from './components/ChatListHeader';
import ConversationItem from './components/ConversationItem';
import FriendSuggestion from './components/FriendSuggestion';
import { ConversationsDb } from '@database';

export default class ChatListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <ChatListHeader />
                <Content>
                    <FriendSuggestion {...this.props} />
                    {
                        ConversationsDb.map((item) => {
                            return (
                                <ConversationItem key={item.id} data={item} {...this.props} />
                            )
                        })
                    }
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})
