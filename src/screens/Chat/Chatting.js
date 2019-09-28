import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Container, Content } from 'native-base';
import ConversationHeader from './components/ConversationHeader';

export default class ChattingScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer!',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: require('../../assets/avatar/me.jpg'),
                    },
                },
            ],
        }
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <Container>
                <ConversationHeader componentId={this.props.componentId} />
                <Content contentContainerStyle={styles.content} scrollEnabled={false}>
                    <GiftedChat
                        messages={this.state.messages}
                        onSend={messages => this.onSend(messages)}
                        user={{
                            _id: 1,
                        }}
                        bottomOffset={20}
                    />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    content: {
        flex: 1,
        //justifyContent: 'center', alignItems: 'center'
    },
    message: {
        marginTop: 15,
        color: '#212121',
        fontSize: 14,
        lineHeight: 22,
        marginHorizontal: 80,
        textAlign: 'center'
    }
})
