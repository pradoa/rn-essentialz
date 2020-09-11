import React from 'react';
import { View } from 'react-native';
export default class Tab extends React.Component {
    constructor(props) {
        super(props);
    }
    getDefaultStyle() {
        const { style } = this.props;
        return {
            padding: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            ...style,
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
