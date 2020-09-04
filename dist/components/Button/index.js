import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
export default class Button extends React.Component {
    render() {
        return (React.createElement(TouchableOpacity, null,
            React.createElement(View, { style: {
                    backgroundColor: '#000'
                } },
                React.createElement(Text, null, "Button"))));
    }
}
