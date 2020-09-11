import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import { RNEssentialz } from 'rn-essentialz';

interface IState {
}

export default class Tab extends React.Component<RNEssentialz.Tab, IState> {
    constructor(props: RNEssentialz.Tab) {
        super(props);
    }

    getDefaultStyle() {
        const { style } = this.props;

        return {
            padding: 0,
            width: '100%',
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            ...style as any,
        } as StyleProp<ViewStyle>;
    }

    renderChildren() {
        const { children } = this.props;

        if (!children) return null;

        if (Array.isArray(children)) {
            return React.Children.map(children, (c: any, i) =>
                c ? React.cloneElement(c, {
                    parentElement: this,
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