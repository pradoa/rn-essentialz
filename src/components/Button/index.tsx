import React from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native';
import { Icon } from '../../';
import SpinAnimation from '../../animations/spin';
import { RNEssentialz } from 'rn-essentialz';

interface IState {
    touched: boolean;
}

export default class Button extends React.Component<RNEssentialz.Button, IState> {
    constructor(props: RNEssentialz.Button) {
        super(props);

        this.state = {
            touched: false,
        };

        this.setTouched = this.setTouched.bind(this);
        this.nativeOnPress = this.nativeOnPress.bind(this);
        this.nativeOnPressIn = this.nativeOnPressIn.bind(this);
        this.nativeOnPressOut = this.nativeOnPressOut.bind(this);
    }

    setTouched(touched: boolean) {
        this.setState({ touched });
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
        const { fullWidth, loading } = this.props;
        const { touched } = this.state;

        return {
            backgroundColor: `rgba(49,49,49,1)`,
            padding: this.getDefaultStyleProp(20, 12, 20),
            width: fullWidth ? '100%' : this.getDefaultStyleProp(275, 200, 350),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            opacity: (touched || loading) ? 0.5 : 1,
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
        const { icon, loading } = this.props;
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

        if (loading) {
            const styles = {
                ...this.getDefaultIconStyle() as any,
                fontSize: this.getDefaultStyleProp(16, 12, 20),
                lineHeight: 16,
                textAlign: 'center',
                position: 'relative',
                marginRight: 0,
            };

            return (
                <View style={{ marginRight: 10 }}>
                    <SpinAnimation time={1200}>
                        <Icon style={styles} name="fa-spinner" type="fas" />
                    </SpinAnimation>
                </View>
            )
        }

        return null;
    }

    nativeOnPress(e: GestureResponderEvent) {
        const { onPress } = this.props;
        if (onPress)
            onPress(e);
    }

    nativeOnPressIn(e: GestureResponderEvent) {
        const { onPressIn } = this.props;

        this.setTouched(true);

        if (onPressIn)
            onPressIn(e);
    }

    nativeOnPressOut(e: GestureResponderEvent) {
        const { onPressOut } = this.props;

        this.setTouched(false);

        if (onPressOut)
            onPressOut(e);
    }

    render() {
        const { children } = this.props;
        const { touched } = this.state;

        const defaultStyle = this.getDefaultStyle();
        const defaultTextStyle = this.getDefaultTextStyle();

        return (
            <TouchableWithoutFeedback
                onPress={this.nativeOnPress}
                onPressIn={this.nativeOnPressIn}
                onPressOut={this.nativeOnPressOut}
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
                        {typeof children === "string" ? (children as string).toUpperCase() : null}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}