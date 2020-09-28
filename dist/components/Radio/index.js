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
        const firstElement = this.props.firstElement;
        const parentElement = this.props.parentElement;
        const parentElementProps = (parentElement.props);
        const selected = parentElementProps.value === this.props.value;
        return {
            backgroundColor: selected ? `rgba(49,49,49,1)` : `transparent`,
            padding: this.getDefaultStyleProp(20, 12, 20),
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: 0,
            borderBottomColor: `rgba(49,49,49,1)`,
            borderTopWidth: firstElement ? 0 : 2,
        };
    }
    getDefaultTextStyle() {
        const { textStyle } = this.props;
        const parentElement = this.props.parentElement;
        const parentElementProps = (parentElement.props);
        const selected = parentElementProps.value === this.props.value;
        return {
            color: selected ? `#fff` : `rgba(49,49,49,1)`,
            fontSize: this.getDefaultStyleProp(16, 12, 20),
            fontWeight: '600',
            ...textStyle,
        };
    }
    render() {
        const { children } = this.props;
        const parentElement = this.props.parentElement;
        if (!parentElement)
            return null;
        const defaultStyle = this.getDefaultStyle();
        const defaultTextStyle = this.getDefaultTextStyle();
        return (React.createElement(TouchableOpacity, { onPress: (e) => {
                const parentElementProps = (parentElement.props);
                return parentElementProps.onChange ? parentElementProps.onChange(this.props.value) : null;
            } },
            React.createElement(View, { style: {
                    ...defaultStyle
                } },
                React.createElement(Text, { style: {
                        ...defaultTextStyle
                    } }, typeof children === "string" ? children.toUpperCase() : null))));
    }
}
