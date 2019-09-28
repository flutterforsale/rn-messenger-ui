import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Image, StyleSheet, Linking } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';
import NotificationHeader from './components/Header';

export default class NotifyListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        Navigation.mergeOptions(this.props.componentId, {
            bottomTab: {
                badge: '1'
            }
        });
    }

    render() {
        return (
            <Container>
                <NotificationHeader />
                <Content contentContainerStyle={styles.content} scrollEnabled={false}>
                    <Image
                        resizeMode={'contain'}
                        style={{ width: 280, height: 280 }}
                        source={require('../../assets/gift.png')}></Image>
                    <Button
                        onPress={() => Linking.openURL('https://www.buymeacoffee.com/flutterforsale')}
                        style={styles.button}>
                        <Text uppercase={false}>Buy me a coffee :)</Text>
                    </Button>
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
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    button: {
        backgroundColor: '#ffa502',
        paddingHorizontal: 20,
        elevation: 0
    }
})
