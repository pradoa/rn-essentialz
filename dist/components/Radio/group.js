import React from 'react';
import { View } from 'react-native';
export default class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getDefaultStyleProp(defaultValue, smallValue, largeValue) {
        let value = defaultValue;
        const { size } = this.props;
        if (size === 'small')
            value = smallValue;
        if (size === 'large')
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
    renderChildren() {
        const { children } = this.props;
        if (!children)
            return null;
        if (Array.isArray(children)) {
            return React.Children.map(children, (c, i) => c ? React.cloneElement(c, {
                parentElement: this,
            }) : c);
        }
        return children;
    }
    render() {
        const defaultStyle = this.getDefaultStyle();
        return (React.createElement(View, { style: {
                ...defaultStyle
            } }, this.renderChildren()));
    }
}
