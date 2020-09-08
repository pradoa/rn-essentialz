import React from 'react';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

interface IState {
}

export default class WithMessages extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const { children } = this.props;

        return (
            <>
                {children}
                <FlashMessage position="top" />
            </>
        );
    }
}

export const showNotification = showMessage;
export const hideNotification = hideMessage;