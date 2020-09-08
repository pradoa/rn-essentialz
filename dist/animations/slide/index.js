import React from 'react';
import { Animated, Easing } from 'react-native';
export default class SlideAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animateValue: new Animated.Value(props.fromValue ? props.fromValue : 0)
        };
    }
    doAnimate(cb) {
        let { toValue, time, delay } = this.props;
        const { animateValue } = this.state;
        Animated.timing(animateValue, {
            useNativeDriver: true,
            toValue: toValue ? toValue : 0,
            duration: time ? time : 2000,
            easing: Easing.inOut(Easing.quad)
        }).start();
        if (cb) {
            if (!delay)
                delay = 0;
            setTimeout(() => {
                cb();
            }, time ? (time + delay) : 2000 + delay);
        }
    }
    render() {
        const { animateValue } = this.state;
        return (React.createElement(Animated.View, { style: { marginTop: animateValue } }, this.props.children));
    }
}
