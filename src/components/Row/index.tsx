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
        const { style, spacing } = this.props;
        let defaultSpacing = spacing ? spacing : 10;
        const halfSpacing = defaultSpacing / 2;

        return {
            padding: halfSpacing,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            ...style as any,
        } as StyleProp<ViewStyle>;
    }

    getDefaultWrapperStyle() {
        const { spacing } = this.props;
        let defaultSpacing = spacing ? spacing : 10;
        const halfSpacing = defaultSpacing / 2;

        return {
            width: '100%',
            marginLeft: halfSpacing * -1,
            marginRight: halfSpacing * -1,
            marginTop: halfSpacing * -1,
            marginBottom: halfSpacing * -1,
        } as StyleProp<ViewStyle>;
    }

    renderChildren() {
        const { children } = this.props;

        if (!children) return null;

        if (Array.isArray(children)) {
            return React.Children.map(children, (c: any, i) =>
                React.cloneElement(c, {
                    parentElement: this,
                })
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