import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <View
                    style={{
                        backgroundColor: '#000'
                    }}
                >
                    <Text>Button</Text>
                </View>
            </TouchableOpacity>
        );
    }
}