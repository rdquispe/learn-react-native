import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class RandomUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('https://randomuser.me/api/?results=30')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.results,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }



    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatList
                    data={this.state.dataSource}
        renderItem={({ item }) => <Text>{item.name.title}, {item.name.first}, {item.name.last}, {item.location.country}</Text>}
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        );
    }
}
