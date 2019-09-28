import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Container } from 'native-base';
import Header from './components/Header';
import StoryItem from './components/StoryItem';
import { StoriesDb } from '@database';

export default class StoryListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderRow = (item) => {
        return (
            <StoryItem
                data={item}
                {...this.props} />
        )
    }

    render() {
        return (
            <Container>
                <Header />
                <FlatList
                    data={StoriesDb}
                    renderItem={({ item }) => this.renderRow(item)}
                    keyExtractor={item => String(item.id)}
                    numColumns={2}
                    contentContainerStyle={{ padding: 10 }}
                />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: "space-around"
    }

})
