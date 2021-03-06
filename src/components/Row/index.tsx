import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import { RNEssentialz } from 'rn-essentialz';

interface IState {
}

export default class Row extends React.Component<RNEssentialz.Row, IState> {
    constructor(props: RNEssentialz.Row) {
        super(props);
    }

    getDefaultStyle() {
        const { style, spacing, centered } = this.props;
        let defaultSpacing = spacing ? spacing : 10;
        const halfSpacing = defaultSpacing / 2;

        return {
            padding: halfSpacing,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: centered ? 'center' : 'flex-start',
            flexWrap: 'wrap',
            ...style as any,
        } as StyleProp<ViewStyle>;
    }

    getDefaultWrapperStyle() {
        const { spacing } = this.props;
        let defaultSpacing = spacing ? spacing : 10;

        return {
            width: '100%',
            marginLeft: defaultSpacing * -1,
            marginRight: defaultSpacing * -1,
            marginTop: defaultSpacing * -1,
            marginBottom: defaultSpacing * -1,
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
        const wrapperStyle = this.getDefaultWrapperStyle();

        return (
            <View
                style={{
                    ...wrapperStyle as any
                }}
            >
                <View
                    style={{
                        ...defaultStyle as any
                    }}
                >
                    {this.renderChildren()}
                </View>
            </View>
        );
    }
}