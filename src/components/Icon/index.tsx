import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import { RNEssentialz } from 'rn-essentialz';
import {
    parseIconFromClassName,
    IconTypes,
} from './Icon';

interface IState {
}

export default class Icon extends React.Component<RNEssentialz.Icon, IState> {
    constructor(props: RNEssentialz.Icon) {
        super(props);
    }

    getDefaultStyleProp(defaultValue: any, values: any[]) {
        let value = defaultValue;
        return value;
    }

    getDefaultTextStyle() {
        const { style, type, size } = this.props;

        return {
            fontSize: size ? size : 12,
            ...style as any,
            fontFamily: IconTypes[type],
        } as StyleProp<TextStyle>;
    }

    render() {
        const { children, name } = this.props;

        const defaultTextStyle = this.getDefaultTextStyle();

        const parsedIconBefore: any = parseIconFromClassName(name);
        const parsedIcon: any = parseIconFromClassName(name, true);

        return (
            <Text
                style={{
                    ...defaultTextStyle as any
                }}
            >
                {parsedIcon}
            </Text>
        );
    }
}