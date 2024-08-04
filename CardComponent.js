import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CardComponent = () => {
    const data = [
        { id: 1, header: 'Item 1', description: 'Description for item 1' },
        { id: 2, header: 'Item 2', description: 'Description for item 2' },
    ];

    return (
        <ScrollView style={styles.container}>
            {data.map((item) => (
                <View key={item.id} style={styles.card}>
                    <Text style={styles.header}>{item.header}</Text>
                    <Text>{item.description}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default CardComponent;


