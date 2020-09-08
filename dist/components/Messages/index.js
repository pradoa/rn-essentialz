import React from 'react';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
export default class WithMessages extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return (React.createElement(React.Fragment, null,
            children,
            React.createElement(FlashMessage, { position: "top" })));
    }
}
export const showNotification = showMessage;
export const hideNotification = hideMessage;
