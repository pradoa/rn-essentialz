import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import { RNEssentialz } from 'rn-essentialz';

interface IState {
}

export default class Col extends React.Component<RNEssentialz.Col, IState> {
    constructor(props: RNEssentialz.Col) {
        super(props);
    }

    getDefaultStyle() {
        const { style, size } = this.props;
        const parentElement = (this as any).props.parentElement;
        let defaultSpacing = (parentElement && parentElement.props.spacing) || parentElement.props.spacing === 0 ? parentElement.props.spacing : 10;
        const halfSpacing = defaultSpacing / 2;
        const finalSpacing = halfSpacing / 2;

        return {
            width: `${size}%`,
            padding: halfSpacing,
            marginTop: finalSpacing * -1,
            marginBottom: finalSpacing * - 1,
            ...style as any,
        } as StyleProp<ViewStyle>;
    }

    render() {
        const { children } = this.props;

        const defaultStyle = this.getDefaultStyle();

        return (
            <View
                style={{
                    ...defaultStyle as any
                }}
            >
                {children}
            </View>
        );
    }
}