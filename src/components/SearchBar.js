import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search..." 
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        height: 50,
        width: '85%',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    inputStyle: { 
        fontSize: 16,
        flex: 1,
        borderBottomWidth: 1,
        marginBottom: 10,
        marginRight: 10,
    },
})

export default SearchBar;