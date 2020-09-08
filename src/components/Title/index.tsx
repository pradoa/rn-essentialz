import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import { RNEssentialz } from 'rn-essentialz';

interface IState {
}

export default class Title extends React.Component<RNEssentialz.Title, IState> {
    constructor(props: RNEssentialz.Title) {
        super(props);
    }

    getDefaultStyleProp(defaultValue: any, values: any[]) {
        let value = defaultValue;
        const { level } = this.props;

        if (level > 0) {
            value = values.length >= level ? values[level - 1] : value;
        }

        return value;
    }

    getDefaultTextStyle() {
        const { style, light, centered } = this.props;

        return {
            color: '#333',
            fontSize: this.getDefaultStyleProp(16, [32, 28, 24, 20, 16, 12]),
            fontWeight: light ? '300' : '700',
            marginBottom: 20,
            ...style as any,
            textAlign: centered ? 'center' : 'auto',
        } as StyleProp<TextStyle>;
    }

    render() {
        const { children } = this.props;

        const defaultTextStyle = this.getDefaultTextStyle();

        return (
            <Text
                style={{
                    ...defaultTextStyle as any
                }}
            >
                {children}
            </Text>
        );
    }
}