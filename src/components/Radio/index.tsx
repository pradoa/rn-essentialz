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
        const firstElement = (this as any).props.firstElement;
        const parentElement = (this as any).props.parentElement;
        const parentElementProps = (parentElement.props) as RNEssentialz.RadioGroup;
        const selected = parentElementProps.value === this.props.value;

        return {
            backgroundColor: selected ? `rgba(49,49,49,1)` : `transparent`,
            padding: this.getDefaultStyleProp(20, 12, 20),
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: 0,
            borderBottomColor: `rgba(49,49,49,1)`,
            borderTopWidth: firstElement ? 0 : 2,
        } as StyleProp<ViewStyle>;
    }

    getDefaultTextStyle() {
        const { textStyle } = this.props;
        const parentElement = (this as any).props.parentElement;
        const parentElementProps = (parentElement.props) as RNEssentialz.RadioGroup;
        const selected = parentElementProps.value === this.props.value;

        return {
            color: selected ? `#fff` : `rgba(49,49,49,1)`,
            fontSize: this.getDefaultStyleProp(16, 12, 20),
            fontWeight: '600',
            ...textStyle as any,
        } as StyleProp<TextStyle>;
    }

    render() {
        const { children } = this.props;
        const parentElement = (this as any).props.parentElement;
        if (!parentElement) return null;

        const defaultStyle = this.getDefaultStyle();
        const defaultTextStyle = this.getDefaultTextStyle();

        return (
            <TouchableOpacity
                onPress={(e) => {
                    const parentElementProps = (parentElement.props) as RNEssentialz.RadioGroup;
                    return parentElementProps.onChange ? parentElementProps.onChange(this.props.value) : null;
                }}
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