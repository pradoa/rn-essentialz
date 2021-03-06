import React from 'react';
import { View } from 'react-native';
export default class Col extends React.Component {
    constructor(props) {
        super(props);
    }
    getDefaultStyle() {
        const { style, size } = this.props;
        const parentElement = this.props.parentElement;
        let defaultSpacing = (parentElement && parentElement.props.spacing) || parentElement.props.spacing === 0 ? parentElement.props.spacing : 10;
        const halfSpacing = defaultSpacing / 2;
        const finalSpacing = halfSpacing / 2;
        return {
            ...style,
            width: `${size}%`,
            paddingLeft: halfSpacing,
            paddingRight: halfSpacing,
            paddingTop: halfSpacing,
            paddingBottom: halfSpacing,
        };
    }
    render() {
        const { children } = this.props;
        const defaultStyle = this.getDefaultStyle();
        return (React.createElement(View, { style: {
                ...defaultStyle
            } }, children));
    }
}
