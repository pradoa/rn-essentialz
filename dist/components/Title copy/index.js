import React from 'react';
import { Text } from 'react-native';
export default class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    getDefaultStyleProp(defaultValue, values) {
        let value = defaultValue;
        const { level } = this.props;
        if (level > 0) {
            value = values.length >= level ? values[level - 1] : value;
        }
        return value;
    }
    getDefaultTextStyle() {
        const { style } = this.props;
        return {
            color: '#333',
            fontSize: this.getDefaultStyleProp(16, [32, 28, 24, 20, 16, 12]),
            fontWeight: '700',
            marginBottom: 20,
            ...style,
        };
    }
    render() {
        const { children } = this.props;
        const defaultTextStyle = this.getDefaultTextStyle();
        return (React.createElement(Text, { style: {
                ...defaultTextStyle
            } }, children));
    }
}
