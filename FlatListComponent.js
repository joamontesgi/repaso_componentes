import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const FlatListComponent = () => {
    const data = [
        { key: '1', value: 'Item 1' },
        { key: '2', value: 'Item 2' },
        { key: '3', value: 'Item 3' },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default FlatListComponent;
