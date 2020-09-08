import React from 'react';
import { Text } from 'react-native';
import { parseIconFromClassName, IconTypes, } from './Icon';
export default class Icon extends React.Component {
    constructor(props) {
        super(props);
    }
    getDefaultStyleProp(defaultValue, values) {
        let value = defaultValue;
        return value;
    }
    getDefaultTextStyle() {
        const { style, type, size } = this.props;
        return {
            fontSize: size ? size : 12,
            ...style,
            fontFamily: IconTypes[type],
        };
    }
    render() {
        const { children, name } = this.props;
        const defaultTextStyle = this.getDefaultTextStyle();
        const parsedIconBefore = parseIconFromClassName(name);
        const parsedIcon = parseIconFromClassName(name, true);
        return (React.createElement(Text, { style: {
                ...defaultTextStyle
            } }, parsedIcon));
    }
}
