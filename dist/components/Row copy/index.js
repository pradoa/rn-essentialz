import React from 'react';
import { View } from 'react-native';
export default class Row extends React.Component {
    constructor(props) {
        super(props);
    }
    getDefaultStyle() {
        const { style, spacing, centered } = this.props;
        let defaultSpacing = spacing ? spacing : 10;
        const halfSpacing = defaultSpacing / 2;
        return {
            padding: halfSpacing,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: centered ? 'center' : 'flex-start',
            flexWrap: 'wrap',
            ...style,
        };
    }
    getDefaultWrapperStyle() {
        const { spacing } = this.props;
        let defaultSpacing = spacing ? spacing : 10;
        const halfSpacing = defaultSpacing / 2;
        return {
            width: '100%',
            marginLeft: halfSpacing * -1,
            marginRight: halfSpacing * -1,
            marginTop: halfSpacing * -1,
            marginBottom: halfSpacing * -1,
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
        const wrapperStyle = this.getDefaultWrapperStyle();
        return (React.createElement(View, { style: {
                ...wrapperStyle
            } },
            React.createElement(View, { style: {
                    ...defaultStyle
                } }, this.renderChildren())));
    }
}
