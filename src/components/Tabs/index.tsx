import React from 'react';
import { StyleProp, ViewStyle, View, Text, ImageBackgroundComponent, TextStyle, TouchableWithoutFeedback } from 'react-native';
import { RNEssentialz } from 'rn-essentialz';

interface IState {
}

export default class Tabs extends React.Component<RNEssentialz.Tabs, IState> {
    constructor(props: RNEssentialz.Tabs) {
        super(props);
    }

    getDefaultStyle() {
        const { style } = this.props;

        return {
            padding: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            ...style as any,
        } as StyleProp<ViewStyle>;
    }

    getDefaultTabWrapperStyle() {
        return {
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#444',
            flexDirection: 'row',
            flexWrap: 'wrap',
        } as StyleProp<ViewStyle>;
    }

    getDefaultTabStyle(selected?: boolean) {
        const { fullWidth } = this.props;
        return {
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 15,
            paddingRight: 15,
            borderBottomWidth: 3,
            borderBottomColor: selected ? '#444' : 'transparent',
            flex: fullWidth ? 1 : 0,
        } as StyleProp<ViewStyle>;
    }

    getDefaultTabTitleStyle() {
        return {
            fontSize: 16,
            textAlign: 'center'
        } as StyleProp<TextStyle>;
    }

    getDefaultChildrenWrapperStyle() {
        return {
            width: '100%',
            height: 'auto',
            flexGrow: 1,
        } as StyleProp<ViewStyle>;
    }

    renderChildren() {
        const { children, current } = this.props;

        if (!children) return null;

        if (Array.isArray(children)) {
            return React.Children.map(children, (c: any, i) => {
                const selected = current && current === c.props.id ? true : false;
                return (selected && c ? React.cloneElement(c, {
                    parentElement: this,
                }) : null);
            });
        }

        return children;
    }

    changeTab(newTabId: string) {
        const { onTabChange } = this.props;
        if (onTabChange)
            onTabChange(newTabId);
    }

    renderTabs() {
        const { children, current } = this.props;

        if (!children) return null;

        if (Array.isArray(children)) {
            return (
                <View style={this.getDefaultTabWrapperStyle()}>
                    {
                        React.Children.map(children, (c: React.ReactElement<RNEssentialz.Tab>, i) => {
                            const selected = current && current === c.props.id ? true : false;
                            return c ? (
                                <TouchableWithoutFeedback onPress={() => this.changeTab(c.props.id)}>
                                    <View style={this.getDefaultTabStyle(selected)}>
                                        <Text style={this.getDefaultTabTitleStyle()}>{c.props.title ? c.props.title : `Tab ${c.props.id} `}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            ) : c;
                        })
                    }
                </View>
            );
        }

        return (
            <View style={this.getDefaultTabWrapperStyle()}>
                {children}
            </View>
        );
    }

    render() {

        const defaultStyle = this.getDefaultStyle();
        const defaultCWStyle = this.getDefaultChildrenWrapperStyle();

        return (
            <View
                style={{
                    ...defaultStyle as any
                }}
            >
                {this.renderTabs()}
                <View
                    style={{
                        ...defaultCWStyle as any
                    }}
                >
                    {this.renderChildren()}
                </View>
            </View>
        );
    }
}