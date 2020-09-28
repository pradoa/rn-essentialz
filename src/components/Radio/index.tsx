import React from 'react';
import { View, TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { RNEssentialz } from 'rn-essentialz';

interface IState {
}

export default class Radio extends React.Component<RNEssentialz.Radio, IState> {
    constructor(props: RNEssentialz.Radio) {
        super(props);

        this.state = {
        };
    }

    getDefaultStyleProp(defaultValue: any, smallValue: any, largeValue: any) {
        let value = defaultValue;
        const parentElement = (this as any).props.parentElement;
        const parentElementProps = (parentElement.props) as RNEssentialz.RadioGroup;
        const { size } = parentElementProps;
        if (size === 'small') value = smallValue;
        if (size === 'large') value = largeValue;
        return value;
    }

    getDefaultStyle() {
        return {
            backgroundColor: `rgba(49,49,49,1)`,
            padding: this.getDefaultStyleProp(20, 12, 20),
            width: '100%',
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