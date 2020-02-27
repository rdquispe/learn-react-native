import React, { Component } from 'react';
import { SectionList, Text, StyleSheet } from 'react-native';

const sections = [
    {
        id: 0,
        title: 'February 18th',
        data: [
            { id: 0, text: 'Near Ayura Center' },
            { id: 1, text: 'Near Ayura Center' },
            { id: 2, text: 'Near Ayura Center' },
        ]
    },
    {
        id: 1,
        title: 'February 17th',
        data: [
            { id: 3, text: 'Near Ayura Center' },
            { id: 4, text: 'Near Ayura Center' },
            { id: 5, text: 'Near Ayura Center' },
            { id: 6, text: 'Near Ayura Center' },
            { id: 7, text: 'Near Ayura Center' },
        ]
    },
    {
        id: 2,
        title: 'February 16th',
        data: [
            { id: 8, text: 'Near Ayura Center' },
            { id: 9, text: 'Near Ayura Center' },
        ]
    }
]

const extractKey = ({ id }) => id

export default class SectionListDays extends Component {

    renderItem = ({ item }) => {
        return (
            <Text style={styles.row}>
                {item.text}
            </Text>
        )
    }

    renderSectionHeader = ({ section }) => {
        return (
            <Text style={styles.header}>
                {section.title}
            </Text>
        )
    }

    render() {
        return (
            <SectionList
                style={styles.container}
                sections={sections}
                renderItem={this.renderItem}
                renderSectionHeader={this.renderSectionHeader}
                keyExtractor={extractKey}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
    header: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'steelblue',
        color: 'white',
        fontWeight: 'bold',
    },
})
