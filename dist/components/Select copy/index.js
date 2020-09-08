import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectOpen: false
        };
    }
    getDefaultStyleProp(defaultValue, smallValue, largeValue) {
        let value = defaultValue;
        const { small, large } = this.props;
        if (small)
            value = smallValue;
        if (large)
            value = largeValue;
        return value;
    }
    getDefaultStyle() {
        const { fullWidth } = this.props;
        return {
            backgroundColor: `rgba(49,49,49,1)`,
            padding: this.getDefaultStyleProp(20, 12, 20),
            width: fullWidth ? 'auto' : this.getDefaultStyleProp(275, 200, 350),
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
    renderIcon() {
        const { icon } = this.props;
        if (icon) {
            return (React.createElement(Text, { style: {
                    ...this.getDefaultIconStyle()
                } }, icon));
        }
        return null;
    }
    render() {
        const { children, onPress, onPressIn, onPressOut } = this.props;
        const defaultStyle = this.getDefaultStyle();
        const defaultTextStyle = this.getDefaultTextStyle();
        return (React.createElement(TouchableOpacity, Object.assign({}, { onPress, onPressIn, onPressOut }),
            React.createElement(View, { style: {
                    ...defaultStyle
                } },
                this.renderIcon(),
                React.createElement(Text, { style: {
                        ...defaultTextStyle
                    } }, typeof children === "string" ? children.toUpperCase() : null))));
    }
}
