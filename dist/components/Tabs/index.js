import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
export default class Tabs extends React.Component {
    constructor(props) {
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
            ...style,
        };
    }
    getDefaultTabWrapperStyle() {
        return {
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#444',
            flexDirection: 'row',
            flexWrap: 'wrap',
        };
    }
    getDefaultTabStyle(selected) {
        const { fullWidth } = this.props;
        return {
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 15,
            paddingRight: 15,
            borderBottomWidth: 3,
            borderBottomColor: selected ? '#444' : 'transparent',
            flex: fullWidth ? 1 : 0,
        };
    }
    getDefaultTabTitleStyle() {
        return {
            fontSize: 16,
            textAlign: 'center'
        };
    }
    getDefaultChildrenWrapperStyle() {
        return {
            width: '100%',
            height: 'auto',
            flexGrow: 1,
        };
    }
    renderChildren() {
        const { children, current } = this.props;
        if (!children)
            return null;
        if (Array.isArray(children)) {
            return React.Children.map(children, (c, i) => {
                const selected = current && current === c.props.id ? true : false;
                return (selected && c ? React.cloneElement(c, {
                    parentElement: this,
                }) : null);
            });
        }
        return children;
    }
    changeTab(newTabId) {
        const { onTabChange } = this.props;
        if (onTabChange)
            onTabChange(newTabId);
    }
    renderTabs() {
        const { children, current } = this.props;
        if (!children)
            return null;
        if (Array.isArray(children)) {
            return (React.createElement(View, { style: this.getDefaultTabWrapperStyle() }, React.Children.map(children, (c, i) => {
                const selected = current && current === c.props.id ? true : false;
                return c ? (React.createElement(TouchableWithoutFeedback, { onPress: () => this.changeTab(c.props.id) },
                    React.createElement(View, { style: this.getDefaultTabStyle(selected) },
                        React.createElement(Text, { style: this.getDefaultTabTitleStyle() }, c.props.title ? c.props.title : `Tab ${c.props.id} `)))) : c;
            })));
        }
        return (React.createElement(View, { style: this.getDefaultTabWrapperStyle() }, children));
    }
    render() {
        const defaultStyle = this.getDefaultStyle();
        const defaultCWStyle = this.getDefaultChildrenWrapperStyle();
        return (React.createElement(View, { style: {
                ...defaultStyle
            } },
            this.renderTabs(),
            React.createElement(View, { style: {
                    ...defaultCWStyle
                } }, this.renderChildren())));
    }
}
