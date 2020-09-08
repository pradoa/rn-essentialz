import React from 'react';
import { View, TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { RNEssentialz } from 'rn-essentialz';

interface IState {
    selectOpen: boolean;
}

export default class Select extends React.Component<RNEssentialz.Select, IState> {
    constructor(props: RNEssentialz.Select) {
        super(props);

        this.state = {
            selectOpen: false
        };
    }

    getDefaultStyleProp(defaultValue: any, smallValue: any, largeValue: any) {
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
        } as StyleProp<ViewStyle>;
    }

    getDefaultTextStyle() {
        const { textStyle } = this.props;

        return {
            color: '#fff',
            fontSize: this.getDefaultStyleProp(16, 12, 20),
            fontWeight: '600',
            ...textStyle as any,
        } as StyleProp<TextStyle>;
    }

    getDefaultIconStyle() {
        const { textStyle } = this.props;

        return {
            color: '#fff',
            marginRight: 10,
            ...textStyle as any,
        } as StyleProp<TextStyle>;
    }

    renderIcon() {
        const { icon } = this.props;
        if (icon) {
            return (

                <Text
                    style={{
                        ...this.getDefaultIconStyle() as any
                    }}
                >
                    {icon}
                </Text>
            )
        }

        return null;
    }

    render() {
        const { children, onPress, onPressIn, onPressOut } = this.props;

        const defaultStyle = this.getDefaultStyle();
        const defaultTextStyle = this.getDefaultTextStyle();

        return (
            <TouchableOpacity
                {...{ onPress, onPressIn, onPressOut }}
            >
                <View
                    style={{
                        ...defaultStyle as any
                    }}
                >
                    {this.renderIcon()}
                    <Text
                        style={{
                            ...defaultTextStyle as any
                        }}
                    >
                        {}
                        {typeof children === "string" ? (children as string).toUpperCase() : null}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}