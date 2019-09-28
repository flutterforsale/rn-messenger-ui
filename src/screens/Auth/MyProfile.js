import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, ListItem, Text, Separator, Right, Icon, Body, Badge } from 'native-base';
import _ from 'lodash';
import AuthAvatar from './components/AuthAvatar';
import AuthHeader from './components/AuthHeader';

export default class AccountProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() { }

    render() {

        return (
            <Container style={styles.container}>
                <AuthHeader {...this.props} />
                <Content contentContainerStyle={styles.content}>
                    <AuthAvatar />
                    <Separator bordered>
                        <Text>Account</Text>
                    </Separator>
                    <ListItem icon>
                        <Body>
                            <Text style={styles.title}>Username</Text>
                        </Body>
                        <Right>
                            <Text style={styles.note}>@hungdalat</Text>
                            <Icon active name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                            <Text style={styles.title}>Gender</Text>
                        </Body>
                        <Right>
                            <Text style={styles.note}>Male</Text>
                            <Icon active name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem last icon>
                        <Body>
                            <Text style={styles.title}>Email</Text>
                        </Body>
                        <Right>
                            <Text style={styles.note}>flutterforsale@gmail.com</Text>
                            <Icon active name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <Separator bordered>
                        <Text>Settings</Text>
                    </Separator>
                    <ListItem icon>
                        <Body>
                            <Text style={styles.title}>Notification</Text>
                        </Body>
                        <Right>
                            <Icon active name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                            <Text style={styles.title}>Privacy and Security</Text>
                        </Body>
                        <Right>
                            <Icon active name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                            <Text style={styles.title}>Language</Text>
                        </Body>
                        <Right>
                            <Icon active name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                            <Text style={styles.title}>Chat Settings</Text>
                        </Body>
                        <Right>
                            <Icon active name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem last icon>
                        <Body>
                            <Text style={styles.title}>Help</Text>
                        </Body>
                        <Right>
                            <Icon active name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
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
        //marginTop: -150,
    },
    title: {
        color: '#4B4B4C',
    },
    note: {
        fontSize: 14
    }
});
