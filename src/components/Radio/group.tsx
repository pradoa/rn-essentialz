import React from 'react';
import { View, TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { RNEssentialz } from 'rn-essentialz';

interface IState {
}

export default class RadioGroup extends React.Component<RNEssentialz.RadioGroup, IState> {
    constructor(props: RNEssentialz.RadioGroup) {
        super(props);

        this.state = {
        };
    }

    getDefaultStyleProp(defaultValue: any, smallValue: any, largeValue: any) {
        let value = defaultValue;
        const { size } = this.props;
        if (size === 'small') value = smallValue;
        if (size === 'large') value = largeValue;
        return value;
    }

    getDefaultStyle() {
        const { fullWidth } = this.props;

        return {
            padding: 0,
            width: fullWidth ? '100%' : this.getDefaultStyleProp(275, 200, 350),
            flexDirection: 'column',
            borderRadius: this.getDefaultStyleProp(5, 5, 5),
            borderColor: `rgba(49,49,49,1)`,
            borderWidth: 2,
        } as StyleProp<ViewStyle>;
    }

    renderChildren() {
        const { children } = this.props;

        if (!children) return null;

        if (Array.isArray(children)) {
            return React.Children.map(children, (c: any, i) =>
                c ? React.cloneElement(c, {
                    parentElement: this,
                    firstElement: i === 0
                }) : c
            );
        }

        return children;
    }

    render() {
        const defaultStyle = this.getDefaultStyle();

        return (
            <View
                style={{
                    ...defaultStyle as any
                }}
            >
                {this.renderChildren()}
            </View>
        );
    }
}