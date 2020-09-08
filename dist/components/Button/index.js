import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Icon } from '../../';
import SpinAnimation from '../../animations/spin';
export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touched: false,
        };
        this.setTouched = this.setTouched.bind(this);
        this.nativeOnPress = this.nativeOnPress.bind(this);
        this.nativeOnPressIn = this.nativeOnPressIn.bind(this);
        this.nativeOnPressOut = this.nativeOnPressOut.bind(this);
    }
    setTouched(touched) {
        this.setState({ touched });
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
        const { fullWidth, loading } = this.props;
        const { touched } = this.state;
        return {
            backgroundColor: `rgba(49,49,49,1)`,
            padding: this.getDefaultStyleProp(20, 12, 20),
            width: fullWidth ? 'auto' : this.getDefaultStyleProp(275, 200, 350),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            opacity: (touched || loading) ? 0.5 : 1,
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
        const { icon, loading } = this.props;
        if (icon) {
            return (React.createElement(Text, { style: {
                    ...this.getDefaultIconStyle()
                } }, icon));
        }
        if (loading) {
            const styles = {
                ...this.getDefaultIconStyle(),
                fontSize: this.getDefaultStyleProp(16, 12, 20),
                lineHeight: 16,
                textAlign: 'center',
                position: 'relative',
                marginRight: 0,
            };
            return (React.createElement(View, { style: { marginRight: 10 } },
                React.createElement(SpinAnimation, { time: 1200 },
                    React.createElement(Icon, { style: styles, name: "fa-spinner", type: "fas" }))));
        }
        return null;
    }
    nativeOnPress(e) {
        const { onPress } = this.props;
        if (onPress)
            onPress(e);
    }
    nativeOnPressIn(e) {
        const { onPressIn } = this.props;
        this.setTouched(true);
        if (onPressIn)
            onPressIn(e);
    }
    nativeOnPressOut(e) {
        const { onPressOut } = this.props;
        this.setTouched(false);
        if (onPressOut)
            onPressOut(e);
    }
    render() {
        const { children } = this.props;
        const { touched } = this.state;
        const defaultStyle = this.getDefaultStyle();
        const defaultTextStyle = this.getDefaultTextStyle();
        return (React.createElement(TouchableWithoutFeedback, { onPress: this.nativeOnPress, onPressIn: this.nativeOnPressIn, onPressOut: this.nativeOnPressOut },
            React.createElement(View, { style: {
                    ...defaultStyle
                } },
                this.renderIcon(),
                React.createElement(Text, { style: {
                        ...defaultTextStyle
                    } }, typeof children === "string" ? children.toUpperCase() : null))));
    }
}
