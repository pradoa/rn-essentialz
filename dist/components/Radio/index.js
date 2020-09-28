import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
export default class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getDefaultStyleProp(defaultValue, smallValue, largeValue) {
        let value = defaultValue;
        const parentElement = this.props.parentElement;
        const parentElementProps = (parentElement.props);
        const { size } = parentElementProps;
        if (size === 'small')
            value = smallValue;
        if (size === 'large')
            value = largeValue;
        return value;
    }
    getDefaultStyle() {
        return {
            backgroundColor: `rgba(49,49,49,1)`,
            padding: this.getDefaultStyleProp(20, 12, 20),
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: this.getDefaultStyleProp(5, 5, 5),
        };
    }
    getDefaultTextStyle() {
        const { textStyle } = this.props;
        return {
            color: '#fff',
            fontSize: this.getDefaultStyleProp(16, 12, 20),
            fontWeight: '600',
            ...textStyle,
        };
    }
    getDefaultIconStyle() {
        const { textStyle } = this.props;
        return {
            color: '#fff',
            marginRight: 10,
            ...textStyle,
        };
    }
    render() {
        const { children, onPress, onPressIn, onPressOut } = this.props;
        const defaultStyle = this.getDefaultStyle();
        const defaultTextStyle = this.getDefaultTextStyle();
        return (React.createElement(TouchableOpacity, Object.assign({}, { onPress, onPressIn, onPressOut }),
            React.createElement(View, { style: {
                    ...defaultStyle
                } },
                React.createElement(Text, { style: {
                        ...defaultTextStyle
                    } }, typeof children === "string" ? children.toUpperCase() : null))));
    }
}
